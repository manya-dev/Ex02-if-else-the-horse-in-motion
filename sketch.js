const TOTAL_FRAMES = 11;
let frames = [];
let currentFrame = 0;

//preload 
async function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(12);
  

  frames = await Promise.all(
    Array.from({ length: TOTAL_FRAMES }, (_, index) =>
      loadImage(`assets/frame_${index + 1}.png`)
    )
  );
  frames.push(await loadImage("assets/frame_12.png"));

  imageMode(CENTER);
}

        //click animation
//function draw() {
//  background(0);
//  if (frames.length > 0) {
//    const frame = frames[currentFrame];
//    const scaleFactor = min(width / frame.width, height / frame.height);
//    image(frame, width / 2, height / 2,
//      frame.width * scaleFactor,
//      frame.height * scaleFactor
//    );
//  }
//}

//click animation with mouse pressed
function draw() {
  
  background(0);

  const frame = mouseIsPressed ? frames[currentFrame] : frames[TOTAL_FRAMES];
  const scaleFactor = min(width / frame.width, height / frame.height);

  drawingContext.save();
  drawingContext.filter = getCursorFilter();
  image(frame, width / 2, height / 2, frame.width * scaleFactor, frame.height * scaleFactor);
  drawingContext.restore();

  if (mouseIsPressed) {
  //mouse pressed - animation
    currentFrame = (currentFrame + 1) % TOTAL_FRAMES;
  } else {
    //mouse not pressed 
    currentFrame = 0;
    
    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("Hold mouse button to gallop", width / 2, height - 30);
    //font 'Courier New'
    textFont('Courier New');
  }

  textFont('Courier New');
  fill(255);
  textAlign(CENTER);
  textSize(16);
  text("Move mouse to change filters", width / 2, 30);
}


//filter change 
function getCursorFilter() {
  if (mouseX < width / 3) {
    return "contrast(300%)";
  } else if (mouseX < (width * 2) / 3) {
    return "sepia(100%)";
  } else {
    return "grayscale(100%)";
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