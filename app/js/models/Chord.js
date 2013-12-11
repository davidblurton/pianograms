define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var Chord = Backbone.Model.extend({
    defaults: {
      key: 0, // C
      major: true,
      notes: []
    },

    url: function () {
      return 'chord/' + this.get('notes').join();
    }
  });

  return Chord;
});