if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  var numbersRegExp = new RegExp('^[0-9,]*$');
  var lettersRegExp = new RegExp('^[A-Gb#,]*$');

  return {
    parseNotes: function (noteString) {
      if (this.validNumbers(noteString)) {
        return this.parseNumbersToNotes(noteString);
      }

      if (this.validLetters(noteString)) {
        return this.parseLettersToNotes(noteString);
      }

      return [];
    },

    validNumbers: function (noteString) {
      return numbersRegExp.test(noteString);
    },

    validLetters: function (noteString) {
      return lettersRegExp.test(noteString);
    },

    splitNoteString: function (noteString) {
      return noteString.split(',');
    },

    parseNumbersToNotes: function (noteString) {
      return this.splitNoteString(noteString);
    },

    parseNumbersToLetters: function (notes) {
      var noteNames = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']; // support sharps

      return notes.map(function(note) {
        return noteNames[note % 12];
      });
    },

    parseLettersToNotes: function (noteString) {
      var letters = this.splitNoteString(noteString);

      var noteNames = {
        'C': 0,
        'C#': 1,
        'Db': 1,
        'D': 2,
        'D#': 3,
        'Eb': 3,
        'E': 4,
        'F': 5,
        'F#': 6,
        'Gb': 6,
        'G': 7,
        'G#': 8,
        'Ab': 8,
        'A': 9,
        'A#': 10,
        'Bb': 10,
        'B': 11
      };

      var parsedNotes = letters.map(function (note) {
        return noteNames[note];
      });

      var orderedNotes = [];
      var current = 0;

      for (var octave = 1; current < parsedNotes.length; octave++) {
        for (var i = 0; i < 12; i++) {
          if (parsedNotes[current] == i) {
            orderedNotes.push(parsedNotes[current] * octave);
            current++;
          }
        }
      }

      return orderedNotes;
    }
  };
});