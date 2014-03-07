require('newrelic');
/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var diagram = require('./routes/diagram');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

app.get('/', routes.index);
app.get('/diagram/:notes?', diagram.render);

app.listen(app.get('port'));
