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
      this.toggleClass(this.$el);

      var notes = $('.selected').map(function (index, note) {
        return parseInt(note.id);
      }).toArray();

      this.model.set('notes', notes);
    },

    toggleClass: function(element){
      var currentClass = element.attr('class');

      if (currentClass.indexOf('selected') === -1) {
        element.attr('class', currentClass + ' selected');
      } else {
        element.attr('class', currentClass.split(' selected')[0]);
      }
    }
  });

  return KeyView;
});