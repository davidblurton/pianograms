var app = app || {};

app.AppView = Backbone.View.extend({
	el: $('#keyboard'),

	initialize: function() {
		console.log('create the keyboard');
		this.addOne({id: 0});
		//this.listenTo(app.Keyboard, 'add', this.addOne);
	},

	addOne: function(key){
		var view = new app.KeyView({model: key});
		$('#keyboard').append( view.render().el );
	},
});

$(function() {
	new app.AppView();
});