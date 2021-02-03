class PaperBall {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.5,
          density:1.2,
          friction:0.7
      }
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y,30,options);
      this.radius=30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    imageMode(CENTER);
		image(this.image,50,0, this.radius*3, this.radius*3);
      fill("purple");
      pop();
    }
  };