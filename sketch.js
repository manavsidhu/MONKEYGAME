var Monkey, Monkey_image;

var banana, energy;

var obstacle;

var score=0;

var jungle, invisibleground;



function preload(){

Monkey_image=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");


  bananaimage=loadImage("banana.png");

  jungleimage=loadImage("jungle.jpg");
  
  stoneimage=loadImage("stone.png");
  
  obstaclesGroup = new Group();
   bananaGroup = new Group();
  
  
}

function setup() {
  createCanvas(400, 400);
  
 jungle=createSprite(10, 10, 200, 200);
  jungle.addImage("ground", jungleimage);
  jungle.x=jungle.width/2;
  jungle.velocityX=-5;
  jungle.scale=2;

  
 Monkey = createSprite(50,360,20,50);
  Monkey.addAnimation("running", Monkey_image);
  Monkey.scale=0.1;
  
   invisibleground=createSprite(200, 390, 400, 20);
  invisibleground.visible=false;
  


}

function draw() {
  background(0);
   
   

  
  if(keyDown("space")) {
      Monkey.velocityY = -12;
    }
    
  Monkey.velocityY=Monkey.velocityY+0.5;
  
   if(jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
  text("Score: "+ score, 20,50);
  
  spawnobstacle();
  spawnbanana();
  
  Monkey.collide(invisibleground);
 
  Monkey.collide(obstaclesGroup);
  
   if(Monkey.isTouching(obstaclesGroup)){
    obstaclesGroup.destroyEach();
     jungle.velocityX = 0;
     Monkey.visible=false;
     obstaclesGroup.visible=false;
  }
  
  
  if(Monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score=score+1; 
  }
  
drawSprites();
}
function spawnobstacle() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,355,10,40);
    obstacle.addImage("obstacle", stoneimage);
    obstacle.scale=0.2;
    
    obstacle.velocityX=-8;
    
    obstacle.lifetime = 70;
   
    obstaclesGroup.add(obstacle);
  }
}


function spawnbanana() {
 if (World.frameCount % 60 === 0) {
    var banana = createSprite(400, 222, 10, 20);
    banana.addImage("energy", bananaimage);
    
    banana.velocityX=-8;
    
    
    banana.scale=0.1;
    banana.lifetime = 70;
    bananaGroup.add(banana);
  }
   
}
