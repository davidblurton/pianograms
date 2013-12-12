define(['jquery',
        'underscore',
        'backbone',
        'models/Chord',
        'views/KeyboardView',
        'views/ChordView',
        'views/KeyPickerView',
        'views/TransposeView'
       ], function ($, _, Backbone, Chord, KeyboardView, ChordView, KeyPickerView, TransposeView) {

  var Router = Backbone.Router.extend({
    routes: {
      'chord/*query': 'setNotes'
    },

    initialize: function (options) {
      this.model = options.model;
    },

    setNotes: function (query) {
      if (query) {
        var notes = query.split(',');

        if (_.all(notes, function (note) {
          return _.isNumber(note);
        })) {
          this.model.set('notes', notes);
        } else {
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

          this.model.set('notes', parsedNotes);
          // parse note names into numbers
        }
      }
    }
  });

  var initialize = function () {
    var chord = new Chord();

    var router = new Router({
      model: chord
    });

    new KeyboardView({
      model: chord,
      router: router
    });

    new ChordView({
      model: chord
    });

    new KeyPickerView({
      model: chord
    });

    new TransposeView({
      model: chord
    });

    Backbone.history.start({
      pushState: true
    });
  };

  return {
    initialize: initialize
  };
});