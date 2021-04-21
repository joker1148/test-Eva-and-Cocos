// import createBackground from './gameObjects/background';
// import createBasketFront from './gameObjects/board/basketFront';
// import createBoard from './gameObjects/board/board';
// import createBall from './gameObjects/ball';
// import createBtn from './gameObjects/btn';
import createSpine from './gameObjects/cat';
import resources from './resources';
import { Game, resource } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
// import { ImgSystem } from '@eva/plugin-renderer-img';
// import { EventSystem } from '@eva/plugin-renderer-event';
// import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation';
// import { RenderSystem } from '@eva/plugin-renderer-render';
// import { TransitionSystem } from '@eva/plugin-transition';
// import { GraphicsSystem } from '@eva/plugin-renderer-graphics';
// import { TextSystem } from '@eva/plugin-renderer-text';
import {  SpineSystem } from '@eva/plugin-renderer-spine';
// import { StatsSystem } from '@eva/plugin-stats'


resource.addResource(resources);

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1484,
      antialias: true,
    }),
    new SpineSystem(),
    // new ImgSystem(),
    // new TransitionSystem(),
    // new SpriteAnimationSystem(),
    // new RenderSystem(),
    // new EventSystem(),
    // new GraphicsSystem(),
    // new TextSystem(),
  ],
});

game.scene.transform.size.width = 750;
game.scene.transform.size.height = 1484;

// const statsSystem = new StatsSystem({
//   show: true, 
//   style: {
//     x: 0,
//     y: 50,
//     width: 20,
//     height: 12,
//   },
// });

// game.addSystem(statsSystem);

for(let i = 1; i <= 10; i++) {
  for(let j = 0; j < 10; j++) {
    game.scene.addChild(createSpine(i * j, `spine${i}`, 'standby'))
  }
}
// window.playAnim = playAnim;
window.game = game;
