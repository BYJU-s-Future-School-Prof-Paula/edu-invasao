class CannonBall{
    constructor(x,y){
        var options = {
            isStatic: true
        };

        this.trajetoria = [];
        this.radius = 25;
        this.body = Bodies.circle(x,y,this.radius,options);
        this.image = loadImage("../assets/cannonball.png");
        World.add(mundo,this.body);
    }

    display(){
        var pos = this.body.position;

        if(this.body.velocity.x > 0 && pos.x > 300) {
            var position = [pos.x, pos.y];
            this.trajetoria.push(position);
        }
        
        for (var i = 0; i < this.trajetoria.length;i++){
            image(this.image, this.trajetoria[i][0], this.trajetoria[i][1],5,5);
        }
        
        
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();

    }

    shoot(){
        var newAngle = canhao.angle - 28;
        newAngle = newAngle *(3.14/180);
        
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        
        Body.setStatic(this.body, false);
        Body.setVelocity(this.body, {
            x: velocity.x *(180/3.14), 
            y: velocity.y * (180/3.14)});
    }
}