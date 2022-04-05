function Enemigo1(x,y){
    Kinetic.Rect.call(this);

    this.setWidth(60);
    this.setHeight(60);
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
        this.setX(this.getX()+Math.sin(this.contador * Math.PI/50)*5);
    }
    

     
}
Enemigo1.prototype= Object.create(Kinetic.Rect.prototype); 