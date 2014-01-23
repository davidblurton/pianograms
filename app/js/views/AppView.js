define(['jquery',
        'underscore',
        'backbone',
        'noteConverter',
        'router',
        'models/Chord',
        'views/KeyboardView'
       ], function ($, _, Backbone, noteConverter, Router, Chord, KeyboardView) {

  var AppView = Backbone.View.extend({
    el: $('#page'),

    render: function () {
      var keyboardView = new KeyboardView({
        model: this.model
      });

      this.$el.append(keyboardView.render().$el);
    }
  });

  return AppView;
});