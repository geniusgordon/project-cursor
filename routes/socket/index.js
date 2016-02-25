module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log('socket client connected');

        socket.on('disconnect', function() {
            
            var data = socket.id; 
            io.emit('othermouseleave',data);
            console.log('socket client disconnected');
        });

        socket.on('mousemove', function(data) {
          io.emit('othermousemove', data);
        });
    });
}

