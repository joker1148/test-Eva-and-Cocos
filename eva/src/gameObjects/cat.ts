import { GameObject } from '@eva/eva.js';
import { Spine } from '@eva/plugin-renderer-spine';

export default function createSpine(name: any, resource: any,animationName: any) {
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
  const spine = new Spine({ resource, animationName });
  gameObject.addComponent(spine);
  spine.on('complete', () => {
    // console.log(e);
  });
  spine.play(animationName);
  return gameObject
}
