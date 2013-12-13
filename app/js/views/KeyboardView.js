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
      var self = this;

      $('.selected').each(function (index, note) {
        this.removeClass($(note), 'selected');
      });

      var notes = this.model.get('notes');

      notes.forEach(function (note) {
        self.addClass($('#' + note), 'selected');
      });

      return this;
    },

    removeClass: function (element, className) {
      var currentClass = element.attr('class');
      element.attr('class', currentClass.split(className)[0]);
    },

    addClass: function (element, className) {
      var currentClass = element.attr('class');
      element.attr('class', currentClass + ' ' + className);
    },

    updateUrl: function () {
      this.router.navigate(this.model.url());
    }
  });

  return KeyboardView;
});