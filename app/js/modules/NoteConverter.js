if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
  return {
    parseNotes: function (noteString) {
      var notes = noteString.split(',');

      var numbersRegExp = new RegExp('^[0-9,]*$');
      var lettersRegExp = new RegExp('^[A-Gb#,]*$');

      if (numbersRegExp.test(noteString)) {
        return notes;
      } else if (lettersRegExp.test(noteString)) {
        return this.parseLettersToNotes(notes);
      } else {
        return [];
      }
    },

    parseLettersToNotes: function (letters) {
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

      while (!this.notesAreInOrder(parsedNotes)) {
        this.orderNotes(parsedNotes);
      }

      return parsedNotes;
    },

    notesAreInOrder: function (notes) {
      for (var i = 1; i < notes.length; i++) {
        if (notes[i] <= notes[i - 1]) {
          return false;
        }
      }

      return true;
    },

    orderNotes: function (notes) {
      for (var i = 1; i < notes.length; i++) {
        if (notes[i] <= notes[i - 1]) {
          notes[i] = notes[i] + 12; // shift the note up an octave
        }
      }
    }
  };
});