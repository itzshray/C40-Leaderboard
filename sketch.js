var ball;
var database
var position
var bg, spider

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.addImage(spider)
    ball.scale=0.2
    database = firebase.database();
    var dataref = database.ref('Position')
    dataref.on("value", read);
}
function preload(){
bg=loadImage("cityskyline.png")
spider=loadImage("spiderman.png")



}

function draw(){
    background(bg);
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('Position').set({
        x:ball.x+x,
        y:ball.y+y
    })
}

function read(data){
position = data.val();
ball.x=position.x
ball.y=position.y
}
