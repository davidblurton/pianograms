define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var KeyView = Backbone.View.extend({
    events: {
      'click': 'toggleSelect'
    },

    toggleSelect: function (event) {
      var currentClass = $(this.$el).attr('class');

      if (currentClass.indexOf('selected') === -1) {
        $(this.$el).attr('class', currentClass + ' selected');
      } else {
        $(this.$el).attr('class', currentClass.split(' selected')[0]);
      }

      var notes = $('.selected').map(function (index, note) {
        return parseInt(note.id);
      }).toArray();

      this.model.set('notes', notes);
    }
  });

  return KeyView;
});