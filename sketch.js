var fixedRect, movingRect;
var gameobject1 ,gameobject2, gameobject3 ,gameobject4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 =createsprite(100,100,50,80);
  gameobject1.shapecolor="green";
  gameobject2 =createsprite(200,250,50,80);
  gameobject2.shapecolor="green";
  gameobject3=createsprite(300,200,50,80);
  gameobject3.shapecolor="green";
  gameobject4=createsprite(500,300,50,80);
  gaeobject4.shapecolor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(gameobject1,movingRect)){

 
    movingRect.shapeColor = "red";
    gameobject1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
   gameobject1.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(object1,object2){
   if (object2.x - object1.x < object1.width/2 +object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2) {
    return true;
    }
    else{
    return false;
    }  
  }