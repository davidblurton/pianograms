var app = app || {};

var Keyboard = Backbone.Collection.extend({
	model: app.Key,
});

app.Keyboard = new Keyboard();


Backbone.sync = function(method, model) {
  console.log("I've been passed " + method + " with " + JSON.stringify(model));
};