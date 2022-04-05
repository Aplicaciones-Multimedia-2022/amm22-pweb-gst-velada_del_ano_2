function PlataformaH(x,y){
    Kinetic.Rect.call(this);

    this.setWidth(15);
    this.setHeight(230);
    this.setX(x);
    this.setY(y);
    this.setFill('black');

}
PlataformaH.prototype= Object.create(Kinetic.Rect.prototype);