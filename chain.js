class Chain
{
    constructor(body1,point2){
       var options={
            bodyA:body1,
        pointB:point2,
        frictionAir:0.05,
       //  density:0.5,
         stiffness:0.05
       }
       this.pointB=point2
       this.chain=Constraint.create(options)
       World.add(world,this.chain)   
     }
     display(){
         var pointA =this.chain.bodyA.position;
         strokeWeight(5)
         stroke("red")
      line(this.pointB.x,this.pointB.y,pointA.x,pointA.y)  
       
     }
}