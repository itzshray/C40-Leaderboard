class Form{
    constructor(){
        this.title = createElement('h1')
        this.greeting = createElement('h1')
        this.input=createInput()
        this.button = createButton('start')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        this.title.html('Car-Racing Game')
        this.title.position(500,50)
        this.input.position(500, 300)
        this.button.position(500,500)
        this.button.mousePressed(
            ()=>{
                player.name=this.input.value()
                playerCount = playerCount+1
                player.index=playerCount
                player.update()
                player.updateCount(playerCount)
                this.greeting.html('welcome'+player.name)
                this.greeting.position(500,550)
            }
        )
    }
}