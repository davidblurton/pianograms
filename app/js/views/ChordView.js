define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var ChordView = Backbone.View.extend({
    el: $('#chord-description'),

    initialize: function (options) {
      this.listenTo(this.model, 'change:notes change:key', this.render);
    },

    render: function (notes) {
      var majorExtentionNames = ['1', 'b9', '9', '#9', '3', '11', '#11', '5', 'b13', '13', '7', 'maj7'];
      var minorExtentionNames = ['1', 'b9', '9', '3', 'b11', '11', 'b5', '5', 'b13', '13', '7', 'maj7'];

      // if contains 1,3,5 append key
      // if contains 7,9,11,13 append respective number
      // else if contains maj7 append maj7
      // if contains b9, #9, #11, b13 append any

      var keyId = this.model.get('key');
      var keyOffset = 12 - keyId;

      var extensions = this.model.get('notes').map(function (note) {
        return majorExtentionNames[(note + keyOffset) % 12];
      });

      this.$el.text(extensions.join(' '));
      return this;
    },
  });

  return ChordView;
});