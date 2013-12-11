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

    initialize: function(options){
      this.model = options.model;
    },

    setNotes: function (query) {
      if(query){
        var notes = query.split(',');
        this.model.set('notes', notes);
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
      pushState: false
    });
  };

  return {
    initialize: initialize
  };
});