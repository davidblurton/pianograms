define([
  'jquery',
  'underscore',
  'backbone',
  'noteConverter'
], function ($, _, Backbone, noteConverter) {

  var Chord = Backbone.Model.extend({
    defaults: {
      key: 0, // C
      major: true,
      useFlats: true
    },

    url: function () {
      return noteConverter.parseNumbersToLetters(this.get('notes'));
    },

    diagramUrl: function () {
      var root = location.protocol + '//' + location.host;
      return root + '/diagram/' + this.url();
    }
  });

  return Chord;
});