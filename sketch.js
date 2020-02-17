let ship;
let asteroids = [];
let lasers = [];
let points = 0;

function preload() {
  laserSound = loadSound('LaserSound.mp3')
  explosionSound = loadSound('ExplosionSound.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  for (let i = 0; i < 10; i++) {
    asteroids.push(new Asteroid());
  }
}


function draw() {
  background(0);

  textSize(32);
  fill(255, 0, 0);
  text('Points:', 0, 25);
  text(points, 100, 27)


  for (var i = 0; i < asteroids.length; i++) {
    if (ship.hits(asteroids[i])) {
      background('red');
      
      // du er død
      ship.reset();
      ship.boosting(0);


    }
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }

  for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    for (var j = asteroids.length - 1; j >= 0; j--) {
      if (lasers[i].hits(asteroids[j])) {
        if (asteroids[j].r > 20) {

          let newAsteroids = asteroids[j].breakup();
          asteroids = asteroids.concat(newAsteroids);
        }
        asteroids.splice(j, 1);
        lasers.splice(i, 1);
        points = points + 1;
        explosionSound.setVolume(0.1);
        explosionSound.play();
        break;
      }
    }
  }

  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}


function keyReleased() {
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed() {
  if (key == ' ') {
    lasers.push(new Laser(ship.pos, ship.heading));
    laserSound.setVolume(0.1);
    laserSound.play();
  } else if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
  }

}