function Player(){
    Kinetic.Rect.call(this);
    this.setWidth(40);
    this.setHeight(70);
    this.vx=15;
    this.vy=0;
    this.limiteDer=0;
    this.direccion=1;
    this.limiteTope=0;
    this.contador =0;
    this.setFill('blue');
    this.caminar = function(){
        
        this.move(this.vx,0);
        if( this.getX() > this.limiteDer ){
         this.move( this.limiteDer - this.getX() , 0);
        } 
    }
    this.retroceder = function(){
        this.move(-15,0);
        if( this.getX() < 0 ){
         this.move(- this.getX() , 0);
        } 
        
    }
    this.saltar = function(){
        this.vy=-20;
        this.contador++;
        
        
    }
    this.aplicarGravedad = function(gravedad){
        
        this.vy+=gravedad;
        

        this.move(0,this.vy);
        
        if((this.getY() + this.getHeight()) > (this.limiteTope-15)){
            this.vy=0;
            this.setY(15);
            this.contador=0
        }
        
    }

}
Player.prototype= Object.create(Kinetic.Rect.prototype); 



