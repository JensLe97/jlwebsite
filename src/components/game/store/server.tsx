import { makeAutoObservable, ObservableMap } from 'mobx'
import merge from 'lodash/merge'
import keyBy from 'lodash/keyBy'

// import { HathoraClient } from '../../.hathora/client'
import { Color, State } from '../api/types'
// import type { HathoraConnection } from '../../.hathora/client'
import type {
	GameState,
	IInitializeRequest,
	Player as PlayerType,
	Vector2,
} from '../api/types'

import { Logic, Player, DELTA, STEP } from '../shared'

const TOKEN_KEY = 'hathora-token'
function storeToken(token: string) {
	sessionStorage.setItem(TOKEN_KEY, token)
}

function getToken() {
	return sessionStorage.getItem(TOKEN_KEY)
}

class Vec2 implements Vector2 {
	x = 0
	y = 0
}

class ServerPlayer implements PlayerType {
	id: string = ''
	color = Color.Yellow
	ready: boolean = false
	location = new Vec2()
	velocity = new Vec2()
	enabled = true
	lastTimeStamp = -1

	constructor() {
		makeAutoObservable(this)
	}
}

class ServerState {
	time: number = 0
	startTime: number = 0
	state: State = State.Empty
	players = new ObservableMap<string, ServerPlayer>()
	pPlayers = new ObservableMap<string, ServerPlayer>()
	cPlayers = new ObservableMap<string, ServerPlayer>()

	winner = ''

	constructor() {
		makeAutoObservable(this)
	}
}

export class ServerStore {
	private readonly client: string
	private _token: string | null = null
	// private _connection: HathoraConnection | null = null

	readonly state = new ServerState()

	private _rtt = 0
	private moves: { time: number; flap: boolean }[] = []

	private needsReplayAndPrediction = false

	get token() {
		return this._token
	}

	get user() {
		return "0"
	}

	get connection() {
		return null
	}

	get localPlayer() {
		if (!this.user) {
			return null
		}

		return this.state.players.get(this.user)
	}

	get localClientPlayer() {
		if (!this.user) {
			return null
		}

		return this.state.cPlayers.get(this.user)
	}

	get rtt() {
		return this._rtt
	}

	constructor() {
		this.client = ""

		makeAutoObservable(this)
	}

	async login() {
		let token = getToken()
		if (token) {
			this._token = token
			return
		}

	}

	action(flap?: boolean) {
		const now = Date.now()
		// ping used as heartbeat and means of
		// calculating round trip time
		if (flap === undefined) {
			return
		}

		// if (flap) {
		// 	this.connection.flap({})
		// }

		// store moves for each frame with a timestamp
		// will be used for client side replay
		this.moves.push({ time: now, flap })
	}

	private updateState(newState: GameState) {
		this.state.time = newState.time
		this.state.startTime = newState.startTime
		this.state.state = newState.state
		this.state.winner = newState.winner

		// delete removed players
		const activePlayers = keyBy(newState.players, (p) => p.id)
		for (const key of this.state.players.keys()) {
			if (activePlayers[key]) {
				continue
			}

			this.state.players.delete(key)
			this.state.pPlayers.delete(key)
			this.state.cPlayers.delete(key)
		}

		// go through players
		newState.players.forEach((p) => {
			const serverPlayer = this.state.players.get(p.id)!
			const predictionPlayer = this.state.pPlayers.get(p.id)
			const clientPlayer = this.state.cPlayers.get(p.id)

			const reEnable = !serverPlayer.enabled && p.enabled
			const disable = serverPlayer.enabled && !p.enabled

			// last received server player data
			serverPlayer.id = p.id
			serverPlayer.color = p.color
			serverPlayer.ready = p.ready
			serverPlayer.lastTimeStamp = p.lastTimeStamp
			serverPlayer.enabled = p.enabled
			merge(serverPlayer.velocity, p.velocity)
			merge(serverPlayer.location, p.location)
		})

		const p = this.state.players.get(this.user)
		if (p) {
			// calculate RTT
			const now = Date.now()
			// NOTE: assuming packets always arrive in the
			// order it was sent aka old timestamps won't come after
			// newer timestamps
			const rtt = (now - (p.lastTimeStamp || now)) * 0.001
			this._rtt = (this._rtt + rtt) * 0.5
		}

		this.needsReplayAndPrediction = true
	}

	replayAndPrediction() {
		if (!this.needsReplayAndPrediction || this.state.state !== State.Playing) {
			return
		}

		// prediction/replay
		this.state.pPlayers.forEach((p) => {
			const sp = this.state.players.get(p.id)!
			merge(p.velocity, sp.velocity)
			merge(p.location, sp.location)

			if (p.id === "0") {
				// LOCAL player
				// remove all moves older or equal to lastTimeStamp
				while (this.moves.length > 0) {
					const move = this.moves[0]
					if (move.time > p.lastTimeStamp) {
						break
					}

					this.moves.shift()
				}

				// replay remaining moves
				for (const move of this.moves) {
					const playerRect = Player.rect(p.location.x, p.location.y)
					const { died } = Logic.collisions(playerRect)
					p.enabled = !died

					Logic.processInput(p, { space: move.flap })
					const { x, y } = Logic.playerMove(p.location.x, p.location.y, p, STEP)
					p.location.x = x
					p.location.y = y

					if (p.enabled) {
						const playerRect = Player.rect(p.location.x, p.location.y)
						Logic.collisions(playerRect)
					}
				}

				// nudge towards replayed location
				// in a perfect world, replayed location is the same as
				// client location
				const cp = this.state.cPlayers.get(p.id)!
				const dx = cp.location.x - p.location.x
				const dy = cp.location.y - p.location.y

				cp.location.x = p.location.x + dx * 0.5
				cp.location.y = p.location.y + dy * 0.5
				cp.velocity.x = p.velocity.x
				cp.velocity.y = p.velocity.y
			} else {
				// REMOTE player (dead reckoning)
				// sim for half RTT
				let accumulator = this.rtt * 0.5

				while (accumulator >= DELTA) {
					const playerRect = Player.rect(p.location.x, p.location.y)
					const { died } = Logic.collisions(playerRect)
					p.enabled = !died
					const { x, y } = Logic.playerMove(p.location.x, p.location.y, p, STEP)
					p.location.x = x
					p.location.y = y

					if (p.enabled) {
						const playerRect = Player.rect(p.location.x, p.location.y)
						Logic.collisions(playerRect)
					}

					accumulator -= DELTA
				}

				const cp = this.state.cPlayers.get(p.id)!
				const dx = cp.location.x - p.location.x
				const dy = cp.location.y - p.location.y
				cp.location.x = p.location.x + dx * 0.5
				cp.location.y = p.location.y + dy * 0.5
				cp.velocity.x = p.velocity.x
				cp.velocity.y = p.velocity.y
			}
		})

		this.needsReplayAndPrediction = false
	}
}
