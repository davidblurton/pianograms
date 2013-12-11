define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var TransposeView = Backbone.View.extend({
    el: $('#transpose'),

    events: {
      'click .up': 'transposeUp',
      'click .down': 'transposeDown'
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

      var key = this.model.get('key');
      console.log(key);
      var newKey = (key + 12 + amount) % 12; // handle negative numbers

      console.log(newKey);
      this.model.set('key', newKey);
    }
  });

  return TransposeView;
});