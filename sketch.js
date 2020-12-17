const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper, box1,box2,box3, ground;



function setup(){
createCanvas(1800,500);

engine = Engine.create();
world = engine.world;

ground = new Ground(900,450,1800,25);
paper = new Paper(200,50,20);
box1 = new Box(800,365,20,100);
box2 = new Box(1000,365,20,100);
box3 = new Box(900,425,220,20);

}

function draw(){
	background("white");
	Engine.update(engine);
	ground.display();
	paper.display();
	box1.display();
	box2.display();
	box3.display();


}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});
	}
}
