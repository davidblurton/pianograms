var app = app || {};

app.KeyView = app.SvgBackboneView.extend({
  tagName: 'rect',

  className: 'white key',

  id: function(){
    return this.model.id;
  },

  attributes: {
    x: 0,
    y: 0,
    width: 23,
    height: 120,
  },

  events: {
    'click': 'toggleSelect'
  },

  render: function() {
    //this.$el.attr('width', 13);
  	//this.$el.html(this.template(this.model.toJSON()));
  	return this;
  },

  toggleSelect: function(e){
    this.model.setSelected();
    this.$el.toggleClass('selected');
  }
});