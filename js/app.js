var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var login = false;


app.use(express.static('../'));

app.set('view engine', 'ejs');

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

passport.use(new passportLocal.Strategy(function (username, password, done) {
    //Hier würde der DB-Aufruf stehen!
    if (username === password) {
        done(null, {
            id: username,
            name: username,
            login: true
        });
    } else {
        done(null, null);
        login: false
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

app.get('/', function (req, res) {

    res.render('login', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user

    });
});

app.post('/', passport.authenticate('local'), function (req, res) {
    res.redirect('/');

});

app.get('/verify', function (req, res) {
    res.send('valid');
});

app.get('/', function (req, res) {
    req.logout();
    res.redirect('/');
});


var port = process.env.PORT || 1337;


app.listen(port, function () {
    console.log('http://localhost:' + port + '/');
});