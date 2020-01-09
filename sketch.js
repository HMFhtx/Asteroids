var ship;
var asteroids = [];
var Laser = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new ship();
  asteroids.push(new Asteroid());
}

function draw() {
  background(0);
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();

  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
  }
  for (var i = 0; i < Laser.length; i++) {
    Laser[i].render();
    Laser[i].update();
  }
}

function keyReleased() {
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed() {
  if (key == ' ') {
    Laser.push(new Laser(ship.pos));
  }
  if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
  }

}

