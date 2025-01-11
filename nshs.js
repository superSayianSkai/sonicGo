const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;

const playerImage = new Image();
playerImage.src = "./sprites/shadow_dog.png";

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 0;
let frameY = 3;  // Assuming you are using the 4th row in the sprite sheet
let gameFrame = 0;
let staggerFrame = 30;  // Increased this value to slow down the animation

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  
  // Update the frame every staggerFrame cycles
  if (gameFrame % staggerFrame == 0) {
    if (frameX < 6) frameX++;  // Update to the next frame
    else frameX = 0;  // Reset to the first frame if the last one is reached
  }

  gameFrame++;  // Increment gameFrame on every animation cycle
  requestAnimationFrame(animate);  // Keep calling animate
};

animate();  // Start the animation loop
