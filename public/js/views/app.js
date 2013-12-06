var app = app || {};

app.AppView = Backbone.View.extend({
	el: $('#diagram'),

	initialize: function() {
		this.listenTo(app.Chords, 'add', this.addOne);
	},

	addOne: function(chord){
		var view = new app.NameView({model: chord});
		$('#diagram').append( view.render().el );
	}
});

$(function() {
	new app.AppView();
});