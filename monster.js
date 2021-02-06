class Monster {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.8,
        friction:2,
        density:0.05
        // isStatic: true
      }
      this.body = Bodies.rectangle(x,y,height,width,options);
      this.image=loadImage("sprites/monster.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle)
      rectMode(CENTER);
      fill("blue");
      image(this.image,0,0,this.width,this.height)
      pop();
    }
  };
