class Intro{
    constructor(){
        // this.play = createButton("PLAY");
        // this.story = createButton("STORY");
        // this.keys = createButton("KEYS");
    }

    // hide(){
    //     this.play.hide();
    //     this.story.hide();
    //     this.keys.hide();
    // }

    display(){
         var play = createButton("PLAY");
         play.position(450,300);
        var  story = createButton("STORY");
         story.position(450,200);
        var keys = createButton("KEYS"); 
        keys.position(450,100);
      var  menu = createButton("Main Menu");
      menu.position(100,500);


        play.mousePressed(function(){
            play.hide();
            keys.hide();
            story.hide();
            menu.hide();
            //  background(backImg);
           gameState=1;
          
            game.start();
         
        
        })

        story.mousePressed(function(){
            play.hide();
            keys.hide();
            story.hide();
            stroke(20)
              textSize(40)
             fill("yellow")
              textFont("Georgia")
              text("Dear Pilot,",10,30)
              text("This is to inform you that your application have been appcepted by",50,100)
              text("our company and your flight from Whales to 20,000 kilometers have",50,170)
              text("been accepted. You are requested to visit our company in Whales.",50,240)
              text("From,",10,310)
              text("The Company Owner,KETAN",10,380)
        })
        menu.mousePressed(function(){
        clear();
        background(backImg)
        play.show();
        keys.show();
        story.show();
    
        })
    }

   
}