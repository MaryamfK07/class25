const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var r1, r2, r3, r4, r5;

var btn2;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01,
  };

  var ground_options = {
    isStatic: true,
  };

  btn2 = createImg("up.png");
  btn2.position(20, 30);
  btn2.size(50, 50);
  btn2.mouseClicked(vForce);

  ground = Bodies.rectangle(100, 400, 400, 20, ground_options);
  World.add(world, ground);

  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);

r1=new rotater(50,350,70,30)
r2=new rotater(150,350,70,30)
r3=new rotater(250,350,70,30)
r4=new rotater(350,350,70,30)
r5=new rotater(100,100,70,30)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 500, 20);
  r1.angle=20
  r2.angle=40
  r3.angle=60
  r4.angle=18
  r5.angle=90
  console.log(ground.position.y);
  r1.show()
  r2.show()
  r3.show()
  r4.show()
  r5.show()
 
 
}

function vForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}
