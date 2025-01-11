const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const playerImage = new Image();
playerImage.src = "./sprites/shadow_dog.png";

const spriteWidth = 575; //12 row wide: 6876px/12
const spriteHeight = 523; // 10 column:  5230/10

let frameX = 0;
let frameY = 3;
let gameFrame = 0;
const staggerFrames = 2;
playerImage.onload = () => {
  const animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % 6;
    frameX = spriteWidth * position;
    ctx.drawImage(
      playerImage,
      frameX,
      frameY * spriteHeight,
      spriteWidth,
      spriteHeight,
      0,
      0,
      spriteWidth,
      spriteHeight
    );
    gameFrame++;
    requestAnimationFrame(animate);
  };
  animate();
};

// playerImage,                     // The image to draw
// frameX * spriteWidth,            // sx (start x position of the source image for cropping)
// frameY * spriteHeight,           // sy (start y position of the source image for cropping)
// spriteWidth,                     // sWidth (width of the cropped image part)
// spriteHeight,                    // sHeight (height of the cropped image part)
// 0,                               // dx (x position on the canvas)
// 0,                               // dy (y position on the canvas)
// spriteWidth,                     // dWidth (width of the image on canvas)
// spriteHeight                     // dHeight (height of the image on canvas
