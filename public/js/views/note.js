var app = app || {};

app.KeyView = app.SvgBackboneView.extend({
  tagName: 'rect',

  initialize: function(model, x) {
    this.x = x;

    this.listenTo(this.model, 'change', this.render);
  },

  id: function() {
    return this.model.id;
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

    return this;
  },

  toggleSelect: function(e){
    this.model.set('selected', !this.model.get('selected'));
  }
});

app.KeyView.whiteKeyWidth = 23;
app.KeyView.blackKeyWidth = 13;

app.WhiteKeyView = app.KeyView.extend({
  
  className: 'white key',

  attributes: {
    y: 0,
    width: app.KeyView.whiteKeyWidth,
    height: 120,
  },
});

app.BlackKeyView = app.KeyView.extend({
  
  className: 'black key',

  attributes: {
    y: 0,
    width: app.KeyView.blackKeyWidth,
    height: 80,
  },
});