define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var Chord = Backbone.Model.extend({
    defaults: {
      key: 0, // C
      major: true,
      useFlats: true,
      notes: [12, 16, 19]
    },

    url: function () {
      return this.get('notes').join();
    },

    diagramUrl: function () {
      return 'http://pianogr.am/diagram/' + this.url();
    }
  });

  return Chord;
});