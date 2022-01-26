var can = document.getElementById("Cancha"); 
var papel = can.getContext("2d"); 


var fondo = {
  url:"cancha.png",
  cargaOK: false
};

var jugador1 = {
  url:"jugador1.png",
  cargaOK: false 

};

var jugador2 = {
  url:"jugador2.png",
  cargaOK: false 

};

var jugador3 = {
  url:"jugador3.png",
  cargaOK: false 

};
 

fondo.imagen = new Image();
fondo.imagen.src = fondo.url; 
fondo.imagen.addEventListener("load", cargarFondo);

jugador1.imagen = new Image();
jugador1.imagen.src = jugador1.url; 
jugador1.imagen.addEventListener("load", cargarJugador1);

jugador2.imagen = new Image();
jugador2.imagen.src = jugador2.url; 
jugador2.imagen.addEventListener("load", cargarJugador2);

jugador3.imagen = new Image();
jugador3.imagen.src = jugador3.url; 
jugador3.imagen.addEventListener("load", cargarJugador3);



function dibujar()
{
  if(fondo.cargaOK == true)
  {

    papel.drawImage(fondo.imagen, 0, 0);

  }

  if(jugador1.cargaOK == true)
  {
    for(var j=0; j<10; j++) {
    var x = aleatoria(0,420);
    var y = aleatoria(0,420);
    papel.drawImage(jugador1.imagen, x, y);

    }
    

  }

  if(jugador2.cargaOK == true)
  {
    papel.drawImage(jugador2.imagen, 400, 400);

  }

  if(jugador3.cargaOK == true)
  {
    papel.drawImage(jugador3.imagen, 200, 200);

  }
  
  

}


function cargarFondo() {
  fondo.cargaOK=true;
  dibujar();

  

};

function cargarJugador1(){
  jugador1.cargaOK=true;
  dibujar();

}; 

function cargarJugador2(){
  jugador2.cargaOK=true;
  dibujar();

};

function cargarJugador3(){
  jugador3.cargaOK=true;
  dibujar();

};




function aleatoria(min, maxi) 
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1))+ min;  
    return resultado; 

} 