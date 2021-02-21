class Form{
    constructor(){

    }
    display(){
        var title = createElement('h1')
        var greeting = createElement('h1')
        title.html('Car-Racing Game')
        title.position(500,50)
        var input=createInput()
        input.position(500, 300)
        var button = createButton('start')
        button.position(500,500)
        button.mousePressed(
            function(){
                input.hide()
                button.hide()
                title.hide()
                var name=input.value()
                playerCount = playerCount+1
                player.update(name)
                player.updateCount(playerCount)
                greeting.html('welcome'+name)
                greeting.position(500,50)
            }
        )
    }
}