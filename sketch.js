
var car1,car2,car3,wall;
var speed, weight;


function setup() {
  createCanvas(1600,800);
  car1 = createSprite(50,200,50,50);
  car2 = createSprite(50,400,50,50);
  car3 = createSprite(50,600,50,50);
  wall1 = createSprite(1500,200,60,70);
  wall1.shapeColor=color("black");
  wall2 = createSprite(1500,400,60,70);
  wall2.shapeColor=color("black");
  wall3 = createSprite(1500,600,60,70);
  wall3.shapeColor=color("black");
  speed=random(55,90);
  weight=random(400,1500);
  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
}

function draw() {
  background(200);  

if(car1.x-wall1.x < (car1.width+wall1.width)/2) {
  car1.velocityX=4;
  var deformation=0.5*2260*60*60/22500;
 if(deformation>180)
    {
    car1,shapeColor=color(255,0,0);
    }
  }

 if(car2.x-wall2.x < (car2.width+wall2.width)/2) {
    car2.velocityX=5;
    var deformation=0.5*1522*50*50/22500;
    if(deformation<180 && deformation>100) {
      car1.shapeColor=color(230,230,0);
    }
  }
if(car3.x-wall3.x < (car3.width+wall3.width)/2) {
    car3.velocityX=6;
    var deformation=0.5*3000*45*45/22500;
    if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}



