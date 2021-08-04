const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
	rope1 = new rope(bob1,roof,-80,0);
	rope2 = new rope(bob2,roof,-80,0);
	rope3 = new rope(bob3,roof,-80,0);
	rope4 = new rope(bob4,roof,-80,0);
	rope5 = new rope(bob5,roof,-80,0);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
bob1=ellipse(300,400,50,50);
bob2=ellipse(350,400,50,50);
bob3=ellipse(400,400,50,50);
bob4=ellipse(450,400,50,50);
bob5=ellipse(500,400,50,50);

 display()
}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
if (keyPressed === UP_ARROW);
Matter.Body.applyForce(bob1,5,0.2)