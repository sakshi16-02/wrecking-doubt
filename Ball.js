// class Ball extends BaseClass{
//     constructor(x,y){
//        super(x,y);
//     }
// }

class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1
        }
        this.body=Bodies.circle(x,y,40,options);
        World.add(world,this.body);
    }
    
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(0,0,40,40);
        pop();
    }
    }
