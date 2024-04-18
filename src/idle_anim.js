import { Assets, AnimatedSprite, Texture } from "pixi.js";
export function idleAnimation(app) {
  const idle = [];
  for (let i = 0; i <= 3; i++) {
    idle.push(Texture.from(`rat${i}.png`)); // Use backticks for template literals
  }
  const idle_anim = new AnimatedSprite(idle);
  idle_anim.x = app.screen.width / 2;
  idle_anim.y = app.screen.height / 2;
  idle_anim.anchor.set(0.75);
  idle_anim.animationSpeed = 0.1;
  idle_anim.play();
  idle_anim.loop = true; // Set loop to true to keep looping
  return idle_anim;
}
