var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));   
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));                                                   

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});