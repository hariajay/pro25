class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.Body = Bodies.rectangle(x,y,width,height,option)
        this.Bodywidth = width
        this.Bodyheight = height
        World.add(world,this.Body)
    }
    display(){
        var pos = this.Body.position
        push()
        rectMode(CENTER)
        stroke("green")
        strokeWeight(3)
        fill("blue")
        rect(pos.x,pos.y,this.Bodywidth,this.Bodyheight)
        pop()
    }
}