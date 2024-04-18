import { Assets, AnimatedSprite, Texture } from "pixi.js";
export function ratAnimation(app) {
  const rat = [];
  for (let i = 0; i <= 4; i++) {
    rat.push(Texture.from(`spritesheet${i}.png`)); // Use the correct frame name
  }
  //const anim = new AnimatedSprite(frames);
  const rat_anim = new AnimatedSprite(rat);

  rat_anim.x = app.screen.width / 2;
  rat_anim.y = app.screen.height / 2;
  rat_anim.anchor.set(0.74);
  rat_anim.animationSpeed = 0.4;
  rat_anim.play();
  rat_anim.onLoop = () => {
    rat_anim.loop = true; // Set loop to false to stop looping
  };
  return rat_anim;
}
