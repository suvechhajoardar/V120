var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car =createSprite(50, 200, 50, 50);
  car.shapeColor="white";
  wall=createSprite(1000,200,30,200);
  wall.shapeColor="white"
}

function draw() {
  background("black"); 
  car.velocityX=speed;
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation<100){
      wall.shapeColor="green"
    }
    if(deformation>100 && deformation<180){
      wall.shapeColor="yellow";
    }
    if(deformation>180){
      wall.shapeColor="red"
    }
  } 
  drawSprites();
}