function ProyectilH(x,y){
    Kinetic.Rect.call(this);

    this.setWidth(30);
    this.setHeight(30);
    this.setX(x);
    this.setY(y);
    this.contador =0;
    this.setFill('red');

    this.aleat= function(inferior,superior){
        var posibilidades =superor -inferior;
        var random = Math.random()*posibilidades;
        random = Math.floor(random);
        return parseInt(inferior) + random;
    }
    this.mover= function(){
        this.contador++;
        this.setX(this.getX()-Math.sin(this.contador * Math.PI/50)*80);
    }
    

     
}
ProyectilH.prototype= Object.create(Kinetic.Rect.prototype); 