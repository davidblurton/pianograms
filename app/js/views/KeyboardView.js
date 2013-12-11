define([
  'jquery',
  'underscore',
  'backbone',
  'views/KeyView',
  'router'
], function ($, _, Backbone, KeyView, Router) {

  var KeyboardView = Backbone.View.extend({
    el: $('#keyboard'),

    initialize: function (options) {
      var self = this;
      this.router = options.router;

      $('#keyboard > .key').each(function (note) {
        new KeyView({
          el: $('#' + note)[0],
          model: self.model
        });
      });

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change', this.updateUrl);
    },

    render: function () {
      $('.selected').each(function (index, note) {
        $(note).removeClass('selected');
      });

      var notes = this.model.get('notes');

      notes.forEach(function (note) {
        $('#' + note).addClass('selected');
      });

      return this;
    },

    updateUrl: function () {
      this.router.navigate(this.model.url());
    }
  });

  return KeyboardView;
});