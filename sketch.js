stoneclass

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
  isStatic:false,
  restitution :0,
  friction :1,
  density:1.2,
}

mangoclass

var options={
  isStatic:true,
  restitution :0,
  friction :1,
  
}  
    
function preload()
{
  var mangotree= new MangoTree(200,500,300,400);
  ground = new Ground(600,height,1200,20);
  var stone = new stone(350,750,450,550);

}

function setup() {
  createCanvas(8160, 400);
  
  var mango1,mango2,mango3,mango4,mango5;

  function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

  fly()
  {
    this.bodyA = null;

   function detectCollision(stone,mango){
     mangoBodyPosition=lmango.body.position
     stoneBodyPosition=lstone.body.position

     var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y,)
     if(distance<=lmango.r+lstone.r)
     {
       Matter.Body.setStatic(lmango.body,false);
     }
   }
   
   detectCollision(stoneObj,mango1);
   detectCollision(stoneObj,mango2);
   detectCollision(stoneObj,mango3);
   detectCollision(stoneObj,mango4);
   detectCollision(stoneObj,mango5);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


}

function keyPressed() {
  if(keyCode === 32){
    Mattre.Body,setPosition(stoneObj.body, {x:235, y:420})
    launcherObject.attach(stoneObj.body);
  }
}

//Display
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
