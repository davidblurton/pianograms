define([
  'jquery',
  'underscore',
  'backbone',
  'text!/templates/linkTemplate.html'
], function ($, _, Backbone, linkTemplate) {

  var LinkView = Backbone.View.extend({
    initialize: function (options) {
      this.listenTo(this.model, 'change', this.render);
    },

    template: _.template(linkTemplate),

    render: function () {
      if (this.model.get('notes')) {
        var template = this.template({
          model: this.model
        });
        this.$el.html(template);
      }

      return this;
    }
  });

  return LinkView;
});