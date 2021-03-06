const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var prince;
var ground;
var frank,james,louis;

var x1 = 0;
var x2;
var scrollspeed = 5;

function preload(){
	backgroundImg = loadImage("images/bg.jpg")
}

function setup(){
	createCanvas(displayWidth, displayHeight-115);


	engine = Engine.create();
	world = engine.world;

  x2 = width;
  

  prince = new MPC(displayWidth/12,displayHeight/2-10,200,200); 
  ground = new Ground(displayWidth/2,displayHeight-100,windowWidth,10);
  frank = new Frank(displayWidth-200,displayHeight-150,200,200);
  james = new James(displayWidth-200,displayHeight-150,200,200);
  louis = new Loius(displayWidth-200,displayHeight-150,200,200)

  // Add a barrier;
  // Find 3 more background images (for each new quest);
  // 
}


function draw(){

  image(backgroundImg,x1,0,width,height);
  image(backgroundImg,x2,0,width,height);

  x1 -= scrollspeed;
  x2 -= scrollspeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }

  Engine.update(engine);

  prince.display();
  ground.display();

  if(frameCount>=150 && frameCount < 650){
    frank.display();
    Body.setVelocity(frank.body,{x:-2,y:0});
    console.log("FRANK");

  } 
  if(frameCount >= 700 && frameCount < 1200){
   frank.hide();
    james.display();
    Body.setVelocity(james.body,{x:-6,y:0});
    console.log("JAMES");
  }
  if(frameCount >= 1250 && frameCount < 1750){
    frank.hide();
    james.hide();
    louis.display();
    Body.setVelocity(louis.body,{x:-10,y:0})
   console.log("LOUIS")
  }

  text("FPS:"+Math.round(frameRate()),100,100)
  
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode == 32){
       Body.setVelocity(prince.body,{x:2,y:-12})
  }
}