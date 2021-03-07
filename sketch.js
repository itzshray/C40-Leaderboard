
var database
var playerCount, gameState
var form, game, player
var allPlayers
var car1, car2, cars
function setup(){
    playerCount=0
    gameState=0
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game=new Game()
    game.getState()
    game.start()   
}
function preload(){




}

function draw(){
    background("red");
    if(playerCount===2){
        game.update(1)
    }
    if (gameState===1){
        clear();
        game.play();
    }
     
}

