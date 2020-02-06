var cajas  = document.getElementsByTagName('div');
// var cajas = document.getElementsByClassName('caja');

var primeraCaja = document.getElementById('primeraCaja');

// cajas[0].innerHTML = '<h1>Hola</h1>';

// primeraCaja.textContent = 'Hola Mundo';
// primeraCaja.innerHTML = '<u>Hola Mundo</u>';

// ----------Creando Nodos

var caja = document.createElement('div');
var contenido = document.createTextNode('Hola Mundo');
caja.appendChild(contenido);
caja.setAttribute('class', 'caja');

var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);


// --------Mmodificando la clase o al id del documento

caja.id = 'primera';
caja.className = 'caja Naranja';

var padre = cajas[0].parentNode;

// padre.insertBefore(caja, cajas[2]);
padre.replaceChild(caja, cajas[0]);

padre.removeChild(cajas[3]);



