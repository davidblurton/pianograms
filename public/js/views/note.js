var app = app || {};

app.KeyView = app.SvgBackboneView.extend({
  tagName: 'rect',

  className: 'white key',

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

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
  	return this;
  },

  toggleSelect: function(e){
    this.model.set('selected', !this.model.selected);
    console.log(this.model);
  }
});