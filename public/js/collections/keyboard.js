var app = app || {};

var Keyboard = Backbone.Collection.extend({
  
  model: app.Key,

  initialize: function() {
    for(var index = 0; index < 10; index++){
      this.addOne(index * 23);
    }
  },

  addOne: function(x){
    var view = new app.KeyView({model: new app.Key()}, x, 0);
    $('#keyboard').append( view.render().el );
  },
});

app.Keyboard = new Keyboard();

Backbone.sync = function(method, model) {
  console.log("I've been passed " + method + " with " + JSON.stringify(model));
};