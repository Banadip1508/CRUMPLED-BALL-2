const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var paperObject;

function preload()
{
	
}

function setup() {
createCanvas(800,700);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
paperObject=new Paper(200,200,50);
ground=new Ground(600,height,1200,20)
dustbin1=new Dustbin(320,610,20,100);
dustbin1.shapeColor="red"
dustbin2=new Dustbin(440,610,20,100);
dustbin2.shapeColor="red"
dustbin3=new Dustbin(380,650,100,20)
dustbin3.shapeColor="red"

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
  }
  }



