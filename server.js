String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var fs = require('fs');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// cache piano template
var pianoTemplate;
fs.readFile('app/images/piano.svg', function (err, data) {
  pianoTemplate = data.toString();
});

app.get('/', routes.index);

app.get('/diagram/:notes', function (req, res) {
  var notes = req.params.notes;
  var style = notes.split(',').map(function(note){
    return '[id="' + note + '"] ';
  }) + ' { fill: #FFF691; } ';

  var insertPosition = pianoTemplate.indexOf(']]>'); // end of css
  var piano = pianoTemplate.insert(insertPosition, style);

  res.set('Content-Type', 'image/svg+xml');
  res.send(piano);
});

//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});