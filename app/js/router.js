define(['jquery',
        'underscore',
        'backbone',
        'noteConverter',
       ], function ($, _, Backbone, noteConverter) {

  var Router = Backbone.Router.extend({
    routes: {
      'chord/*query': 'setNotes'
    },

    initialize: function (options) {
      this.model = options.model;
    },

    setNotes: function (query) {
      if (query) {
        var parsedNotes = noteConverter.parseNotes(query);
        this.model.set('notes', parsedNotes);
      }
    }
  });

  return Router;
});