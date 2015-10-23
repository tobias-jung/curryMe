/* Authentifizierung mittels Node.js Authentication Passport
Author: Tobias Jung
*/

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var login = false;
var benutzer;


app.use(express.static('../'));


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(expressSession({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUnitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());

//Authentifizierung
passport.use(new passportLocal.Strategy(function (username, password, done) {
    //Hier würde der DB-Aufruf stehen!
    if (username === password) {
        done(null, {
            id: username,
            name: username,
        })
        setLogin(username);
    } else {
        done(null, null);

    }
}));


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    //Anfrage an DB
    done(null, {
        id: id,
        name: id
    });
});
/*
app.get('/', function (req, res) {

    res.render('login', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user

    });
});
*/

app.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');

});

app.get('/verify', function (req, res) {
    if (login == true) {
        res.send(benutzer);
    } else {
        res.send('notvalid');

    }
});

app.get('/logout', function (req, res) {
    req.logout();
    setLogin();
    res.redirect('/');
});


var port = process.env.PORT || 1337;


//Webserver node app.js in Arbeitsverzeichnis /js
app.listen(port, function () {
    console.log('http://localhost:' + port + '/');
});

//Setzt Login-Variable und speichert Username
function setLogin(username) {
    if (login == false) {
        login = true;
        benutzer = username;
    } else {
        login = false;
    }
}