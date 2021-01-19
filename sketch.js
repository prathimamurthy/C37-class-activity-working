var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var distance = 0,allPlayers;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if (playerCount == 4){
    game.update(1);//change the game state to 1 when 4 players have logged in

  }

  if (gameState == 1){
    clear();
    game.play();


  }
  
  
}
