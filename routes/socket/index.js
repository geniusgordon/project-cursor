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

        socket.on('pokeother',function(data){
            var pokee = clients[data];
            var poker = socket.client.conn.id;
            console.log(data);
            console.log(poker + ' poke other');
            pokee.emit('pokeother',poker);
        });

        socket.on('mousemove', function(data) {
            io.emit('othermousemove', data);
        });
    });
}

