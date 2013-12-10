/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var fs = require('fs'),
    xml2js = require('xml2js');

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
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/diagram/:notes', function (req, res) {

    var parser = new xml2js.Parser();
    fs.readFile('public/images/piano.svg', function (err, data) {
        parser.parseString(data, function (err, result) {
            var notes = req.params.notes.split(',').map(function (note) {
                return parseInt(note);
            });


            for (var elem in result.svg.rect) {
                for (var note in notes) {
                    var rect = result.svg.rect[elem].$;

                    if (rect.id == notes[note]) {
                        rect.class += ' selected';
                    }
                }
            }

            var builder = new xml2js.Builder();
            var xml = builder.buildObject(result);

            res.set('Content-Type', 'image/svg+xml');
            res.send(xml);
        });
    });
});

//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});