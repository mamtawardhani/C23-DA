//matter.js => library
//create engine => access the world => create the bodies and add it to the world
//namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, wo
var ball

function setup() {
    createCanvas(400,400);

    //creating an engine
   engine = Engine.create()

    //variable name = enginename.world
    wo = engine.world

    ball = Bodies.circle(200,10,30)
    World.add(wo, ball)
  

}

function draw() 
{
    background("black")
    Engine.update(engine)
    
    ellipseMode(RADIUS)

    ellipse(ball.position.x, ball.position.y, 30)
  
}

