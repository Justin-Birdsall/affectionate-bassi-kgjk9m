import { Assets, AnimatedSprite, Texture } from "pixi.js";
export function deathAnimation(app) {
  const death = [];
  for (let i = 0; i <= 11; i++) {
    death.push(Texture.from(`death${i}.png`)); // Use the correct frame name
  }
  //const anim = new AnimatedSprite(frames);
  const death_anim = new AnimatedSprite(death);

  death_anim.x = app.screen.width / 2;
  death_anim.y = app.screen.height / 2;
  death_anim.anchor.set(0.0);
  death_anim.animationSpeed = 0.02;
  death_anim.play();
  death_anim.onLoop = () => {
    death_anim.loop = false; // Set loop to false to stop looping
  };
  return death_anim;
}
