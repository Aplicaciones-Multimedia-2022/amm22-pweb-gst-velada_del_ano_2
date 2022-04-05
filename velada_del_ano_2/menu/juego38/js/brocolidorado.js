function BrocoliDorado(x,y,imagen){
    Kinetic.Rect.call(this);
    this.setWidth(50);
    this.setHeight(50);
    this.setX(x);
    this.setY(y);
    this.setFill('gold');
}
BrocoliDorado.prototype= Object.create(Kinetic.Rect.prototype); 