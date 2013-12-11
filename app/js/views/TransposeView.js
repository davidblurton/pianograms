define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var TransposeView = Backbone.View.extend({
    el: $('#transpose'),

    events: {
      'click': 'transposeUp'
    },

    transposeUp: function () {
      this.transpose(1);
    },

    transposeDown: function () {
      this.transpose(-1);
    },

    transpose: function (amount) {
      var notes = this.model.get('notes');

      var transposed = notes.map(function (note) {
        return parseInt(note) + amount;
      });

      this.model.set('notes', transposed);
    }
  });

  return TransposeView;
});