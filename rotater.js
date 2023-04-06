class rotater {
  constructor(x, y, w, h,angle) {
    var options = {
      isStatic: true,
    };

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.angle=angle

    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
    World.add(world, this.body);
  }
  show() {
    var pos = this.body.position;
    Matter.Body.rotate(this.body,this.angle)
    push();
    rectMode(CENTER);
    stroke("red");
    fill("white");
    translate(pos.x, pos.y);
    rotate(this.angle)
    rect(0, 0, this.w, this.h);
    this.angle-=0.1
    pop();

  }
}
