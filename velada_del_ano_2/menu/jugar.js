document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show');
});

/* Get into full screen */
function GoInFullscreen(caja) {
  document.querySelector("#preducir i").style.visibility = "visible";
  document.querySelector("#preducir i").style.right = "-35em";
  document.querySelector("#pcompleta i").style.visibility = "hidden";
  if (caja.requestFullscreen)
    caja.requestFullscreen();
  else if (caja.mozRequestFullScreen)
    caja.mozRequestFullScreen();
  else if (caja.webkitRequestFullscreen)
    caja.webkitRequestFullscreen();
  else if (caja.msRequestFullscreen)
    caja.msRequestFullscreen();
}


/* Get out of full screen */
function GoOutFullscreen() {
  document.querySelector("#pcompleta i").style.visibility = "visible";
  document.querySelector("#pcompleta i").style.right = "-15.1em";
  document.querySelector("#preducir i").style.visibility = "hidden";
  if (document.exitFullscreen)
    document.exitFullscreen();
  else if (document.mozCancelFullScreen)
    document.mozCancelFullScreen();
  else if (document.webkitExitFullscreen)
    document.webkitExitFullscreen();
  else if (document.msExitFullscreen)
    document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
  var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;

  // If no caja is in full-screen
  if (full_screen_element === null)
    return false;
  else
    return true;
}

$("#caja button i").on('click', function () {
  if (IsFullScreenCurrently())
    GoOutFullscreen();
  else
    GoInFullscreen($("#caja").get(0));
});


var keyboard = {};
var intv;

window.onload = function () {

  var m = 100;
  var n = 100;
  var p = 1;
  var s = 1;
  var fin = 2;
  var w1 = 0;
  var w2 = 0;

  var posX1 = 30;
  var posY1 = 250;
  var posX2 = 390;
  var posY2 = 250;

  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var ring = new Image();
  ring.src = '../img/Boxeo.jpg';

  var b1 = new Image();
  b1.src = '../img/spriteP1.png';

  var p2 = new Image();
  p2.src = '../img/viruz.png';

  var vida = new Image();
  vida.src = '../img/Vida.png';

  var winP1 = new Image();
  winP1.src = '../img/p1_victory.jpeg';

  var winP2 = new Image();
  winP2.src = '../img/p2_victory.jpeg';
  
  var pantallaInicio = new Image();
  pantallaInicio.src = '../img/inicios.jpeg';


  function setVida1(imagen, m) {
    if (m == 100) {
      ctx.drawImage(imagen, 250, 210, 340, 60, 10, 10, 300, 40);
      ctx.restore();
    } else if (m == 90) {
      ctx.drawImage(imagen, 250, 130, 340, 60, 10, 10, 300, 40);
      ctx.restore();
    } else if (m == 80) {
      ctx.drawImage(imagen, 750, 610, 340, 60, 10, 10, 300, 40);
      ctx.restore();
    } else if (m == 70) {
      ctx.drawImage(imagen, 750, 530, 340, 60, 10, 10, 300, 40);
      ctx.restore();
    } else if (m == 60) {
      ctx.drawImage(imagen, 750, 450, 340, 60, 10, 10, 300, 40);
      ctx.restore();
    } else if (m == 50) {
      ctx.drawImage(imagen, 750, 370, 340, 60, 10, 10, 300, 40);
      ctx.restore();
    } else if (m == 40) {
      ctx.drawImage(imagen, 750, 290, 340, 60, 10, 10, 300, 40);
      ctx.restore();
    } else if (m == 30) {
      ctx.drawImage(imagen, 750, 210, 340, 60, 10, 10, 300, 40);
      ctx.restore();
    } else if (m == 20) {
      ctx.drawImage(imagen, 750, 130, 340, 60, 10, 10, 300, 40);
      ctx.restore();
    } else if (m == 10) {
      ctx.drawImage(imagen, 750, 50, 340, 60, 10, 10, 300, 40);
      ctx.restore();
    } else if (m == 0) {
      fin = 1;
      w2 = 1;
    }
  }
  function setVida2(imagen, m) {
    if (m == 100) {
      ctx.drawImage(imagen, 250, 210, 340, 60, 325, 10, 300, 40);
      ctx.restore();
    } else if (m == 90) {
      ctx.drawImage(imagen, 250, 130, 340, 60, 325, 10, 300, 40);
      ctx.restore();
    } else if (m == 80) {
      ctx.drawImage(imagen, 750, 610, 340, 60, 325, 10, 300, 40);
      ctx.restore();
    } else if (m == 70) {
      ctx.drawImage(imagen, 750, 530, 340, 60, 325, 10, 300, 40);
      ctx.restore();
    } else if (m == 60) {
      ctx.drawImage(imagen, 750, 450, 340, 60, 325, 10, 300, 40);
      ctx.restore();
    } else if (m == 50) {
      ctx.drawImage(imagen, 750, 370, 340, 60, 325, 10, 300, 40);
      ctx.restore();
    } else if (m == 40) {
      ctx.drawImage(imagen, 750, 290, 340, 60, 325, 10, 300, 40);
      ctx.restore();
    } else if (m == 30) {
      ctx.drawImage(imagen, 750, 210, 340, 60, 325, 10, 300, 40);
      ctx.restore();
    } else if (m == 20) {
      ctx.drawImage(imagen, 750, 130, 340, 60, 325, 10, 300, 40);
      ctx.restore();
    } else if (m == 10) {
      ctx.drawImage(imagen, 750, 50, 340, 60, 325, 10, 300, 40);
      ctx.restore();
    } else if (m == 0) {
      fin = 1;
      w1 = 1;
    }
  }
  function setPantallaFinal(imagen) {
    imagen.onload = function () {
    }
  }
  function resetPantallaFinal(imagen) {
    ctx.drawImage(imagen, 0, 0);
    ctx.restore();
  }
  function setPersonaje1(imagen, posX, posY) {
    ctx.save();
    imagen.onload = function () {
      ctx.drawImage(imagen, 200, 0, 100, 200, posX, posY, 100, 200);
    }
    ctx.restore();
  }
  function setPersonaje2(imagen, posX, posY) {
    ctx.save();
    imagen.onload = function () {
      ctx.drawImage(imagen, 0, 0, 340, 650, posX, posY, 100, 200);
    }
    ctx.restore();
  }
  function resetPersonaje1(imagen, sx, sy, sWidth, sHeight, posX, posY, dWidth, dHeight) {
    ctx.save();
    ctx.drawImage(imagen, sx, sy, sWidth, sHeight, posX, posY, dWidth, dHeight);
    ctx.restore();
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
  function moverPersonaje1(vel) {
    //////////////Jugador1///////////////
    if (keyboard[87] && !keyboard[83]) {
      ctx.drawImage(ring, posX1 - 10, posY1, 210, 201, posX1 - 10, posY1, 210, 201);
      ctx.restore();
      resetPersonaje1(b1, 0, 210, 180, 190, posX1, posY1, 180, 200);
      p = 1;
    }
    if (keyboard[65] && (posX1 > 10) && !keyboard[87]) {
      posX1 -= vel;
      ctx.drawImage(ring, posX1 - 10, posY1, 120, 201, posX1 - 10, posY1, 120, 201);
      resetPersonaje1(b1, 200, 0, 100, 200, posX1, posY1, 100, 200);
      p = 1;
    }
    if (keyboard[68] && ((posX1 + 170) <= (posX2)) && !keyboard[87]) {
      posX1 += vel;
      console.log(k);
      ctx.drawImage(ring, posX1 - 10, posY1, 120, 201, posX1 - 10, posY1, 120, 201);
      ctx.restore();
      resetPersonaje1(b1, 200, 0, 100, 200, posX1, posY1, 100, 200);
      p = 1;
    }
    if (keyboard[83]) {
      ctx.drawImage(ring, posX1 - 10, posY1, 120, 201, posX1 - 10, posY1, 120, 201);
      ctx.restore();
      resetPersonaje1(b1, 30, 440, 140, 150, posX1, posY1 + 81, 100, 120);
      p = 0;
    }
    if (!keyboard[87]) {
      ctx.drawImage(ring, posX1 - 10, posY1, 210, 201, posX1 - 10, posY1, 210, 201);
      ctx.restore();
      if (p == 1) {
        resetPersonaje1(b1, 200, 0, 100, 200, posX1, posY1, 100, 200);
      } else {
        resetPersonaje1(b1, 30, 440, 140, 150, posX1, posY1 + 81, 100, 120);
      }
    }
    if (keyboard[87] && keyboard[83]) {
      ctx.drawImage(ring, posX1 - 10, posY1, 210, 201, posX1 - 10, posY1, 210, 201);
      ctx.restore();
      resetPersonaje1(b1, 0, 0, 180, 120, posX1, posY1 + 81, 180, 120);
      p = 0;
    }
    //////////////Jugador2///////////////
    if (keyboard[38] && !keyboard[40]) {
      ctx.drawImage(ring, posX2 - 80, posY2, 210, 201, posX2 - 80, posY2, 210, 201);
      ctx.restore();
      ctx.drawImage(ring, posX2 + 20, posY2 + 30, 120, 171, posX2 + 20, posY2 + 30, 120, 171);
      ctx.restore();
      resetPersonaje1(p2, 0, 650, 340, 600, posX2 - 80, posY2, 180, 200);
      s = 1;
    }
    if (keyboard[37] && posX2 >= (posX1 + 170) && !keyboard[38]) {
      posX2 -= vel;
      ctx.drawImage(ring, posX2, posY2, 120, 90, posX2, posY2, 120, 90);
      ctx.restore();
      ctx.drawImage(ring, posX2 + 20, posY2 + 30, 120, 171, posX2 + 20, posY2 + 30, 120, 171);
      ctx.restore();
      resetPersonaje1(p2, 0, 0, 340, 650, posX2, posY2, 100, 200);
      s = 1;
    }
    if (keyboard[39] && posX2 <= 501 && !keyboard[38]) {
      posX2 += vel;
      ctx.drawImage(ring, posX2, posY2, 120, 90, posX2, posY2, 120, 90);
      ctx.restore();
      ctx.drawImage(ring, posX2 - 5, posY2 + 30, 120, 171, posX2 - 5, posY2 + 30, 120, 171);
      ctx.restore();
      resetPersonaje1(p2, 0, 0, 340, 650, posX2, posY1, 100, 200);
      s = 1;
    }
    if (keyboard[40]) {
      ctx.drawImage(ring, posX2 - 10, posY2, 120, 201, posX2 - 10, posY2, 120, 201);
      ctx.restore();
      resetPersonaje1(p2, 470, 0, 380, 510, posX2, posY2 + 81, 100, 120);
      s = 0;
    }
    if (!keyboard[38]) {
      ctx.drawImage(ring, posX2 - 80, posY2, 120, 40, posX2 - 80, posY2, 120, 40);
      ctx.restore();
      ctx.drawImage(ring, posX2, posY2, 120, 90, posX2, posY2, 120, 90);
      ctx.restore();
      ctx.drawImage(ring, posX2 + 20, posY2 + 30, 120, 171, posX2 + 20, posY2 + 30, 120, 171);
      ctx.restore();
      if (s == 1) {
        resetPersonaje1(p2, 0, 0, 340, 650, posX2, posY2, 100, 200);
      } else {
        ctx.drawImage(ring, posX2 - 80, posY1 + 50, 120, 201, posX2 - 80, posY1 + 50, 120, 201);
        resetPersonaje1(p2, 470, 0, 380, 510, posX2, posY2 + 81, 100, 120);
      }
    }
    if (keyboard[40] && keyboard[38]) {
      ctx.drawImage(ring, posX2 - 80, posY2, 210, 201, posX2 - 80, posY2, 210, 201);
      ctx.restore();
      resetPersonaje1(p2, 0, 650, 340, 600, posX2 - 80, posY2 + 81, 100, 120);
      s = 0;
    }
    //////////////Jugador1y2///////////////
    if (keyboard[38] && keyboard[87] && !keyboard[40] && !keyboard[83]) {
      ctx.drawImage(ring, 0, posY1, 626, 201, 0, posY1, 626, 201);
      ctx.restore();
      resetPersonaje1(b1, 0, 210, 180, 190, posX1, posY1, 180, 200);
      resetPersonaje1(p2, 0, 650, 340, 600, posX2 - 80, posY2, 180, 200);
      s = 1;
      p = 1;
    }
    if (keyboard[38] && keyboard[87] && keyboard[40] && keyboard[83]) {
      ctx.drawImage(ring, 0, posY1, 626, 201, 0, posY1, 626, 201);
      ctx.restore();
      resetPersonaje1(b1, 0, 0, 180, 120, posX1, posY1 + 81, 180, 120);
      p = 0;
      resetPersonaje1(p2, 0, 650, 340, 600, posX2 - 80, posY2 + 81, 100, 120);
      s = 0;
    }
    if (keyboard[38] && keyboard[87] && keyboard[40] && !keyboard[83]) {
      ctx.drawImage(ring, 0, posY1, 626, 201, 0, posY1, 626, 201);
      ctx.restore();
      resetPersonaje1(b1, 0, 210, 180, 190, posX1, posY1, 180, 200);
      resetPersonaje1(p2, 0, 650, 340, 600, posX2 - 80, posY2 + 81, 100, 120);
      s = 0;
      p = 1;
    }
    if (keyboard[38] && keyboard[87] && !keyboard[40] && keyboard[83]) {
      ctx.drawImage(ring, 0, posY1, 626, 201, 0, posY1, 626, 201);
      ctx.restore();
      resetPersonaje1(b1, 0, 0, 180, 120, posX1, posY1 + 81, 180, 120);
      p = 0;
      resetPersonaje1(p2, 0, 650, 340, 600, posX2 - 80, posY2, 180, 200);
      s = 1;
    }
  }
  function colisiones() {
    if ((keyboard[38] && !keyboard[83] && ((posX1 + 170) >= posX2) && !keyboard[65]) || (keyboard[38] && keyboard[83] && keyboard[40] && ((posX1 + 170) >= posX2)) && !keyboard[65]) {
      m -= 1;
      console.log('m= ' + m + ' ,n= ' + n);
    }
    if ((keyboard[87] && !keyboard[40] && ((posX1 + 170) >= posX2) && !keyboard[39]) || (keyboard[87] && keyboard[83] && keyboard[40] && ((posX1 + 170) >= posX2)) && !keyboard[39]) {
      n -= 1;
      console.log('m= ' + m + ' ,n= ' + n);
    }
    if ((keyboard[38] && keyboard[87] && ((posX1 + 170) >= posX2) && keyboard[40] && keyboard[83])) {
      m -= 1;
      n -= 1;
      console.log('m= ' + m + ' ,n= ' + n);
    }
  }
  function play() {
    if (keyboard[32]) {
      fin = 0;
      w1 = 0;
      w2 = 0;
      m = 100;
      n = 100;
      p = 1;
      s = 1;
      k = 1;
      posX1 = 30;
      posX2 = 390;
      load();
    }
  }
  function load() {
    setPantallaFinal(winP2);
    setPantallaFinal(winP1);
    setPantallaFinal(vida);
    resetPantallaFinal(ring);
    setPersonaje1(b1, posX1, posY1);
    setPersonaje2(p2, posX2, posY2);
  }
  function init() {
    if (typeof game_loop != "undefined") {
      clearInterval(game_loop);
    }
    game_loop = setInterval(main, 10);
  }
  function main() {
    if (fin == 2) {
      resetPantallaFinal(pantallaInicio);
      play();
    } else if (fin == 0) {

      moverPersonaje1(10);
      colisiones();
      setVida1(vida, m);
      setVida2(vida, n);

    } else {
      if (w1 == 1) {
        resetPantallaFinal(winP1);

      } else if (w2 == 1) {
        resetPantallaFinal(winP2);
      }
      play();
    }



  }
  
  setPantallaFinal(pantallaInicio);
  addKeyBoardEvents();
  init();
  main();
}