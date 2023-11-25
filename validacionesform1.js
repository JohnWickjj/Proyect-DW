//Autor: Jhon Jairo cueva Tumbaco
var form = document.getElementById("form1");
form.addEventListener('submit', validar);

function validar(event) {
    var resultado = true;
    // obtener los elementos a validar

    var txtNombres = document.getElementById("nombres");
    var txtCorreo = document.getElementById("correo");
    var txtTelefono = document.getElementById("telefono");
    var selectCiudad = document.getElementById("ciudad");
    var radiosSexo = document.getElementsByName("sexo");
    var checkboxesAyuda = document.getElementsByName("ayuda[]");
    var checkboxesTipoEvento = document.getElementsByName("tipo-evento[]");
    var txtFecha = document.getElementById("fecha");
    var txtComentario = document.getElementById("comentario");

    // expresiones regulares (RegEx)

    var correoReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var telefonoReg = /^[0-9]{10}$/;
    // llamada a funcion

    limpiarMensajes();

    if (txtNombres.value === '') {
        resultado = false;
        mensaje("Nombre es requerido", txtNombres);
    } else if (!/^[a-zA-Z ,.'-]{1,20}$/.test(txtNombres.value)) {
        resultado = false;
        mensaje("Nombre solo debe contener letras y tener máximo 20 caracteres", txtNombres);
    }

    if (txtCorreo.value === "") {
        resultado = false;
        mensaje("Correo electrónico es requerido", txtCorreo);
    } else if (!correoReg.test(txtCorreo.value)) {
        resultado = false;
        mensaje("Correo electrónico no es válido", txtCorreo);
    }

    if (txtTelefono.value === "") {
        resultado = false;
        mensaje("Teléfono es requerido", txtTelefono);
    } else if (!telefonoReg.test(txtTelefono.value)) {
        resultado = false;
        mensaje("Teléfono debe ser de 10 dígitos numéricos", txtTelefono);
    }

    if (selectCiudad.value === '0') {
        resultado = false;
        mensaje("Debe seleccionar una ciudad", selectCiudad);
    }

    var selSexo = false;
    for (var i = 0; i < radiosSexo.length; i++) {
        if (radiosSexo[i].checked) {
            selSexo = true;
            break;
        }
    }
    if (!selSexo) {
        resultado = false;
        mensaje("Debe seleccionar un género", radiosSexo[0]);
    }

    var selAyuda = false;
    for (var i = 0; i < checkboxesAyuda.length; i++) {
        if (checkboxesAyuda[i].checked) {
            selAyuda = true;
            break;
        }
    }
    if (!selAyuda) {
        resultado = false;
        mensaje("Debe seleccionar al menos una opción de ayuda", checkboxesAyuda[0]);
    }

    var selTipoEvento = false;
    for (var i = 0; i < checkboxesTipoEvento.length; i++) {
        if (checkboxesTipoEvento[i].checked) {
            selTipoEvento = true;
            break;
        }
    }
    if (!selTipoEvento) {
        resultado = false;
        mensaje("Debe seleccionar al menos un tipo de evento", checkboxesTipoEvento[0]);
    }

    if (txtFecha.value === "") {
        resultado = false;
        mensaje("Fecha es requerida", txtFecha);
    } else {
        var fechaSeleccionada = new Date(txtFecha.value);
        var fechaActual = new Date();

        if (fechaSeleccionada <= fechaActual) {
            resultado = false;
            mensaje("La fecha debe ser superior a la actual", txtFecha);
        }
    }

    if (txtComentario.value === "") {
        resultado = false;
        mensaje("Debe proporcionar información sobre el evento", txtComentario);
    }

    if (!resultado) {
        event.preventDefault();
    } else {
        mostrarAlertaPersonalizada();
    }
}

function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.textContent = cadenaMensaje;
    nodoMensaje.className = "mensajeError";
    nodoPadre.appendChild(nodoMensaje);
}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");// retorna un arreglo
    for (var i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }
}

//validacion radio button dependiendo del sexo a elegir

function mostrarAlertaPersonalizada() {
    var radiosSexo = document.getElementsByName("sexo");
    var nombre = document.getElementById("nombres").value;

    for (var i = 0; i < radiosSexo.length; i++) {
        if (radiosSexo[i].checked) {
            var saludo = (radiosSexo[i].value === "Femenino") ? "Señorita" : "Señor";
            alert(`${saludo} ${nombre}, se le acaba de enviar la cotización de su evento por medio del correo electrónico o su número de teléfono.`);
            break;
        }
    }
}

// Limpiar campos al presionar Cancelar
var btnCancelar = document.querySelector(".btn[type='reset']");
btnCancelar.addEventListener('click', function () {
    limpiarMensajes();
});
