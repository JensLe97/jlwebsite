import Phaser from "phaser";
import { COLOR_STRING } from "../shared";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: "preload" });
  }

  preload() {
    this.load.atlas("flappy", "images/flappy.png", "assets/flappy.json");
  }

  create() {
    COLOR_STRING.forEach((color) => {
      this.anims.create({
        key: `${color}-fly`,
        frames: [
          { key: "flappy", frame: `${color}bird-upflap.png` },
          { key: "flappy", frame: `${color}bird-midflap.png` },
          { key: "flappy", frame: `${color}bird-downflap.png` },
        ],
        repeat: -1,
        frameRate: 10,
      });
      this.anims.create({
        key: `${color}-idle`,
        frames: [{ key: "flappy", frame: `${color}bird-midflap.png` }],
        repeat: -1,
        frameRate: 10,
      });
    });
  }

  update(): void {
    this.scene.start("game");
  }
}
