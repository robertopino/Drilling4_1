$(document).ready(() => {
    const nombre = $('#nombre')
    const apellido = $('#apellido')
    const email = $('#email')
    const motivo = $('#motivo')
    const formulario = $('#formulario')
    const mensaje =$('#msje')
    formulario.on('submit', (event) => {
        event.preventDefault()
        const seleccion = motivo.find('option:selected')
        alert(`DE: ${nombre.val()} ${apellido.val()} (${email.val()})\n ASUNTO: ${seleccion.text()}\n MENSAJE: ${mensaje.val()}`)
        console.log(seleccion);
    });
});

