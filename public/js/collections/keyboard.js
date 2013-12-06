var app = app || {};

var Keyboard = Backbone.Collection.extend({
  
  model: app.Key,

  initialize: function() {
    for(var index = 0; index < 10; index++){
      this.addKey(index * 23);
    }
  },

  addKey: function(x){
    var model = new app.Key();  
    this.add(model);

    var view = new app.WhiteKeyView({model: model}, x);
    $('#keyboard').append( view.render().el );
  },
});

app.Keyboard = new Keyboard();

Backbone.sync = function(method, model) {
  console.log("I've been passed " + method + " with " + JSON.stringify(model));
};