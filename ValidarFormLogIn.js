
            
            
            /*VALIDAR FECHA*/
            function validarFecha() {
                var seleccionFecha = document.getElementsByName("fecha")[0];
                var fechaActual = new Date();
                var fechaSeleccionada = new Date(seleccionFecha.value);

                limpiarAlertas(seleccionFecha);
                if (seleccionFecha.value === "") {
                    alerta("Seleccione la fecha", seleccionFecha);
                    return false;
                }else if(fechaSeleccionada > fechaActual) {
                    alerta("Seleccione una fecha actual", seleccionFecha);
                    return false;
                }
                return true;
            }

            /*VALIDAR CAJA DE TEXTO NOMBRE*/
            function validartxtNombre() {
                var txtNombre = document.getElementById("nombres");
                var letra = /^[A-Za-z\s]+$/;

                limpiarAlertas(txtNombre);
                if (txtNombre.value === '') {
                    alerta("Nombre es requerido", txtNombre);
                    return false;
                } else if (!letra.test(txtNombre.value)) {
                    alerta("Nombre solo debe tener letras y espacios", txtNombre);
                    return false;
                }
                return true;
            }

            /*VALIDAR CAJA DE TEXTO USUARIO*/
            function validartxtUsuario() {
                var txtUsuario = document.getElementById("usuario");

                limpiarAlertas(txtUsuario);
                if (txtUsuario.value === '') {
                    alerta("Usuario es requerido", txtUsuario);
                    return false;
                }else if (!/[A-Z]/.test(txtUsuario.value)) {
                    alerta("El usuario debe incluir al menos una letra mayúscula", txtUsuario);
                    return false;
                }
                return true;
            }

            /*VALIDAR CAJA DE TEXTO CONTRASEÑA*/
            function validartxtContrasena() {
                var txtContrasena = document.getElementById("contrasena");

                limpiarAlertas(txtContrasena); 
                if (txtContrasena.value === '') {
                    alerta("Se requiere digitar su contraseña", txtContrasena);
                    return false;
                }else if (txtContrasena.value.length >= 15) {
                    alerta("Su contraseña no es valida", txtContrasena);
                    return false;
                }
            return true;
            }

            /*VALIDAR SELECT DE ROLES*/
            function validarSelect() {
                var selectRol = document.getElementById("rol");

                limpiarAlertas(selectRol); 
                if (selectRol.value === null||selectRol.value === '0') {
                    alerta("Debe seleccionar un rol de usuario", selectRol);
                    return false;
                }
            return true;
            }

            /*VALIDAR CHECKLIST TERMINOS*/
            function validarChecklist() {
                var chbxTerminos = document.getElementById("chbxTerminos");

                limpiarAlertas(chbxTerminos);
                if (!chbxTerminos.checked) {
                    alerta("Debe aceptar los terminos y condiciones para acceder", chbxTerminos);
                    return false;
                }
            return true;
            }
            
            /*AGREGAR NODO DE MENSAJE DE ERROR*/
            function alerta(mensaje, elemento) {
                elemento.focus();
                var nodoPadre = elemento.parentNode;
                var nodoMensaje = document.createElement("span");
                nodoMensaje.textContent = mensaje;
                nodoMensaje.setAttribute("class", "error");
                nodoMensaje.style.color = "red";
                nodoPadre.appendChild(nodoMensaje);
            }

            /*LIMPIAR EL FORMULARIO DE LAS ALERTAS*/
            function limpiarAlertas(elemento) {
                var recomendaciones = elemento.parentNode.getElementsByClassName("error");
                for (var i = 0; i < recomendaciones.length; i++) {
                    recomendaciones[i].remove();
                }
            }

            /*VALIDACION*/
            function Validacion(event) {
                var nombreValido = validartxtNombre();
                var usuarioValido = validartxtUsuario();
                var contrasenaValida = validartxtContrasena();
                var seleccionvalido = validarSelect();
                var checkvalido = validarChecklist();
                var fechavalida = validarFecha();

                if (nombreValido && usuarioValido && contrasenaValida &&
                    seleccionvalido && checkvalido && fechavalida) {
                    alert('Ha iniciado sesión con éxito');
                    limpiarAlertas();
                }
            }