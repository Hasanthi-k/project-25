var ball1,dustbin1,ground;
var world,engine,body;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	
	

	//Create the Bodies Here.
	ball1 = new paper(50,600,70);
	
	ground = new Ground(width/2, 630, width, 10, {isStatic:true} );
	
	dustbin1 = new Dustbin(1000,540);
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1300,
			height:700
		}
	})
	
	
   keyPressed();
	Engine.run(engine);
   Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0);
 ball1.display();
 ground.display();
 dustbin1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.positon,{x:350,y:-350})
	}
}

