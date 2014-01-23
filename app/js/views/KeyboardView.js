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
      'click': 'toggleNote'
    },

    render: function (model) {
      this.$el.html(KeyboardTemplate);
      return this;
    },

    updateNotes: function () {
      _.each(this.model.get('notes'), function (note) {
        $('svg #' + note).addClass('selected');
      });
    },

    toggleNote: function (e) {
      $(e.target).toggleClass('selected');

      var notes = $('svg .selected').map(function (index, elem) {
        return $(elem).attr('id');
      }).toArray();

      this.model.set('notes', notes);
    }
  });

  return KeyboardView;
});