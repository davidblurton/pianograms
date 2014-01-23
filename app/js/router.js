define(['jquery',
        'underscore',
        'backbone',
        'noteConverter',
       ], function ($, _, Backbone, NoteConverter) {

  var Router = Backbone.Router.extend({
    routes: {
      'chord/*notes': 'setNotes'
    },

    initialize: function (options) {
      this.model = options.model;
      this.listenTo(this.model, 'change', this.updateUrl);
    },

    updateUrl: function () {
      this.navigate('chord/' + this.model.url());
    },

    setNotes: function (notes) {
      if (notes) {
        var parsedNotes = NoteConverter.parseNotes(notes);
        this.model.set('notes', parsedNotes);
      }
    }
  });

  return Router;
});