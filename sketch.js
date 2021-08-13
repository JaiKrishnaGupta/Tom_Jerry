
function preload() {
    bg = loadImage("images/garden.png")
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png"); 
    tomImg3= loadAnimation("images/cat3.png");
    jerryImg1=loadAnimation("images/mouse1.png"); 
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870, 600); 
    tom.addAnimation("tomSleeping", tomImg1); 
    tom.scale = 0.2;
   
    jerry = createSprite(170, 600); 
    jerry.addAnimation("jerry", jerryImg1); 
    jerry.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(jerry.x>tom.x){
     tom.velocityX= 0
     tom.x = jerry.x+250
     tom.addAnimation("tomstanding",tomImg3)
     tom.changeAnimation("tomstanding",tomImg3)
     jerry.addAnimation("jerrystanding",jerryImg3)
     jerry.changeAnimation("jerrystanding",jerryImg3)
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
     tom.velocityX = -5
     tom.addAnimation("tomWalking",tomImg2)
     tom.changeAnimation("tomWalking",tomImg2)
     jerry.addAnimation("jerry2",jerryImg2)
     jerry.changeAnimation("jerry2",jerryImg2)
  }

}
