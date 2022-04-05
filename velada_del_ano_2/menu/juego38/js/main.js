var stage, fondo, grupoAssets, puntuacion;
var keyboard = {};
var intv;
var personaje;
var grav = 0.8;
var val_reb = 0;
var juego = new Game();








grupoAssets = new Kinetic.Group({
    x: 0,
    y: 0
});
stage = new Kinetic.Stage({
    container: 'game',
    width: 4540,
    height: 1000
});
puntuacion = new Kinetic.Text({
    text: 'Puntos: 0',
    height: 30,
    width: 150,
    x: 0,
    y: 0,
    fill: '#200',
    fontFamily: 'Arial',
    fintSize: 20


});
function nivelUno() {
    
    juego.puntuacion = 0;
    

    fondo = new Kinetic.Layer();
    juego.bd = false;
    //enemigos
    grupoAssets.add(new Enemigo1(500, stage.getHeight() - 710));
    grupoAssets.add(new Enemigo1(800, stage.getHeight() - 275));
    grupoAssets.add(new Enemigo1(1250, stage.getHeight() - 610));
    grupoAssets.add(new Enemigo1(1450, stage.getHeight() - 610));
    grupoAssets.add(new Enemigo1(1350, stage.getHeight() - 275));
    //plataformas
     var paredD = new Plataforma(1820,0);
     paredD.setHeight(stage.getHeight()*2);
     paredD.setWidth(stage.getWidth() * 2);
     grupoAssets.add(paredD);

     
 
    var suelo = new Plataforma(0, stage.getHeight()-15 - 200);
    suelo.setWidth(stage.getWidth() * 2);
    suelo.setHeight(stage.getHeight()*2);
    
    grupoAssets.add(suelo);

    grupoAssets.add(new Plataforma(0, stage.getHeight() - 550));
    grupoAssets.add(new Plataforma(300, stage.getHeight() - 320));
    grupoAssets.add(new Plataforma(1050, stage.getHeight() - 550));
    grupoAssets.add(new Plataforma(500, stage.getHeight() - 650));
    grupoAssets.add(new Plataforma(800, stage.getHeight() - 850));
    grupoAssets.add(new Plataforma(1250, stage.getHeight() - 550));
    grupoAssets.add(new Plataforma(1450, stage.getHeight() - 550));


    //brocolis
    grupoAssets.add(new Brocoli(500, 120));
    grupoAssets.add(new Brocoli(100, 500));
    grupoAssets.add(new Brocoli(1400, 200));
    grupoAssets.add(new Brocoli(1200, 200));
    grupoAssets.add(new Brocoli(1100, 600));
    grupoAssets.add(new Brocoli(1200, 600));
    grupoAssets.add(new Brocoli(1300, 600));
    grupoAssets.add(new Brocoli(1400, 600));

    grupoAssets.add(new BrocoliDorado(875, 20));

    //puertas
    grupoAssets.add(new Puerta(1750, 710));




    personaje = new Player();
    personaje.setX(70);
    personaje.setY(stage.getHeight() - personaje.getHeight()  -200 );
    personaje.limiteDer = 3000;
    personaje.limiteTope =stage.getHeight();
    fondo.add(personaje);
    fondo.add(grupoAssets);
    fondo.add(puntuacion);
    stage.add(fondo);
    intv = setInterval(frameLoop, 1000 / 20);
    
}
function nivel2() {
    


    fondo = new Kinetic.Layer();
    juego.bd= false;
    //enemigos
    
    grupoAssets.add(new Enemigo1(300, stage.getHeight() - 475));
    grupoAssets.add(new Enemigo1(530, stage.getHeight() - 475));

    grupoAssets.add(new Enemigo1(930, stage.getHeight() - 575));

    grupoAssets.add(new Enemigo1(1500, stage.getHeight() - 475));

    grupoAssets.add(new Enemigo1(1800, stage.getHeight() - 675));

    grupoAssets.add(new Enemigo1(2280, stage.getHeight() - 875));

    grupoAssets.add(new Enemigo1(2930, stage.getHeight() - 575));
    grupoAssets.add(new Enemigo1(3160, stage.getHeight() - 575));




    //lava
    var lava = new Lava(0,stage.getHeight() - 400)
    lava.setWidth(stage.getWidth() * 2);
    lava.setHeight(stage.getHeight()*2);
    grupoAssets.add(lava);

    //plataformas

    var pared = new Plataforma(3400,0);
     pared.setHeight(stage.getHeight()*2);
     pared.setWidth(stage.getWidth() * 2);
     grupoAssets.add(pared);
    
    grupoAssets.add(new Plataforma(00, stage.getHeight() - 415));
    
    grupoAssets.add(new Plataforma(300, stage.getHeight() - 415));
    grupoAssets.add(new Plataforma(530, stage.getHeight() - 415));
    
    grupoAssets.add(new Plataforma(930, stage.getHeight() - 515));
    
    grupoAssets.add(new Plataforma(1500, stage.getHeight() - 415));
    grupoAssets.add(new Plataforma(1720, stage.getHeight() - 415));

    grupoAssets.add(new Plataforma(1800, stage.getHeight() - 615));

    grupoAssets.add(new Plataforma(1700, stage.getHeight() - 875));

    grupoAssets.add(new Plataforma(2280, stage.getHeight() - 815));

    grupoAssets.add(new Plataforma(2930, stage.getHeight() - 515));
    grupoAssets.add(new Plataforma(3160, stage.getHeight() - 515));
    grupoAssets.add(new Plataforma(3300, stage.getHeight() - 515));

    //Proyectiles 
    grupoAssets.add(new ProyectilV(260,stage.getHeight() - 415))
   
    //brocolis
    grupoAssets.add(new Brocoli(50, 370));
    grupoAssets.add(new Brocoli(150, 370));
    grupoAssets.add(new Brocoli(350, 370));
    grupoAssets.add(new Brocoli(400, 370));
    grupoAssets.add(new Brocoli(450, 370));
    grupoAssets.add(new Brocoli(550, 370));
    grupoAssets.add(new Brocoli(600, 370));
    grupoAssets.add(new Brocoli(650, 370));

    grupoAssets.add(new Brocoli(950, 270));
    grupoAssets.add(new Brocoli(1050, 270));
    grupoAssets.add(new Brocoli(1000, 270));

    grupoAssets.add(new Brocoli(1550, 370));
    grupoAssets.add(new Brocoli(1600, 370));
    grupoAssets.add(new Brocoli(1650, 370));
    grupoAssets.add(new Brocoli(1700, 370));

    grupoAssets.add(new Brocoli(2630, 70));
    grupoAssets.add(new Brocoli(2720, 70));
    grupoAssets.add(new Brocoli(2810, 70));

    grupoAssets.add(new Brocoli(2780, 270));
    grupoAssets.add(new Brocoli(2830, 270));
    grupoAssets.add(new Brocoli(2880, 270));
    grupoAssets.add(new Brocoli(2930, 270));

    grupoAssets.add(new BrocoliDorado(1750, stage.getHeight() - 945));

    //puertas
    grupoAssets.add(new Puerta(3350, stage.getHeight() - 590));




    personaje = new Player();
    personaje.setX(0);
    personaje.setY(stage.getHeight() - personaje.getHeight() - 400);
    personaje.limiteDer = (stage.getWidth() - personaje.getWidth());
    personaje.limiteTope = stage.getHeight();
    fondo.add(personaje);
    fondo.add(grupoAssets);
    fondo.add(puntuacion);
    stage.add(fondo);
    intv = setInterval(frameLoop, 1000 / 20);
    console.log('b ' + personaje.getY)
}
function nivel3() {
    fondo = new Kinetic.Layer();

    //enemigos
    var boss = new Enemigo1 (1000,stage.getHeight() - 700 )
    boss.setHeight(500);
    boss.setWidth(400);
    grupoAssets.add(boss);


    //plataformas
    var paredD = new Plataforma(1820,0);
    paredD.setHeight(stage.getHeight()*2);
    paredD.setWidth(stage.getWidth() * 2);
    grupoAssets.add(paredD);

    

    var suelo = new Plataforma(0, stage.getHeight()-15 - 200);
    suelo.setWidth(stage.getWidth() * 2);
    grupoAssets.add(suelo);

    

    
    grupoAssets.add(new Plataforma(450, stage.getHeight() - 850));
    grupoAssets.add(new Plataforma(450, stage.getHeight() - 550));
    grupoAssets.add(new Plataforma(450, stage.getHeight() - 250));

    //brocolis

    //Proyectiles
    grupoAssets.add(new ProyectilH(980,stage.getHeight() - 800))
    grupoAssets.add(new ProyectilH(980,stage.getHeight() - 500))
    grupoAssets.add(new ProyectilH(980,stage.getHeight() - 300))


    //puertas





    personaje = new Player();
    personaje.setX(0);
    personaje.setY(stage.getHeight() - personaje.getHeight() - 215);
    personaje.limiteDer = (stage.getWidth() - personaje.getWidth());
    personaje.limiteTope = stage.getHeight();
    fondo.add(personaje);
    fondo.add(grupoAssets);
    fondo.add(puntuacion);
    stage.add(fondo);

    intv = setInterval(frameLoop, 1000 / 20);
}




function moverPersonaje() {
    if (keyboard[65]) {
        personaje.retroceder();
    }
    if (keyboard[68]) {
        personaje.caminar();

    }
    if (keyboard[87] && personaje.contador < 1) {
        personaje.saltar();

    }
  
    

}

function addKeyBoardEvents() {
    addEvent(document, "keydown", function (e) {
        keyboard[e.keyCode] = true;
    });
    addEvent(document, "keyup", function (e) {
        keyboard[e.keyCode] = false;
    });


    function addEvent(element, eventName, func) {
        if (element.addEventListener) {
            element.addEventListener(eventName, func, false);
        } else if (element.attachEvent) {
            element.attachEvent(eventName, func);
        }
    }

}
function hit(a, b) {
    var hit = false;

    //Colisiones horizontales
    if (b.getX() + b.getWidth() >= a.getX() && b.getX() < a.getX() + a.getWidth()) {

        //colisiones verticales
        if (b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight())
            hit = true;
    }

    //Colision de a con b
    if (b.getX() <= a.getX() && b.getX() + b.getWidth >= a.getX() + a.getWidth()) {

        if (b.getY() <= a.getY() && b.getY() + b.getHeight() >= a.getY() + a.getHeight())
            hit = true;
    }

    //Colision de b con a
    if (a.getX() <= b.getX() && a.getX() + a.getWidth >= b.getX() + b.getWidth()) {

        if (a.getY() <= b.getY() && a.getY() + a.getHeight() >= b.getY() + b.getHeight())
            hit = true;
    }
    return hit;
}
function moverEnemigos() {
    var enemigos = grupoAssets.children;
    for (i in enemigos) {
        var enemigo = enemigos[i];
        if (enemigo instanceof Enemigo1)
            enemigo.mover();
    }
}
function moverProyectil() {
    var proyectiles = grupoAssets.children;
    for (i in proyectiles) {
        var proyectil = proyectiles[i];
        if (proyectil instanceof ProyectilV)
            proyectil.mover();
        if (proyectil instanceof ProyectilH)
            proyectil.mover();
    }
}
function aplicarFuerzas() {
    personaje.aplicarGravedad(grav);
}
function detectarColPlataformas() {
    var plataformas = grupoAssets.children;

    for (i in plataformas) {
        var plataforma = plataformas[i];
        if (hit(plataforma, personaje)) {

            if (plataforma instanceof Enemigo1) {

                if (personaje.vy > 2 && personaje.getY() < plataforma.getY()) {
                    plataforma.remove();
                    juego.puntuacion += 50;
                    juego.jefemuerto=true;
                    console.log(juego.puntuacion);
                }
                else {
                    console.log('perdiste inutil');
                }
            }
            else if (plataforma instanceof Plataforma && personaje.getY() < plataforma.getY() && personaje.vy >= 0) {
                
                personaje.contador = 0;
                personaje.setY(plataforma.getY() - 70);
                personaje.vy *= val_reb;

            } else if (plataforma instanceof Brocoli) {

                plataforma.remove();
                juego.puntuacion += 100;

            } else if (plataforma instanceof Puerta && juego.bd) {

                if (juego.nivel == 1 && juego.bd) {

                    grupoAssets.removeChildren();

                    window.clearInterval(intv);
                    juego.nivel = 2;
                    nivel2();

                }else if (juego.nivel == 1 && juego.bd) {

                    grupoAssets.removeChildren();

                    window.clearInterval(intv);
                    juego.nivel = 2;
                    nivel2();

                }if (juego.nivel == 2 && juego.bd) {

                    grupoAssets.removeChildren();

                    window.clearInterval(intv);
                    juego.nivel = 3;
                    nivel3();
                }if (juego.nivel == 3 && juego.jefemuerto){
                    console.log('ganaste');
                }


            } else if (plataforma instanceof Plataforma && personaje.getX() < plataforma.getX() && personaje.vx >= 0) {

                personaje.setX(plataforma.getX() - 40);

            }else if (plataforma instanceof Plataforma && personaje.getY() > plataforma.getY() && personaje.vy <= 0) {

                personaje.setY(plataforma.getY() + 15);
                personaje.vy = 0;

            } else if (plataforma instanceof Plataforma && personaje.getX() > plataforma.getX() && personaje.vx <= 0) {

                personaje.setX(plataforma.getX() + 230);

            } else if (plataforma instanceof BrocoliDorado) {

                plataforma.remove();
                juego.bd = true;
                continue;

            } else if (plataforma instanceof ProyectilV) {

                console.log('perdiste')

            }else if (plataforma instanceof Lava) {

                console.log('perdiste')

            }
        }
    }
}
function dibujarTexto() {
    puntuacion.setText('Puntos: ' + juego.puntuacion);

}
function moverFondo(){
    
    if(keyboard[68] && personaje.getX()>400 ){
        
        for(i in grupoAssets.children){
            
            var asset = grupoAssets.children[i];
            asset.move(-5,0);
        }
    }
    if(keyboard[68] && personaje.getX()>2400 ){
        
        for(i in grupoAssets.children){
            
            var asset = grupoAssets.children[i];
            asset.move(-10,0);
        }
    }

}

nivelUno();

addKeyBoardEvents();


function frameLoop() {

    aplicarFuerzas();
    dibujarTexto();
    detectarColPlataformas();
    moverFondo();
    moverPersonaje();
    moverEnemigos();
    moverProyectil();



    stage.draw();


}