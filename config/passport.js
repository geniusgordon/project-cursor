var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local-signup', new LocalStrategy({
    passReqToCallback: true // allows us to pass back the entire request to the callback
}, function(req, username, password, done) {
    process.nextTick(function() {
        User.findOne({
            'username': username
        }, function(err, user) {
            if (err)
                return done(err);

            if (user) {
                return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
            } else {
                var newUser = new User();

                newUser.username = username;
                newUser.password = newUser.generateHash(password);

                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        });
    });
}));

passport.use('local-login', new LocalStrategy({
    passReqToCallback: true
}, function(req, username, password, done) {
    User.findOne({
        'username': username
    }, function(err, user) {
        if (err)
            return done(err);

        if (!user)
            return done(null, false, req.flash('loginMessage', 'No user found.'));

        if (!user.validPassword(password))
            return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

        return done(null, user);
    });
}));

module.exports = passport;

