var app = app || {};

app.AppView = Backbone.View.extend({
  el: $('#keyboard'),

  initialize: function() {
    this.addOne(new app.Key());
  },

  //AppView should create the collection, which should create all the keys

  addOne: function(key){
    var view = new app.KeyView({model: key});
    $('#keyboard').append( view.render().el );
  }
});

$(function() {
  new app.AppView();
});