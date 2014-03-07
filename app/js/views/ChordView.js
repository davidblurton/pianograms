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
    }
  });

  return ChordView;
});