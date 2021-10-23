class Stone {
  constructor(x, y, r) {
    this.x=x;
    this.y=y;
     this.r = r;

    let options = {
      restitution: 0.8
    };

    this.body = Bodies.circle(x, y, r, options);
   // this.w = w;
   // this.h = h;
   
    //this.color = color;
    World.add(world, this.body);
    this.image=loadImage("img/stone.png");
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.angle);
    //strokeWeight(1);
    //fill("skyblue");
    //ellipseMode(CENTER);
    //ellipse(0, 0, this.r, this.r);
    imageMode(CENTER);
    image(this.image,0,0,this.r+20,this.r+20);
   // noStroke();
    pop();
  }
}
