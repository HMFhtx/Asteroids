Function Laser(spos) {

    this.pos = createVector spos.x, spos.y();
    this.vel = createVector();

    this.update = function () {
        this.pos.add(this.vel);

    }
    this.update = function () {
        push();
        stroke(255);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
        pop();
    }
}