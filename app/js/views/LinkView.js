define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var LinkView = Backbone.View.extend({
    tagName: 'input',

    className: 'linkTextbox',

    attributes: {
      'readonly': ''
    },

    initialize: function (options) {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      if (this.model.get('notes')) {
        this.$el.val('<img src="' + this.model.diagramUrl() + '" />'); // use a template
      }

      return this;
    }
  });

  return LinkView;
});