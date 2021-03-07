class Form{
    constructor(){
        this.title = createElement('h1')
        this.title2 = createElement('h2')
        this.greeting = createElement('h1')
        this.input=createInput()
        this.button = createButton('start')
        this.reset = createButton('reset')
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title2.hide();
    }
    display(){
        this.title.html('Car-Racing Game')
        this.title2.html('Enter your name')
        this.title.position(displayWidth/2+200,10)
        this.title2.position(displayWidth/2+240,displayHeight/2-50)
        this.input.position(displayWidth/2+250,displayHeight/2)
        this.button.position(displayWidth/2+300,displayHeight/2+100)
        this.reset.position(displayWidth/2+500,40)
        this.button.mousePressed(
            ()=>{
                player.name=this.input.value()
                playerCount = playerCount+1
                player.index=playerCount
                player.update()
                player.updateCount(playerCount)
                this.greeting.html('Welcome '+player.name)
                this.greeting.position(displayWidth/2+225,200)

            }
        )
        this.reset.mousePressed(
            ()=>{
         database.ref('/').set({
             gameState:0,playerCount:0,players:null
         })
         location.reload();

            }
        )
}    
}