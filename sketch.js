const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;


var engine,world;
//var backgroundImg;

function preload() {
//preload the images here
backgroundImg = loadImage("sprites/bag.png");
}

function setup() {
  createCanvas(1000, 580);
engine= Engine.create()
world=engine.world;
man1= new Man(100,200)
chain1= new Chain(man1.body,{x:240,y:50})
ground1=new Ground(250,390,1000,10)
monster1=new Monster(680,100,100,100)
box1= new Box(400,100)
box2= new Box(400,100)
box3= new Box(400,100)
box4= new Box(400,100)
box5= new Box(400,100)
box6= new Box(400,100)
box7= new Box(400,100)
box8= new Box(500,100)
box9= new Box(500,100)
box10=new Box(500,100)

box11= new Box(500,100)
box12= new Box(500,100)
box13= new Box(500,100)
//box14= new Box(500,100)
//box15= new Box(500,100)
//box16= new Box(500,100)
box17= new Box(600,100)
box18= new Box(600,100)
box19= new Box(600,100)
box20=new Box(600,100)

box21= new Box(600,100)
box22= new Box(600,100)
box23= new Box(600,100)
//box24= new Box(600,100)
/*box25= new Box(900,100)
box26= new Box(900,100)
box27= new Box(900,100)
box28= new Box(900,100)
box29= new Box(900,100)
box30=new Box(900,100)
*/

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  ground1.display()
//chain1.display()
  man1.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()

  
  box11.display()
  box12.display()
  box13.display()
  /*box14.display()
  box15.display()*/
 monster1.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()

  box21.display()
  box22.display()
  box23.display()
  stroke("red")
  /*box24.display()
  box25.display()
  box26.display()
  box27.display()
  box28.display()
  box29.display()
  box30.display()
*/
man1.display()



}




function mouseDragged(){
  Matter.Body.setPosition(man1.body,{x:mouseX,y:mouseY})
}