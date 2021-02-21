
var database
var playerCount, gameState
var form, game, player
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
    drawSprites(); 
}

