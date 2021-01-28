const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var platform1,platform2;
var hexagon;

function setup(){
	var Canvas = createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

	platform = new Platform(400,400);
	box1 = new Box(400,380);



}

function draw(){
	background(0);
	Engine.update(engine);

	platform.display();
	box1.display();



}















