class Game{
    constructor(){

    } 
 start(){
      
       aeroplane = createSprite(300,570,50,50); 
       aeroplane.addImage(aeroplaneImg);
       aeroplane.visible = true;
        
        if(gameState===0){
           intro = new Intro();
            intro.display();
            aeroplane.visible = false;
          }
       }




play(){

        //background(backImg2);
        image(backImg,(displayWidth/2),(displayHeight/2),displayWidth*2,displayHeight);
        fill("green");
        stroke("yellow");
        strokeWeight(6)
        text("Press Arrow Keys to move",400,200); 
   
        if(keyDown("down")){
          aeroplane.velocityY= 4;
          console.log("working");
         
        }
        if(keyDown("right")){
          aeroplane.velocityX= 4;
          console.log("working");
         
        }

        if(keyDown("left")){
          aeroplane.velocityX= -4;
          console.log("working");
        
        }
        if(keyDown("up")){
          aeroplane.velocityY= -4;
          console.log("working");
        }
        camera.position.y=aeroplane.y
    camera.position.x = aeroplane.x
 if(aeroplane.x >2800){
  aeroplane.velocityY=0;
  aeroplane.velocityX=0;
 }
 spawnbirds();  
drawSprites()

}

}
function spawnbirds(){
if(frameCount%150===0){
  bird= createSprite(displayWidth, Math.round(random(300,700)),20,20)
  bird.addAnimation("flying",birdAni);
  bird.scale = 0.4
  bird.velocityX=-4
}

}
