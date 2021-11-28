
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var leftWall,rightWall
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_options={
		isStatic:false
		,restitution:0.3,
		 friction:0,
		  density:1.2
		
	}
	ball=Bodies.circle(260,100,20,ball_options)
	World.add(world,ball)

	ground=new Ground(800,670,1600,20)
	leftWall=new Ground(1100,600,20,120)
	rightWall=new Ground(1350,600,20,120)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20,20);
  
  ground.display();
  rightWall.display();
  leftWall.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW)
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
}


