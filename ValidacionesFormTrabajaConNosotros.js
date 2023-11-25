//validación mostrar los errores en los campos
function mostrarError(campo, mensaje) {
    document.getElementById(`error${campo}`).innerHTML = mensaje;
  }
  //validación limpiar errores despues de haber completado los campos
  function limpiarErrores() {
    var campos = ['Nombres', 'Apellidos', 'Correo', 'Celular', 'Direccion', 'Sexo', 'HojaDeVida', 'Terminos'];
    campos.forEach(campo => {
      document.getElementById(`error${campo}`).innerHTML = '';
    });
  }
  //Validación del nombre
  function validarNombre() {
    limpiarErrores();
    var nombre = document.getElementById('nombres').value.trim();
    if (nombre === '') {
      mostrarError('Nombres', 'Por favor, ingrese su nombre.');
      return false;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/.test(nombre)) {
      mostrarError('Nombres', 'Por favor, ingrese solo letras en el campo de nombres.');
      return false;
    }
    if (nombre.length > 30) {
      mostrarError('Nombres', 'El nombre no puede tener más de 30 caracteres.');
      return false;
    }
    return true;
  }
  
  //Validación para el apellido
  function validarApellido() {
    limpiarErrores();
    var apellido = document.getElementById('apellidos').value.trim();
    if (apellido === '') {
      mostrarError('Apellidos', 'Por favor, ingrese su apellido.');
      return false;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/.test(apellido)) {
      mostrarError('Apellidos', 'Por favor, ingrese solo letras en el campo de apellidos.');
      return false;
    }
    if (apellido.length > 30) {
      mostrarError('Apellidos', 'El apellido no puede tener más de 30 caracteres.');
      return false;
    }
    return true;
  }

              
  //Validación para el correo
  function validarCorreo() {
    limpiarErrores();
    var correo = document.getElementById('correo').value.trim();
    if (correo === '') {
      mostrarError('Correo', 'Por favor, ingrese su correo.');
      return false;
    }
    if (!correo.includes('@')) {
      alert('Por favor, ingrese una dirección de correo válida.');
      return false;
    }
    if (correo.length > 80) {
      mostrarError('Correo', 'El correo no puede tener más de 80 caracteres.');
      return false;
    }
    return true;
  }

  //Validación para el numero celular
  var campoCelular = document.getElementById('celular');
  campoCelular.addEventListener('input', validarCelular);
  
  function validarCelular(event) {
    limpiarErrores();
    var celular = document.getElementById('celular').value.trim();
    if (celular === '') {
      mostrarError('Celular', 'Por favor, ingrese su número de celular.');
      return false;
    }

    var inputValue = event.target.value.trim();
    var numericValue = inputValue.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    if (inputValue !== numericValue) {
      campoCelular.value = numericValue;
    }
    if (numericValue.length > 10) {
      campoCelular.value = numericValue.slice(0, 10); // Limitar a 10 dígitos
      mostrarError('Celular', 'El número de celular no puede tener más de 10 dígitos.');
    }
    
    return true;
  }

  //Validación para la dirección
  function validarDireccion() {
    limpiarErrores();
    var direccion = document.getElementById('direccion').value.trim();
    if (direccion === '') {
      mostrarError('Direccion', 'Por favor, ingrese su dirección.');
      return false;
    }
    if (direccion.length > 100) {
      mostrarError('Direccion', 'La dirección no puede tener más de 100 caracteres.');
      return false;
    }
    return true;
  }
  //Validación para seleccionar el sexo
  function validarSexo() {
    limpiarErrores();
    var sexo = document.getElementById('sexo').value;
    if (sexo === '') {
      mostrarError('Sexo', 'Por favor, seleccione su sexo.');
      return false;
    }
    return true;
  }
  //Validación para cargar la hoja de vida
  var campoHojaDeVida = document.getElementById('hojaDeVida');
  campoHojaDeVida.addEventListener('change', validarHojaDeVida);

  function validarHojaDeVida() {
    limpiarErrores();
    var allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    var hojaDeVida = campoHojaDeVida.value.trim();

    if (hojaDeVida === '') {
      mostrarError('HojaDeVida', 'Por favor, cargue su hoja de vida.');
      return false;
    }

    if (!allowedExtensions.exec(hojaDeVida)) {
      mostrarError('HojaDeVida', 'Por favor, cargue un archivo PDF o Word válido.');
      campoHojaDeVida.value = ''; // Limpiar el campo si el archivo no es válido
      return false;
    }

    return true;
  }
  //Validación para el checked de terminos y condiciones
  function validarTerminosYCondiciones() {
    limpiarErrores();
    var checkbox = document.getElementById('terminosYCondiciones');
    if (!checkbox.checked) {
      mostrarError('Terminos', 'Debe estar de acuerdo con los términos y condiciones.');
      return false;
    }
    return true;
  }
  //Validación para el formulario una vez esten todos los campos llenos
  function validarFormulario(event) {
    console.log('Botón presionado');
    if (
      validarNombre() &&
      validarApellido() &&
      validarCorreo() &&
      validarCelular(event) &&
      validarDireccion() &&
      validarSexo() &&
      validarHojaDeVida() &&
      validarTerminosYCondiciones()
    ) {
      alert('Formulario enviado correctamente.');
      limpiarCampos(); // Limpia los campos después de enviar el formulario
    }
  }
  //función para limpiar los campos
  function limpiarCampos() {
    document.getElementById('registroForm').reset();
    limpiarErrores();
  }