const TOTAL_FRAMES = 11;
let frames = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(10);

  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    let img = await loadImage(`assets/frame_${i}.png`);
    frames.push(img);
  }
}

function draw() {
  background(0);

  let frameIndex = frameCount % frames.length;
  let currentImage = frames[frameIndex];

  image(currentImage, width / 2, height / 2, newWidth, newHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}