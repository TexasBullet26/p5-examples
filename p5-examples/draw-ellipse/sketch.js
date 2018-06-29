function setup() {
  createCanvas(1100, 550);
}

function draw() {
  if (mouseIsPressed) {
    fill(255, 190, 225); 
  } else {
    fill(255, 69, 99);
  }
  ellipse(mouseX, mouseY, 55, 55);
}
