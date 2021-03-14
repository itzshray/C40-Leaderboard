
var database
var playerCount, gameState
var form, game, player
var allPlayers
var car1, car2, cars
var carIMG1, carIMG2, carIMG3, carIMG4, trackIMG, groundIMG
var finishPlayers=0
var passFinish=false
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
carIMG1=loadImage('Images/car1.png')
carIMG2=loadImage('Images/car2.png')
carIMG3=loadImage('Images/car3.png')
carIMG4=loadImage('Images/car4.png')
trackIMG=loadImage('Images/track.jpg')
groundIMG=loadImage('Images/ground.png')


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

