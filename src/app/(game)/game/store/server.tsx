import { Color, State } from "../api/types";
import type { GameState, Player as PlayerType, Vector2 } from "../api/types";

class Vec2 implements Vector2 {
  x = 0;
  y = 0;
}

class ServerPlayer implements PlayerType {
  id: string = "";
  color = Color.Yellow;
  ready: boolean = false;
  location = new Vec2();
  velocity = new Vec2();
  rotation = 0;
  enabled = true;
  lastTimeStamp = -1;
}

class ServerState {
  time: number = 0;
  startTime: number = 0;
  state: State = State.Empty;
  players = new Map<string, ServerPlayer>();
  pPlayers = new Map<string, ServerPlayer>();
  cPlayers = new Map<string, ServerPlayer>();
  winner = "";
}
export class ServerStore {
  private readonly client: string;
  private _token: string | null = null;
  readonly state = new ServerState();
  private _rtt = 0;
  private moves: { time: number; flap: boolean }[] = [];
  private needsReplayAndPrediction = false;
  get token() {
    return this._token;
  }
  get user() {
    return "0";
  }
  get connection() {
    return null;
  }
  get localPlayer() {
    if (!this.user) {
      return null;
    }
    return this.state.players.get(this.user);
  }
  get localClientPlayer() {
    if (!this.user) {
      return null;
    }
    return this.state.cPlayers.get(this.user);
  }
  get rtt() {
    return this._rtt;
  }
  constructor() {
    this.client = "";
  }

  action(flap?: boolean) {
    const now = Date.now();
    // ping used as heartbeat and means of
    // calculating round trip time
    if (flap === undefined) {
      return;
    }
    // store moves for each frame with a timestamp
    // will be used for client side replay
    // this.moves.push({ time: now, flap });
  }
  private updateState(newState: GameState) {
    this.state.time = newState.time;
    this.state.startTime = newState.startTime;
    this.state.state = newState.state;
    this.state.winner = newState.winner;
    // go through players
    newState.players.forEach((p) => {
      const serverPlayer = this.state.players.get(p.id)!;
      const predictionPlayer = this.state.pPlayers.get(p.id);
      const clientPlayer = this.state.cPlayers.get(p.id);
      const reEnable = !serverPlayer.enabled && p.enabled;
      const disable = serverPlayer.enabled && !p.enabled;
      // last received server player data
      serverPlayer.id = p.id;
      serverPlayer.color = p.color;
      serverPlayer.ready = p.ready;
      serverPlayer.lastTimeStamp = p.lastTimeStamp;
      serverPlayer.enabled = p.enabled;
    });
    const p = this.state.players.get(this.user);
    if (p) {
      // calculate RTT
      const now = Date.now();
      // NOTE: assuming packets always arrive in the
      // order it was sent aka old timestamps won't come after
      // newer timestamps
      const rtt = (now - (p.lastTimeStamp || now)) * 0.001;
      this._rtt = (this._rtt + rtt) * 0.5;
    }
    this.needsReplayAndPrediction = true;
  }
}
