class Boat {
  constructor (x, y, width, height, boatPos) {
    this.body = Bodies.rectangle(x, y, width, height)
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/boat.png");
    this.boatPos = boatPos;
    World.add(world, this.body)
  }

  display() {
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, 0, this.boatPos, this.width, this.height)
    pop()
  }
}