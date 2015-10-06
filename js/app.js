var express = require('express');

var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:1337/auth/facebook/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        User.findOrCreate(..., function (err, user) {
            if (err) {
                return done(err);
            }
            done(null, user);
        });
    }
));

var app = express();

app.get('/', passport.authenticate('facebook'));

app.get('/login',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

app.use(express.static('../'));




var port = process.env.PORT || 1337;


app.listen(port, function () {
    console.log('http://localhost:' + port + '/');
});