
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var groundline;
var dbside1;
var dbside2;
var dbside3;
var dbimage;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new paper (100,200,30,30);
	groundline = new ground(400,680,800,10);
	//dbside1 = new dustbin(450,670,10,50);
	//dbside2 = new dustbin(475, 675, 50,10);
  //dbside3 = new dustbin (500,670,10,50)
  dbimage = new dustbin (475, 673, 100,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paperball.display();
  groundline.display();
  //dbside1.display();
  //dbside2.display();
  //dbside3.display();
  dbimage.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
   if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperball.body, paperball.body.position, {x: 15, y: -15})
   }
}

