const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 85); // Canvas width
const CANVAS_HEIGHT = (canvas.height = 100); // Canvas height

const playerImage = new Image();
playerImage.src = "./sprites/sonic.png"; 

const spriteX = 32; // Width of each sprite in the sprite sheet
const spriteY = 50; // Height of each sprite in the sprite sheet
const spriteWidth = 78;
const spriteHeight = 100;
let frameX = 0; // Start at the first frame
let frameY = 0; // Row index
let gameSpeed = 0;
let staggerFrame = 2; //controls animation speed

// Waits for the image to load before drawing
playerImage.onload = () => {
  const animate = () => {
    // Clear the canvopas before drawing a new frame
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Calculates the scaling factors to fit the canvas size while preserving the aspect ratio
    const scaleX = CANVAS_WIDTH / spriteWidth;  // Scale factor for width
    const scaleY = CANVAS_HEIGHT / spriteHeight; // Scale factor for height
    const scale = Math.min(scaleX, scaleY); // Use the smaller scale to preserve the aspect ratio

    // Calculate the new width and height with the correct scaling
    const newWidth = spriteWidth * scale;
    const newHeight = spriteHeight * scale;

    // Center the sprite on the canvas by calculating the offset
    const offsetX = (CANVAS_WIDTH - newWidth) / 2;
    const offsetY = (CANVAS_HEIGHT - newHeight) / 2;

    // Draw the image with scaling to fit the canvas while preserving the aspect ratio
    ctx.drawImage(
      playerImage, // The image
      frameX * spriteX, // sx (Start x position of the source image for cropping)
      frameY * spriteY, // sy (Start y position of the source image for cropping)
      spriteX, // sWidth (Width of the cropped image part)
      spriteY, // sHeight (Height of the cropped image part)
      offsetX, // dx (x position on the canvas where the image will be drawn)
      offsetY, // dy (y position on the canvas where the image will be drawn)
      newWidth, // dWidth (Width of the image on the canvas with scaling)
      newHeight // dHeight (Height of the image on the canvas with scaling)
    );

    // Control frame change based on the gameSpeed and staggerFrame
    if (gameSpeed % staggerFrame === 0) {
      if (frameX < 6) {
        frameX++;
      } else {
        frameX = 0; // Reset to the first frame when reaching the end
      }
    }

    // Increment gameSpeed to track time and make animation frame updates
    gameSpeed++;

    requestAnimationFrame(animate); // Keep animating
  };

  animate(); // Start the animation once the image is loaded
};