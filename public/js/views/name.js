var app = app || {};

app.NameView = Backbone.View.extend({
  className: 'banana',

  template: _.template($('#name-template').html()),

  events: {
    'keypress': 'updateName'
  },

  render: function() {
  	this.$el.html(this.template(this.model.toJSON()));
  	return this;
  },

  updateName: function(e){
    console.log('update name');
  }
});