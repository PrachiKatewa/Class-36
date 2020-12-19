var database;
var canvas ; 
var gameState = 0 ;
var playerCount ;
var form ;
var game ; 
var player ;


function setup(){
  database = firebase.database();
  
  canvas = createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
    
    drawSprites();
  
}
