const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var en, wo
var bg, bgi
var score=0


function preload(){
tree=loadImage("tree.png")
boy=loadImage("boy.png")
}

function setup(){

    createCanvas(1200,400)

    en = Engine.create()
    wo = en.world
    var options={
        isStatic:true
    } 

    g1=Bodies.rectangle(600,380,1200,30, options)
     World.add (wo, g1)

    

     ball1=new Ball(100,250,30)
     rope1=new Rope(ball1.body, {x:150,y:160})

     m1=new Mango(880,120,30)
     m2=new Mango(920,90,30)
     m3=new Mango(950, 120,30)
     m4=new Mango(1000,80,30)
     m5=new Mango(1050,100,30)
     m6=new Mango(1100, 120,30)
   
 
}

function draw(){
background("white")
Engine.update(en)


 
rectMode(CENTER)
rect(g1.position.x,g1.position.y,1200,30)

image(boy, 100,100, 250,250)
image(tree, 850, 50, 300, 300)

ball1.display()
rope1.display()
m1.display()
m2.display()
m3.display()
m4.display()
m5.display()
m6.display()


        
drawSprites()

detectcollision(ball1,m1)
detectcollision(ball1,m2)
detectcollision(ball1,m3)
detectcollision(ball1,m4)
detectcollision(ball1,m5)
detectcollision(ball1,m6)

}

function keyPressed(){
    if(keyCode === 32){
    rope1.attach(ball1.body)
        }
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
rope1.fly()
}


function detectcollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
   
  	  Matter.Body.setStatic(lmango.body,false);
    }

    console.log("working")

  }


//async 
//await