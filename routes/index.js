var express = require('express');
var api = require('./api');
var passport = require('../config/passport');

var router = express.Router();

router.use('/api', api);

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.render('index', {
            title: 'Express',
            message: 'Hi, ' + req.user.username + '.',
            user: req.user
        });
    } else {
        res.render('index', {
            title: 'Express',
            message: 'You are not Logged in.',
            user: false
        });
    }
});

router.get('/login', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else {
        res.render('login.ejs', {
            message: req.flash('loginMessage')
        });
    }
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/signup', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else {
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    }
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
