var app = app || {};

app.KeyView = Backbone.View.extend({
  tagName: 'rect',

  className: 'white key',

  id: function(){
    return this.model.id;
  },

  template: _.template($('#key-template').html()),

  events: {
    'click': 'toggleSelect'
  },

  render: function() {

  	//this.$el.html(this.template(this.model.toJSON()));
  	return this;
  },

  toggleSelect: function(e){
    this.model.setSelected(e);
    this.$el.toggleClass('selected');
  }
});