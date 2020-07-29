
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var umbrella;
var drops=[];
var maxDrops=250;
function preload(){
    
}

function setup(){
   var canvas= createCanvas(500,700);
   engine = Engine.create();
   world = engine.world;
  umbrella = new Umbrella(250,650,50,50);
  

}

function draw(){
    Engine.update(engine);
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400),random(0,400)));
    }
 umbrella.display();
 drawSprites();
}   

