var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});