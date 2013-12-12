define(function () {
  return {
    parseNotes: function (noteString) {
      var notes = noteString.split(',');

      var numbersRegExp = new RegExp('^[0-9,]*$');
      var lettersRegExp = new RegExp('^[A-Gb#,]*$');

      if (numbersRegExp.test(noteString)) {
        return notes;
      } else if (lettersRegExp.test(noteString)) {
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
          'Bb': 11,
          'B': 11
        };

        var parsedNotes = notes.map(function (note) {
          return noteNames[note];
        });

        // if next note less than previous add 12
        for (var i = 1; i < parsedNotes.length; i++) {
          if (parsedNotes[i] <= parsedNotes[i - 1]) {
            parsedNotes[i] = parsedNotes[i] + 12; // shift the note up an octave
          }
        }

        return parsedNotes;
      }
    }
  };
});