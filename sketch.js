var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");

//loading images for rest of the balloons
  green_balloonImage = loadImage ("green_balloon0.png");
  pink_balloonImage = loadImage ("pink_balloon0.png");
  blue_balloonImage = loadImage ("blue_balloon0.png");

}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //change the value of the random balloon to 4 
  var select_balloon = Math.round(random(1,4));

  // calling the balloons
  if (frameCount % 100 == 0) {
   switch(select_balloon){

    case 1: redBalloon()
    break;
    case 2: blueBalloon()
    break;
    case 3:greenBalloon ()
    break;
    case 4:pinkBalloon()
break;

  }}
  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //createSprite for the balloon 
  var blue = createSprite(0,Math.round(random(20,370)), 10, 10); 
  //addImage for the  balloon
  blue.addImage(blue_balloonImage);
  //add velocity to make the balloon move
  blue.velocityX = 3;
  //change the scale of the balloon
  blue.scale=0.1
  //add the lifetime of the balloon}
  blue.lifetime=150;
}

function greenBalloon() {
  //createSprite for the balloon 
  var green = createSprite(0, Math.round(random(20,370)), 10, 10)
  //addImage for the  balloon
  green.addImage(green_balloonImage);
  //add velocity to make the balloon move
  green.velocityX=3; 
  //change the scale of the balloon
  green.scale=0.1
  //add the lifetime of the balloon}
  green.lifetime=150;
}

function pinkBalloon() {
  //createSprite for the balloon 
  var pink = createSprite (0, Math.round(random(20,370)), 10, 10)
  //addImage for the  balloon
  pink.addImage(pink_balloonImage)
  //add velocity to make the balloon move
  pink.velocityX=3
  //change the scale of the balloon
  pink.scale=0.5
  //add the lifetime of the balloon
  pink.lifetime=150
}