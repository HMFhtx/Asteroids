let img;
let grader;
let speed;
let text1;
grader = 0;
speed = 0;

function preload() {
  img = loadImage('Rød_Trekant.png');
}


function setup() {  
  imageMode(CENTER);
  createCanvas(innerWidth, innerHeight);
 
  }

function draw() {
  background(0);

  grader = grader + speed;

  translate(innerWidth/2, innerHeight/2);
  rotate(grader);
  image(img, 0, 0, 600, 300);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    speed = speed - 0.01;
  } else if (keyCode === RIGHT_ARROW) {
    speed = speed + 0.01;
  } 
}