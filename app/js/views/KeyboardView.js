define([
  'jquery',
  'jquerySvgDom',
  'underscore',
  'backbone',
  'views/KeyView',
  'router',
  'text!/../images/piano.svg'
], function ($, svgDom, _, Backbone, KeyView, Router, KeyboardTemplate) {

  var KeyboardView = Backbone.View.extend({
    initialize: function (options) {
      this.listenTo(this.model, 'change', this.updateNotes);
    },

    events: {
      'click': 'toggleSelect'
    },

    render: function () {
      this.$el.html(KeyboardTemplate);
      return this;
    },

    toggleSelect: function (e) {
      $(e.target).toggleClass('selected');
      this.updateNotes();
    },

    updateNotes: function(){
      var notes = $('svg .selected').map(function(index, elem) {
        return parseInt($(elem).attr('id'));
      }).toArray();

      this.model.set('notes', notes);
    }
  });

  return KeyboardView;
});