
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball1,ballimg,ground1;
var bas1,bas2,bas3;
var dustbin;

function preload(){
  ballimg = loadImage("ball1.png")
  dustbin = loadImage("pngwing.com.png")
}
function setup() {
	createCanvas(900, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ball1 = new Ball(180,280,25)
     ground1 = new Ground(500,370,1000,15)
     bas1 = new Basket(750,350,150,12)
     bas2 = new Basket(670,265,12,150)
     bas3 = new Basket(828,275,12,150)
 Engine.run(engine);
}
function draw() {
  background(0,183,235)
  ball1.display()
  ground1.display()
  bas1.display()
  bas2.display()
  bas3.display()
  imageMode(CENTER)
  image(ballimg,ball1.Body.position.x,ball1.Body.position.y,42,42)
  imageMode(CENTER)
  image(dustbin,750,255,215,210)
  keypressed1()
  keypressed2()
  if(ball1.Body.position.x>680 && ball1.Body.position.y<800 && ball1.Body.position.y>190){
    Matter.Body.setDensity(ball1.Body,300)
    textSize(22)
    fill("red")
    text("YOU WON!",350,130)
  }

  textSize(24)
  stroke ("yellow")
  strokeWeight(2)
  fill("green")
  text("The Crumpled Balls",140,60)
  textSize(17)
  stroke ("red")
  strokeWeight(1)
  fill("yellow")
  text("click on up arrow to move up",400,45)
  text("click on down arrow to move down",400,63)
}
function keypressed1(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.Body,ball1.Body.position,{x:1,y:-3})
  }
}
function keypressed2(){
  if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(ball1.Body,ball1.Body.position,{x:1,y:2})
  }
}



