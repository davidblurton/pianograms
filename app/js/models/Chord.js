define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var Chord = Backbone.Model.extend({
    defaults: {
      key: 0, // C
      major: true,
      useFlats: true
    },

    url: function () {
      return this.get('notes').join();
    },

    diagramUrl: function () {
      var root = location.protocol + '//' + location.host;
      return root + '/diagram/' + this.url();
    }
  });

  return Chord;
});