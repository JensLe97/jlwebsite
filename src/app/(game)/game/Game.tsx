import React, { useEffect, useRef, useState } from "react";
import { PreloadScene } from "./scenes/PreloadScene";
import { GameScene } from "./scenes/GameScene";
import { Game as GameType, Types } from "phaser";

/* ============================ Flappy Bird ============================
 * This game is inspired by the implementation of
 * https://github.com/ourcade/flappy-bird-hathora under the MIT License.
 * Images and code snippes are taken from the original repository.
 * =====================================================================
 */

export function useGame(
  config: Types.Core.GameConfig,
  containerRef: React.RefObject<HTMLDivElement>
): GameType | undefined {
  const [game, setGame] = useState<GameType>();
  useEffect(() => {
    if (!game && containerRef.current) {
      const newGame = new GameType({ ...config, parent: containerRef.current });
      setGame(newGame);
    }
    return () => {
      game?.destroy(true);
    };
  }, [config, containerRef, game]);

  return game;
}

const gameConfig: Types.Core.GameConfig = {
  width: 720,
  height: 480,
  title: "Flappy Bird",
  parent: "game-content",
  type: Phaser.AUTO,
  physics: {},
  scale: {
    mode: Phaser.Scale.FIT,
    autoRound: false,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: "game-content",
  },
  render: {},
  scene: [PreloadScene, GameScene],
  backgroundColor: "#fff",
};

function Game() {
  const ref = useRef<HTMLDivElement>(null);
  useGame(gameConfig, ref);

  return <div id="game-content" ref={ref} />;
}

export default Game;
