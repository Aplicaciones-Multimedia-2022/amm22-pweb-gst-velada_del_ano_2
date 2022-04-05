function Puerta(x,y){
    Kinetic.Rect.call(this);
    this.setWidth(50);
    this.setHeight(75);
    this.setX(x);
    this.setY(y);
    this.setFill('orange');
}
Puerta.prototype= Object.create(Kinetic.Rect.prototype);