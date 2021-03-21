
var database
var playerCount, gameState
var form, game, player
var allPlayers
var car1, car2, cars
var carIMG1, carIMG2, carIMG3, carIMG4, trackIMG, groundIMG, goldIMG, silverIMG, carBG
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
goldIMG=loadImage('Images/gold.png')
silverIMG=loadImage('Images/silver.png')
carBG=loadImage('Images/carbg.jpg')



}

function draw(){
    background(carBG);
    if(playerCount===2&&finishPlayers===0){
        game.update(1)
    }
    if (gameState===1){
        clear();
        game.play();
    }
    if(finishPlayers===2){
        game.update(2);
    }
   if(gameState==2&&finishPlayers===2) {
       game.end();
   } 
}

