var express = require('express');

var app = express();

app.use(express.static('../'));


var port = process.env.PORT || 1337;


app.listen(port, function () {
    console.log('http://localhost:' + port + '/');
});