class Mango{

    constructor(x, y,r){
    
    var o={
        restitution:0.8,
        friction:0.5,
        density:0.5,
        isStatic:true
    }
    
    this.image=loadImage("mango.png")
    this.body=Bodies.circle(x,y,r,o)
    this.r=r
    World.add(wo,this.body)


    
    }
    
    display(){
      var pos=this.body.position
      var angle=this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
     imageMode(RADIUS)
      image(this.image,0,0,this.r,this.r)
      pop()
    }
    
    }