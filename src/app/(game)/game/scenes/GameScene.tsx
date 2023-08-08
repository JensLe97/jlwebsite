import Phaser from "phaser";

import { rootStore } from "../store";
import { level } from "../shared/level";
import { Logic, Player, DELTA, STEP, VELOCITY, COLOR_STRING } from "../shared";
import { State, Color } from "../api/types";

const delta = DELTA;
const step = STEP;
let accumulator = 0;

export class GameScene extends Phaser.Scene {
  private players = new Map<string, Phaser.GameObjects.Sprite>();
  private playersDebug = new Map<string, Phaser.GameObjects.Rectangle>();
  private playersPredictedDebug = new Map<
    string,
    Phaser.GameObjects.Rectangle
  >();
  private readyText!: Phaser.GameObjects.Text;
  private countdownText!: Phaser.GameObjects.Text;

  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private ground!: Phaser.GameObjects.TileSprite;

  constructor() {
    super({ key: "game" });
  }

  init() {
    this.cursors = this.input.keyboard!.createCursorKeys();
    this.players.clear();
    this.playersDebug.clear();
    this.playersPredictedDebug.clear();

    let intervalId = -1;
    const handleBlur = () => {
      intervalId = window.setInterval(() => {}, 500);
    };
    const handleFocus = () => {
      window.clearInterval(intervalId);
      intervalId = -1;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    this.events.once(Phaser.Scenes.Events.DESTROY, () => {});

    this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    });
  }

  create() {
    // rootStore.setDebug(true);

    const { width, height } = this.scale;
    this.add
      .tileSprite(0, height, width, height, "flappy", "background-day.png")
      .setOrigin(0, 1)
      .setScrollFactor(0);

    const goal = level.goal;
    this.add
      .image(goal.left, goal.top, "flappy", "goal.png")
      .setOrigin(0)
      .setAlpha(0.7);

    this.readyText = this.add
      .text(width * 0.5, height * 0.6, "Press SPACE when ready...")
      .setStroke("#000000", 4)
      .setOrigin(0.5)
      .setScrollFactor(0);

    this.countdownText = this.add
      .text(width * 0.5, height * 0.5, "3", {
        fontSize: "100px",
        stroke: "#000000",
        strokeThickness: 12,
      })
      .setOrigin(0.5)
      .setVisible(false)
      .setScrollFactor(0);

    level.pipes.forEach((pipe) => {
      const p = this.add
        .image(pipe.x, pipe.y, "flappy", "pipe-green.png")
        .setOrigin(0);
      p.flipY = pipe.flipped;
    });

    const g = level.ground;
    this.ground = this.add
      .tileSprite(
        g.left,
        g.top,
        g.right - g.left,
        g.bottom - g.top,
        "flappy",
        "base.png"
      )
      .setOrigin(0)
      .setScrollFactor(0);

    this.input.keyboard!.once("keydown-SPACE", () => {
      this.readyText.setVisible(false);
      rootStore.server.state.state = State.Playing;
    });
    this.input.once("pointerdown", () => {
      this.readyText.setVisible(false);
      rootStore.server.state.state = State.Playing;
    });

    this.handlePlayerJoins();
    this.handleStateEnter();
  }

  private handlePlayerJoins() {
    rootStore.server.state.players.set("0", {
      id: "0",
      ready: false,
      location: { x: 180, y: 120 + 0 * 30 },
      velocity: { x: 0, y: 0 },
      rotation: 0,
      enabled: true,
      lastTimeStamp: 0,
      color: Color.Yellow,
    });
    const players = rootStore.server.state.players.entries();
    const localPlayer = rootStore.server.localPlayer;

    this.readyText.visible = !localPlayer?.ready ?? false;

    for (const key of this.players.keys()) {
      if (rootStore.server.state.players.has(key)) {
        continue;
      }

      this.players.get(key)?.destroy();
      this.playersDebug.get(key)?.destroy();
      this.playersPredictedDebug.get(key)?.destroy();

      this.players.delete(key);
      this.playersDebug.delete(key);
      this.playersPredictedDebug.delete(key);
    }

    for (const entry of players) {
      const id = entry[0];
      if (this.players.has(id)) {
        continue;
      }

      const colors = [0xf8b733, 0xff0000, 0xbf4ed6, 0x3db229];
      const p = entry[1];
      const player = this.add
        .sprite(
          p.location.x,
          p.location.y,
          "flappy",
          `${COLOR_STRING[p.color]}bird-midflap.png`
        )
        .setOrigin(0.5)
        .play(`${COLOR_STRING[p.color]}-idle`);

      this.players.set(id, player);

      const debug = this.add
        .rectangle(p.location.x, p.location.y, 34, 24, colors[p.color], 0.5)
        .setOrigin(0.5)
        .setVisible(rootStore.debug);
      this.playersDebug.set(id, debug);

      const predicted = this.add
        .rectangle(p.location.x, p.location.y, 34, 25)
        .setOrigin(0.5)
        .setStrokeStyle(1, 0x000000, 0.5)
        .setFillStyle()
        .setVisible(rootStore.debug);
      this.playersPredictedDebug.set(id, predicted);

      if (localPlayer!.id === p.id) {
        this.cameras.main.startFollow(player, true);
        this.cameras.main.setFollowOffset(-34, 0);
        this.cameras.main.setDeadzone(50, 0);

        this.cameras.main.setBounds(-1000, 0, 10000, this.scale.height);
      }
    }
  }

  private handleStateEnter() {
    if (rootStore.server.state.state == State.Countdown) {
      this.countdownText.setVisible(true);
    }
    this.countdownText.setVisible(false);

    rootStore.server.state.players.forEach((player) => {
      const serverPlayer = rootStore.server.state.players.get(player.id);
      player.velocity.x = VELOCITY.x;
      player.velocity.y = VELOCITY.y;

      player.location.x = serverPlayer!.location.x;
      player.location.y = serverPlayer!.location.y;

      const sprite = this.players.get(player.id);
      sprite!.play(`${COLOR_STRING[player.color]}-fly`);
    });
    this.time.delayedCall(1000, () => {
      this.cameras.main.setLerp(0.3, 0.5);
    });
  }

  fixedUpdate(dt: number) {
    const space =
      Phaser.Input.Keyboard.JustDown(this.cursors.space) ||
      this.input.activePointer.isDown;

    switch (rootStore.server.state.state) {
      default:
        // this also acts as a keep alive heartbeat
        rootStore.server.action();
        break;

      case State.Finished: {
        rootStore.server.action();
        for (const entry of rootStore.server.state.players.entries()) {
          const id = entry[0];
          const sprite = this.players.get(id)!;
          const debug = this.playersDebug.get(id)!;
          const predicted = this.playersPredictedDebug.get(id)!;

          const p = rootStore.server.state.players.get(id)!;
          const cp = rootStore.server.state.players.get(id)!;
          const pp = rootStore.server.state.players.get(id)!;
          sprite!.play(`${COLOR_STRING[p.color]}-idle`);

          sprite.x = cp.location.x;
          sprite.y = cp.location.y;
          debug.x = p.location.x;
          debug.y = p.location.y;
          predicted.x = pp.location.x;
          predicted.y = pp.location.y;
          const winner = rootStore.server.state.winner;

          if (!winner) {
            const { width, height } = this.scale;

            const xWin = p.location.x;
            const yWin =
              p.location.y > height * 0.5 ? height * 0.25 : height * 0.75;
            const t = this.add.text(
              xWin - width * 0.12,
              yWin,
              "Press SPACE to restart...",
              {
                stroke: "#000000",
                strokeThickness: 3,
              }
            );
            this.input.keyboard!.once("keydown-SPACE", () => {
              t.setVisible(false);
              this.scene.restart();
              rootStore.server.state.state = State.Empty;
            });
            this.input.once("pointerdown", () => {
              t.setVisible(false);
              this.scene.restart();
              rootStore.server.state.state = State.Empty;
            });
          }
        }

        const winningPlayer = this.players.get(rootStore.server.state.winner);
        if (!winningPlayer) {
          return;
        }

        const cam = this.cameras.main;
        cam.stopFollow();
        cam.pan(
          winningPlayer.x + 17,
          winningPlayer.y,
          700,
          Phaser.Math.Easing.Sine.InOut
        );

        const { height } = this.scale;

        const xWin = winningPlayer.x;
        const yWin =
          winningPlayer.y > height * 0.5 ? height * 0.25 : height * 0.75;
        const t = this.add
          .text(xWin, yWin, "Winner!", {
            fontSize: "100px",
            stroke: "#000000",
            strokeThickness: 10,
          })
          .setOrigin(0.5);
        this.add
          .text(t.x, t.y + t.height * 0.5, "Press SPACE to continue...", {
            stroke: "#000000",
            strokeThickness: 3,
          })
          .setOrigin(0.5);

        this.input.keyboard!.once("keydown-SPACE", () => {
          t.setVisible(false);
          this.scene.restart();
          rootStore.server.state.state = State.Empty;
          rootStore.server.state.winner = "";
        });
        this.input.once("pointerdown", () => {
          t.setVisible(false);
          this.scene.restart();
          rootStore.server.state.state = State.Empty;
          rootStore.server.state.winner = "";
        });
        break;
      }

      case State.Playing: {
        rootStore.server.action(space);
        const id = "0";
        const sprite = this.players.get(id)!;
        const debug = this.playersDebug.get(id)!;
        const predicted = this.playersPredictedDebug.get(id)!;
        const cp = rootStore.server.state.players.get(id)!;
        const isLocalPlayer = id === rootStore.server.localPlayer!.id;

        if (isLocalPlayer) {
          Logic.processInput(cp, { space });
        }

        const playerRect = Player.rect(cp.location.x, cp.location.y);
        const { died } = Logic.collisions(playerRect);
        cp.enabled = !died;
        if (died) {
          this.cameras.main.shake(200, 0.02);
          rootStore.server.state.state = State.Finished;
        }

        const { x, y, rot } = Logic.playerMove(
          cp.location.x,
          cp.location.y,
          cp.rotation,
          cp,
          dt
        );
        cp.location.x = x;
        cp.location.y = y;
        cp.rotation = rot;

        if (cp.enabled) {
          const playerRect = Player.rect(cp.location.x, cp.location.y);
          const { goal, died } = Logic.collisions(playerRect);
        }

        sprite.x = cp.location.x;
        sprite.y = cp.location.y;
        sprite.rotation = cp.rotation;

        if (
          cp.rotation > Math.PI / 5 &&
          sprite.anims.currentAnim?.key != `${COLOR_STRING[cp.color]}-idle`
        ) {
          sprite.play(`${COLOR_STRING[cp.color]}-idle`);
        } else if (
          cp.rotation < Math.PI / 5 &&
          sprite.anims.currentAnim?.key != `${COLOR_STRING[cp.color]}-fly`
        ) {
          sprite.play(`${COLOR_STRING[cp.color]}-fly`);
        }

        const p = rootStore.server.state.players.get(id)!;

        debug.x = p.location.x;
        debug.y = p.location.y;
        debug.rotation = p.rotation;

        if (p.enabled) {
          const playerRect = Player.rect(p.location.x, p.location.y);
          const { goal, died } = Logic.collisions(playerRect);

          if (goal) {
            rootStore.server.state.winner = p.id;
            rootStore.server.state.state = State.Finished;
          } else if (died) {
            // Logic.queueRespawn(p);
          }
        }
        break;
      }

      case State.Countdown: {
        rootStore.server.action();
        const diff =
          rootStore.server.state.startTime - rootStore.server.state.time;
        const secs = Math.ceil(diff);
        this.countdownText.setText(`${secs}`);
        break;
      }
    }

    const sx = this.cameras.main.scrollX;
    this.ground.tilePositionX = sx;
  }

  update(_t: number, dt: number) {
    if (dt > 1e3) {
      // skip large dt's
      return;
    }

    accumulator += dt;

    while (accumulator >= delta) {
      this.fixedUpdate(step);
      accumulator -= delta;
    }
  }
}
