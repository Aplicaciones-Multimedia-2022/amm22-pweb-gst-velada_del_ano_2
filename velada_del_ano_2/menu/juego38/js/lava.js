function Lava(x,y){
    Kinetic.Rect.call(this);

    this.setWidth(10);
    this.setHeight(10);
    this.setX(x);
    this.setY(y);
    this.setFill('red');

}
Lava.prototype= Object.create(Kinetic.Rect.prototype); 