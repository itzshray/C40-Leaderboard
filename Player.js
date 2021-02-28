class Player{

    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0

    }
    getCount(){
        var playerCountref=database.ref('playerCount')
        playerCountref.on('value',(data)=>{
          playerCount=data.val();  
        })
    }
    update(){
        var index="players/Player"+this.index
        database.ref(index).set({
            name:this.name,
            distance:this.distance
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    static getPlayerInfo(){
        var playerInfoRef= database.ref('players')
        playerInfoRef.on('value', (data)=>{
            allPlayers=data.val()
        })
    }
      
}
