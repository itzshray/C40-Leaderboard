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
    }
    play(){
        form.hide();
        textSize(21)
        text("Game Start",500,150)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            var pos=200
            for(var x in allPlayers){
                if(x==='Player'+player.index){
                    fill("red")
                }else{
                    fill("black")
                }
                textSize(21)
                text(allPlayers[x].name+":"+allPlayers[x].distance,500,pos)
                pos+=50
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=20
            player.update();
        }
    }
    
}