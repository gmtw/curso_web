$(document).ready(function () {
	// $('#boton').click(function () {
	// 	alert('hola')
	// })

	var boton = $('#boton');
	var desactivar  = $('#desactivar');

	function saludo () {
		alert('Saludo');
	};

	// boton.click(saludo);
	boton.on('mouseenter', function () {
		document.body.style.background = '#000'
	});

	boton.on('mouseleave', function () {
		document.body.style.background = '#fff'

	});

	boton.on('click', function () {
		alert('Saludos');
		console.log('Saludo')
	});

	desactivar.on('click', function () {
		boton.off('click');
	});
});