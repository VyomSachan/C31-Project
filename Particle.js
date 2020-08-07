class Particle{
    constructor(x, y){
        var options = {
            //isStatic : true
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10;
        this.color = random(0,255), random(0,255), random(0,255);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        fill (this.color);
        circle(pos.x, pos.y, this.radius*2);
        pop();
    }
}