(function (argument) {
// 	/* body... */
	var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
		correo = formulario.correo,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
		error = document.getElementById('error');

		function validarNombre (e) {
			if (nombre.value == '' || nombre.value == null) {

				e.preventDefault();
				error.style.display = 'block';
				error.innerHTML = error.innerHTML + '<li>Por favor ingresa el nombre</li>';

			}else{
				error.style.display = 'none';
			}
		}

		function validarCorreo(e){
			if (correo.value == '' || correo.value == null) {
				e.preventDefault();
				error.style.display = 'block';
				error.innerHTML = error.innerHTML + '<li>Por favor ingresa un correo</li>';
		}else{
				error.style.display = 'none';
			}
	}

		function validarSexo (e) {
			if (sexo.value == '' || sexo.value == null) {
				e.preventDefault();
				error.style.display = 'block';
				error.innerHTML = error.innerHTML + '<li>Por favor selecciona el sexo</li>';
		}else{
				error.style.display = 'none';
			}
	}

		function validarTerminos (e) {
			if (terminos.checked == false) {
				e.preventDefault();
				error.style.display = 'block';
				error.innerHTML = error.innerHTML + '<li>Por favor acepta los términos y condiciones</li>';
		}else{
				error.style.display = 'none';
			}
			
	}

		function validarFormulario (e) {
			error.innerHTML = '';
			validarNombre(e);
			validarCorreo(e);
			validarSexo(e);
			validarTerminos(e);
		}


	formulario.addEventListener('submit', validarFormulario);
})