module.exports = function(store) {
    var io = {};
    var _io = require('socket.io')();
    io.io = require('./config/socket')(_io, store);
    io.listen = function(server) {
        io.io.listen(server);
    };
    io.on = function(e, fn) {
        io.io.on(e, fn);
    };

    return io;
};

