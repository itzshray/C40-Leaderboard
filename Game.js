class Game{
    constructor(){

    }
    getState(){
var gameStateref=database.ref('gameState')
gameStateref.on('value',function(data){
  gameState=data.val();  
})
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
     async start(){
        if(gameState===0){
            player=new Player()
            var playerCountRef=await database.ref('playerCount').once('value')
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount()
            }
            form=new Form()
            form.display();
    
        }
        car1=createSprite(100,200,50,50)
        car2=createSprite(200,200,50,50)
        cars=[car1,car2]
        
    }
    play(){
        form.hide();
        textSize(21)
        text("Game Start",500,150)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            //var pos=200
            var x=200;
            var y=0;
            var index=0
            for(var plr in allPlayers){
                index+=1
                x=x+300
                //console.log(allPlayers)
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                console.log(player.index)
                if(index===player.index){
                    //fill("red")
                    cars[index-1].shapeColor='red'
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }//else{
                    //fill("black")
                
                textSize(21)
                //text(allPlayers[x].name+":"+allPlayers[x].distance,500,pos)
                //pos+=50
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=20
            player.update();
        }
        drawSprites();
    }
    
}