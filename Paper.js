class Paper{

    constructor(x,y,radius){
        var options={
            isStatis :false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(this.body.position.x, this.body.position.y, this.radius);
        pop();
    }
}