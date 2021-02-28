
var database
var playerCount, gameState
var form, game, player
var allPlayers
function setup(){
    playerCount=0
    gameState=0
    createCanvas(1000,600);
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
    drawSprites(); 
}

