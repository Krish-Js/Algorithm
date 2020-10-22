var movingRect,fixRect;
var obj1;
var obj2;
var obj3;
var obj4; 

function setup() {
    createCanvas(1200,800);
  movingRect=createSprite(400, 200,80,30);
  fixRect=createSprite(600,400,50,80);
  movingRect.shapeColor="green";
  fixRect.shapeColor="green";
  movingRect.debug=true;
   fixRect.debug=true;
  obj1=createSprite(100,100,50,50);
  obj1.shapeColor="green";
  obj2=createSprite(200,100,50,50);
  obj2.shapeColor="green";
  obj3=createSprite(300,100,50,50);
  obj3.shapeColor="green";
  obj4=createSprite(400,100,50,50);
  obj4.shapeColor="green";

movingRect.velocityY= +5;
fixRect.velocityY= -5;

}

function draw() {
  background("limeGreen");  
  drawSprites();
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

/*if(isTouching(movingRect,obj1)){
  movingRect.shapeColor="red";
  obj1.shapeColor="red";

}


else if(isTouching(movingRect,obj2)){
  movingRect.shapeColor="red";
  obj2.shapeColor="red";

}
else{

  movingRect.shapeColor="green";
  obj1.shapeColor="green"; 
    obj2.shapeColor="green";
}*/
bounceOff(movingRect,fixRect);
}    
function bounceOff(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2)
    {
  object1.velocityX=object1.velocityX*(-1);
  object2.velocityX=object2.velocityX*(-1);
    }
    if(object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2)
  {
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);
  }




}