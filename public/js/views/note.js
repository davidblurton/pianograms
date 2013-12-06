var app = app || {};

app.KeyView = app.SvgBackboneView.extend({
  tagName: 'rect',

  className: 'white key',

  initialize: function(model, x, y){
    this.x = x;
    this.y = y;

    this.listenTo(this.model, 'change', this.render);
  },

  id: function(){
    return this.model.id;
  },

  attributes: {
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

    this.$el.attr('x', this.x);
    this.$el.attr('y', this.y);

    return this;
  },

  toggleSelect: function(e){
    this.model.set('selected', !this.model.get('selected'));
  }
});