let x = innerWidth/2;
let y = innerHeight/2;
let n = 0;

function preload() {
  img = loadImage('Rød_Trekant.png');
}

function setup() {  
  imageMode(CENTER);
  createCanvas(innerWidth, innerHeight);

  }

function draw() {
  background(0);

  if (keyIsDown(LEFT_ARROW)) {
    n = n -0.05;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    n = n + 0.05;
  }

  if (keyIsDown(UP_ARROW)) {
    y = y - 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y = y + 5;
  }

  if (x > innerWidth + 10) {
    x = 0;
  }



  translate(x, y);
  rotate(n + PI / 2);
  image(img, 0, 0, 150, 150);
  

}