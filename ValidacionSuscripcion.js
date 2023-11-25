    function validarTelefono(telefono) {
        // Eliminar cualquier espacio en blanco
        telefono = telefono.replace(/\s/g, '');

        // Verificar si el teléfono contiene solo dígitos y tiene exactamente 10 dígitos
        return /^\d{10}$/.test(telefono);
    }
    
    function validarFormulario(event) {
        event.preventDefault(); // Evita el envío automático del formulario

        var nombre = document.getElementById('nombres').value;
        var correo = document.getElementById('correo').value;
        var telefono = document.getElementById('telefonos').value;
        var intereses = document.getElementById('intereses').value;
        var comentarios = document.getElementById('comentarios').value;
        var suscripcion = document.getElementById('suscripcion').checked;

        // Validación para el campo de nombre
        if (nombre === "") {
            alert("Por favor, ingrese su nombres.");
            return false;
        }

        // Validación para el campo de correo electrónico
        if (correo === "") {
            alert("Por favor, ingrese su correo electrónico.");
            return false;
        }

        // Validación para el campo de teléfono (opcional)
        if (telefono === "" && telefono.length !== 10) {
            alert("Por favor, ingrese un número de teléfono válido.");
            return false;
        }

        // Validación para el campo de intereses
        if (intereses === "") {
            alert("Por favor, seleccione al menos un interés.");
            return false;
        }

        // Validación para el campo de comentarios (opcional)
        if (comentarios === "" ) {
            alert("Por favor, ingrese comentarios con al menos 10 caracteres.");
            return false;
        }

        // Validación para el checkbox de suscripción
        if (!suscripcion) {
            alert("Por favor, acepte la suscripción.");
            return false;
        }

        window.location.href = "Blog.html";
         return true;

        // Todas las validaciones pasaron, ahora puedes redirigir o realizar alguna acción
        // En este ejemplo, simplemente mostrar un mensaje de éxito
        alert("Formulario validado correctamente. Puedes realizar la redirección aquí.");

        // Puedes agregar código adicional aquí para redirigir al usuario o realizar otras acciones

        return true;
    }

