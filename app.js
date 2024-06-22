const botonFormulario = document.getElementById("boton-enviar");
const modalConfirmacion = document.getElementById('modal-contacto');
const bootstrapModal = new bootstrap.Modal(modalConfirmacion);
const mensajeModalContacto = document.getElementById("mensaje-modal-contacto");
const botonCerrarModal = document.getElementById("boton-cerrar-modal-confirmacion");
const formularioContacto = document.getElementById("form-contacto");


formularioContacto.addEventListener("submit", event => {
    event.preventDefault();
    mensajeModalContacto.textContent = "Gracias por su Mensaje. Le responderemos a la brevedad.";
    bootstrapModal.show();
    formularioContacto.reset();
})
