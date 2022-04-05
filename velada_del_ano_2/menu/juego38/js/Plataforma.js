function Plataforma(x,y){
    Kinetic.Rect.call(this);

    this.setWidth(230);
    this.setHeight(15);
    this.setX(x);
    this.setY(y);
    this.setFill('black');

}
Plataforma.prototype= Object.create(Kinetic.Rect.prototype); 
