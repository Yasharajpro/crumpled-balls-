
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	Ground=new ground(400,760,800,10);
	dustbin=new Dustbin(600,750);
	ball=new paper(100,500);
	
	


	
	
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");
 
 
  Ground.display();
  ball.display();
  dustbin.display();

}
function keyPressed(){
    if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:400,y:-400})
	}
}


