define([
  'jquery',
  'underscore',
  'backbone',
  'chordNamer'
], function ($, _, Backbone, chordNamer) {

  var ChordView = Backbone.View.extend({
    el: $('#chord-description'),

    initialize: function (options) {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      var notes = this.model.get('notes');
      var key = this.model.get('key');

      var description = chordNamer.describeChord(notes, key, true);
      this.$el.text(description);
      return this;
    },

    listExtensions: function () {
      var majorExtentionNames = ['1', 'b9', '9', '#9', '3', '11', '#11', '5', 'b13', '13', '7', 'maj7'];
      var minorExtentionNames = ['1', 'b9', '9', '3', 'b11', '11', 'b5', '5', 'b13', '13', '7', 'maj7'];

      var keyId = this.model.get('key');
      var keyOffset = 12 - keyId;

      var extensions = this.model.get('notes').map(function (note) {
        return majorExtentionNames[(note + keyOffset) % 12];
      });
    }
  });

  return ChordView;
});