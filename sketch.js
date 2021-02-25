
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
 
	rightOne = new Bin(670,620,20,100);
	leftOne = new Bin(550,620,20,100);
	belowOne = new Bin(610,660,130,22);

	ground = new Ground(400,680,800,20);

	paper = new Paper(100,600,10);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);

	background(0);
   //Engine.update(engine);

   rightOne.display();
   leftOne.display();
   paper.display();
   ground.display();
   belowOne.display();

   drawSprites();
}

function keyPressed() {
	if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y:-15})
	}
}