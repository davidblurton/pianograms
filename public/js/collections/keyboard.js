var app = app || {};

var Keyboard = Backbone.Collection.extend({
	model: app.Key,
});

app.Keyboard = new Keyboard();

var id_counter = 1;
Backbone.sync = function(method, model) {
  console.log("I've been passed " + method + " with " + JSON.stringify(model));
  if(method === 'create'){ model.set('id', id_counter++); }
};