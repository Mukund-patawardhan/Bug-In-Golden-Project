var canvas;
var form,game;
var gameState=0;
var up,down,right,left,stand;
var roads;
var score=0;
var s=0;

function preload(){
  up=loadAnimation("walkingUp1.png","walkingUp2.png");
  down=loadAnimation("walkingDown1.png","walkingDown2.png");
  left=loadAnimation("walkingLeft1.png","walkingLeft2.png");
  right=loadAnimation("walkingRight1.png","walkingRight2.png");
  stand=loadAnimation("standing.png");

  roads=loadImage("roads2.png");

}

function setup() {
  canvas=createCanvas(1300,600);

  frameRate(5);

  game=new Game ();
}

function draw() {
  background("#22B14C");  

  //console.log(getFrameRate())

  if(gameState===0){
    game.form();
    if(s===0){
    form.input.mousePressed(consol);
    }
  }
  if(gameState===1){
    game.game();
  }

  if(keyIsPressed){
    if(game.r===true){
      if(keyCode===RIGHT_ARROW){
        game.player.x=game.player.x+10;
        game.player.addAnimation("right",right);
        game.player.changeAnimation("right",right);
        }else if(game.r===false){
          //game.player.setVelocity(0,0);
        }
      }
      if(game.l===true){
      if(keyCode===LEFT_ARROW){
        game.player.setVelocity(-16,0);
        game.player.addAnimation("left",left);
        game.player.changeAnimation("left",left);
      }else if(game.l===false){
        game.player.setVelocity(0,0);
      }
      }
      if(game.u===true){
      if(keyCode===UP_ARROW){
        game.player.setVelocity(0,-15);
        game.player.addAnimation("up",up);
        game.player.changeAnimation("up",up);
      }else if(game.u===false){
        game.player.setVelocity(0,0);
      }
      }
      if(game.d===true){
      if(keyCode===DOWN_ARROW){
        game.player.setVelocity(0,16);
        game.player.addAnimation("down",down);
        if(game.player.getAnimationLabel()!=="down"){
        game.player.changeAnimation("down",down);
        }
      }else if(game.d===false){
        game.player.setVelocity(0,0);
      }
      }
  }else{
    game.player.setVelocity(0,0);
    //game.player.changeAnimation("stand",stand);
  }

  frameRate(5);
  //console.log(getFrameRate())

}

function consol(){
  if(s===0){
  form.input.value("");
  s=1;
  }
}

function keyReleased(){
  
}

function keyPressed(){
  
}
