class Box{

constructor(x, y){

var o={
    restitution:0.8,
    friction:0.5,
    density:0.5
}

this.body=Bodies.rectangle(x,y,50,50,o)
this.v=255
World.add(wo,this.body)
}


score(){
  if(this.v<0&& this.v>-500){
    score++
  }
}
display(){


  if(this.body.speed<3){
  var pos=this.body.position
  var angle=this.body.angle
  push()
  translate(pos.x,pos.y)
  rotate(angle)
  rectMode(CENTER)
  rect(0,0,50,50)
  pop()

  }

  else{
    World.remove(wo,this.body)
    push()
    tint(255,this.v)
    this.v=this.v-5
    pop()
  }
}
}