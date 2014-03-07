define(['jquery',
        'underscore',
        'backbone',
        'models/Chord',
        'views/KeyboardView',
        'views/LinkView'
       ], function ($, _, Backbone, Chord, KeyboardView, LinkView) {

  var AppView = Backbone.View.extend({
    el: $('#page'),

    render: function () {
      var keyboardView = new KeyboardView({
        model: this.model
      });

      this.$el.append(keyboardView.render().$el);

      var linkView = new LinkView({
        model: this.model
      });

      this.$el.append(linkView.render().$el);
    }
  });

  return AppView;
});