let ship;
let asteroids = [];
let lasers = [];
let points = 0;
let lives = 3;

function preload() {
  skud = loadSound('skud.mp3');
  explosionSound = loadSound('ExplosionSound.mp3');
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
  text('Points:', 0, 50);
  text(points, 100, 52)
  text('Lives:', 0, 25);
  text(lives, 100, 25);


  for (var i = 0; i < asteroids.length; i++) {
    if (ship.hits(asteroids[i])) {
      background('red');
      
      // du er død
      ship.reset();
      ship.vel.mult (0);

      lives = lives - 1;
    }

    if (lives <=0) {
      points = points - points;
      textSize(100);
      fill(255);
      textAlign(CENTER);
      text('GAME OVER', windowWidth/2, windowHeight/2);

      textSize(32);
      fill(255);
      textAlign(CENTER);
      text('Refresh to try again', windowWidth/2, windowHeight/2+50);
      return keyPressed;
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
    skud.setVolume(0.1);
    skud.play();
  } else if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
  }
}