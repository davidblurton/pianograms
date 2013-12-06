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
  	if(this.model.get('selected')){
      this.$el.addClass('selected');
    } else {
      this.$el.removeClass('selected');
    }
    
    return this;
  },

  toggleSelect: function(e){
    this.model.set('selected', !this.model.get('selected'));
  }
});