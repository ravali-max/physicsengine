const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var engine,world;
 var object;

function setup() {
 var canvas = createCanvas(400,400);
 engine = Engine.create();
 world = engine.world

object = new Box(200,200,20,20)

}

function draw() {
  background(0,20,20); 
  Engine.update(engine) ;

  object.display();
  
  drawSprites();
}