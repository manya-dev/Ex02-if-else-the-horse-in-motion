function preload() {
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    frames[i] = loadImage(`assets/frame_${i}.png`);
  }
}

