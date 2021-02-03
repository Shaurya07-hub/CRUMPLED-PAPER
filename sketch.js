var dustbinObj;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  rectMode(CENTER);
	createCanvas(1300, 550);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,540,1400,20);
  ball=new PaperBall(80,480);
  dustbinObj = new Dustbin(1000,520);
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
 
  ground.display();
  ball.display();
  dustbinObj.display();

  drawSprites();

}

function keyPressed() {
if (keyCode=== UP_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:175,y:-210});
}
}