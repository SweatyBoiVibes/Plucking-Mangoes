class Rope{
    constructor(bodyA, pointB){
        var op={
            bodyA: bodyA,
            pointB: pointB,
            length:30,
            stiffness:0.7
        }

        this.body=Matter.Constraint.create(op)
        this.b=pointB
        World.add(wo, this.body)

    }


    display(){
        if(this.body.bodyA){
            var a=this.body.bodyA.position
            var b=this.b
            line(a.x+20,a.y+20,b.x,b.y)
        }
    

    }

    attach(A){


        this.body.bodyA = A
    }

    fly(){
        this.body.bodyA=null
    }
}