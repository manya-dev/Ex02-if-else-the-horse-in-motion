const TOTAL_FRAMES = 11;
let frames = [];
let currentFrame = 0;

//preload 
async function setup() {
  createCanvas(windowWidth, windowHeight);
  //imageMode(CENTER);
  //frameRate(10);

  frames = await Promise.all(
    Array.from({ length: TOTAL_FRAMES }, (_, index) =>
      loadImage(`assets/frame_${index + 1}.png`)
    )
  );

  imageMode(CENTER);
}

function draw() {
  background(0);
//if else 
  if (frames.length > 0) {
    const frame = frames[currentFrame];
    const scaleFactor = min(width / frame.width, height / frame.height);
    image(frame, width / 2, height / 2,
      frame.width * scaleFactor,
      frame.height * scaleFactor
    );
  }
}

function mousePressed() {
  if (currentFrame < frames.length - 1) {
    currentFrame++;
  } else {
    currentFrame = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}