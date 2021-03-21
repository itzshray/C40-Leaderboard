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
        car1.addImage(carIMG1)
        car2=createSprite(200,200,50,50)
        car2.addImage(carIMG2)
        cars=[car1,car2]
        
    }
    play(){
        form.hide();
        Player.getPlayerInfo()
        player.getFinishPlayer()
        if(allPlayers!==undefined){
            //var pos=200
            background(groundIMG)
            image(trackIMG, 0,-displayHeight*5, displayWidth, displayHeight*6 )
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
                    fill("red")
                    ellipse(x,y,60,60)
                    //cars[index-1].shapeColor='red'
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }else{
                    fill("black")
                }
                textSize(21)
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,cars[index-1].x-10, cars[index-1].y+60)
                //pos+=50
            }
        }
        if (player.distance>4100&&finishPlayers<=2&&passFinish===false){
        Player.updateFinish()
            player.rank=finishPlayers
            player.update()
            passFinish=true 
        
        
        }
        if(keyIsDown(UP_ARROW)&&passFinish===false&&player.index!==null){
            player.distance+=20
            player.update();
        }
        
        drawSprites();
    }
    end(){
        console.log('gameEnds')
       Player.getPlayerInfo();
       textSize(21)
       fill('aqua')
       imageMode(CENTER)
       camera.position.x=0
       camera.position.y=0

       for(var plr in allPlayers){
           if (allPlayers[plr].rank===1){
               text("Rank 1:"+ allPlayers[plr].name,0,325)
               image(goldIMG, 50,200, 200,250)
           }
         else if (allPlayers[plr].rank===2){
               
               text("Rank 2:"+ allPlayers[plr].name,150,325)
               image(silverIMG, 200,200,150,220)
           }
       }
    }
    
}