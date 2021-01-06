class Ball{
    constructor(x,y,radius){
        var options = {
            restitution:1,
            friction:0.5,
            density:1.2
        }
        this.Body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.Body)
    }
    display(){
        var pos = this.Body.position
        push()
        rectMode(RADIUS)
        stroke("yellow")
        strokeWeight(3)
        fill("red")
        circle(pos.x,pos.y,this.radius)
        pop()
    }
}