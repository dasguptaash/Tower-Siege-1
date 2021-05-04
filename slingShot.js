class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 5
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
        }
        

     display(){
         if(this.sling.bodyA){
            var pointC = this.sling.bodyA.position;
            var pointD = this.pointB;
            strokeWeight(4);
            line(pointC.x,pointC.y,pointD.x,pointD.y);
            }
        }

}