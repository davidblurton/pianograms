
/*
 * Generate diagram.
 */

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

var noteConverter = require('../app/js/modules/NoteConverter');

exports.render = function (req, res) {
  var query = req.params.notes;
  var notes = noteConverter.parseNotes(query);

  var style = notes.map(function(note){
    return '[id="' + note + '"] ';
  }) + ' { fill: #FFF691; } ';

  var insertPosition = pianoTemplate.indexOf(']]>'); // end of css
  var piano = pianoTemplate.insert(insertPosition, style);

  res.set('Content-Type', 'image/svg+xml');
  res.send(piano);
};