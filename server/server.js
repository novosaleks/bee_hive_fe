const io = require('socket.io')(5000);

io.on('connection', (socket) => {
    const id = socket.handshake.query.id;
    console.log(id);
    socket.join(id);

    socket.on('send-message', ({ recipients, text }) => {
        recipients.forEach((recipient) => {
            const newRecipients = recipients.filter(
                (r) => r.id !== recipient.id
            );
            newRecipients.push(id);
            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipients,
                sender: id,
                text,
            });
        });
    });
    socket.on('disconnect', () => {
        console.log('disconnect');
    });
    socket.on('reconnect', () => {
        console.log('reconnect');
    });
});
