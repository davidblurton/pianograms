define(['jquery',
        'underscore',
        'backbone',
        'noteConverter',
        'router',
        'models/Chord',
        'views/KeyboardView',
        'views/ChordView',
        'views/KeyPickerView',
        'views/TransposeView',
        'text!/../images/piano.svg'
       ], function ($, _, Backbone, noteConverter, Router, Chord, KeyboardView, ChordView, KeyPickerView, TransposeView, pianoTemplate) {

  var AppView = Backbone.View.extend({
    el: $('#page'),

    initialize: function (options) {
      this.chord = new Chord();

      new ChordView({
        model: this.chord
      });

      new KeyPickerView({
        model: this.chord
      });

      new TransposeView({
        model: this.chord
      });
    },

    render: function () {
      this.$el.append(pianoTemplate);

      var router = new Router({
        model: this.chord
      });

      new KeyboardView({
        model: this.chord,
        router: router
      });
    }
  });

  return AppView;
});