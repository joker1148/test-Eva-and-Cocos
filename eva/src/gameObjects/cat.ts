import { GameObject } from '@eva/eva.js';
import { Spine } from '@eva/plugin-renderer-spine';

export default function createCat(name: any) {
  const gameObject = new GameObject(`spine${name}`, {
    anchor: {
      x: Math.random(),
      y: Math.random(),
    },
    scale: {
      x: 0.5,
      y: 0.5,
    },
  });
  const spine = new Spine({ resource: 'anim', animationName: 'dianji' });
  gameObject.addComponent(spine);
  // console.log(spine)
  spine.on('complete', () => {
    // console.log(e);
  });
  // console.log(spine)
  spine.play('dianji');
  return gameObject
}
