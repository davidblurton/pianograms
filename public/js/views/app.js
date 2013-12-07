var app = app || {};

app.AppView = Backbone.View.extend({
  el: $('#app'),
});

$(function() {
  new app.KeyboardView();
  new app.AppView();
});