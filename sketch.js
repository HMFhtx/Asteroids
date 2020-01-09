var ship;
var asteroids = [];
var laser = [];

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

  for (var i = 0; i < lasers.length; i++) {
    lasers[i].render();
    lasers[i].update();
  }
}
// Hans har skrevet der her jeg her ombestemt mig
function keyReleased() {
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed() {
  if (key == ' ') {
    lasers.push(new Laser(ship.pos));
  } else if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
  }

}

