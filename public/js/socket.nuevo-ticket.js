// * =====================
// *  Establecer conexión
// * =====================
const socket = io();

const label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado con el servidor.');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor.');
});

socket.on('estadoActual', (resp) => {
    label.text(resp.actual)
});

$('button').on('click', () => {
    
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);
    });

});

