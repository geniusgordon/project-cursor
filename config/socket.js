module.exports = function(io, store) {
    var cookieParser = require('cookie-parser');
    var passportSocketIo = require('passport.socketio');

    io.use(passportSocketIo.authorize({
        cookieParser: cookieParser,
        secret: '{name}-secret',
        store: store,
        success: onAuthorizeSuccess,
        fail: onAuthorizeFail,
    }));

    function onAuthorizeSuccess(data, accept) {
        accept();
    }

    function onAuthorizeFail(data, message, error, accept) {
        if (error)
            throw new Error(message);
        console.log('failed connection to socket.io:', message);

        if (error)
            accept(new Error(message));
    }
    return io;
};

