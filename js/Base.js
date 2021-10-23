class Base {
  constructor(x, y, w, h, color, isStatic) {
    let options = {
      isStatic: isStatic
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.color = color;
    World.add(world, this.body);
    this.image=loadImage("img/bg.png");
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill(this.color);
    rect(0, 0, this.w, this.h);
    imageMode(CENTER);
    image(this.image,0,0,this.w, this.h);
    pop();
  }
}
