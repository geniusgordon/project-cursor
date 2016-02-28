module.exports = function(io) {
    var clients = {};
    io.on('connection', function(socket) {
        console.log('socket client connected');

        // Save socket for each socket id , in order to poke them in future
        clients[socket.client.conn.id] = socket;

        socket.on('disconnect', function() {
            var data = {id: socket.client.conn.id};
            io.emit('othermouseleave',data);
            console.log('socket client disconnected');
        });

        socket.on('poke',function(data){
            var pokee = clients[data.id];
            var poker = socket.client.conn.id;
            pokee.emit('otherpoke', {id: poker});
        });

        socket.on('mousemove', function(data) {
            io.emit('othermousemove', data);
        });
    });
}

