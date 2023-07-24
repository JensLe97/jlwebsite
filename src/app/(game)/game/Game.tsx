// 'use client'
import React, { useEffect, useRef } from "react";
// import Phaser from 'phaser'
// import { GameScene } from './scenes/GameScene'
import { PreloadScene } from "./scenes/PreloadScene";
// import { rootStore } from './store/root'

/* ============================ Flappy Bird ============================
 * This game is inspired by the implementation of
 * https://github.com/ourcade/flappy-bird-hathora under the MIT License.
 * Images and code snippes are taken from the original repository.
 * =====================================================================
 */

function Game() {
  // const ref = useRef()

  // useEffect(() => {
  // 	const game = new Phaser.Game({
  // 		type: Phaser.AUTO,
  // 		parent: ref.current,
  // 		width: 720,
  // 		height: 480,
  // 		physics: {},
  // 		scale: {
  // 			mode: Phaser.Scale.ScaleModes.FIT,
  // 			expandParent: false,
  // 			autoRound: true,
  // 		},
  // 	})

  // 	game.scene.add('preload', PreloadScene)
  // 	// game.scene.add('game', GameScene)

  // 	game.scene.start('preload')

  // 	// return () => {
  // 	// 	game.destroy(true)
  // 	// }
  // })

  return (
    <div
      style={{
        aspectRatio: "16 / 9",
      }}
    >
      WebGame development in progress...
    </div>
  );
}

export default Game;
