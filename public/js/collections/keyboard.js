var app = app || {};

var Keyboard = Backbone.Collection.extend({
  model: app.Key,
});

app.Keyboard = new Keyboard();

app.KeyboardView = Backbone.View.extend({
  el: $('#keyboard'),

  initialize: function() {
    this.listenTo(app.Keyboard, 'reset', this.render);

    app.Keyboard.reset(this.createKeys());
  },

  createKeys: function(){
    var whiteKeyWidth = app.KeyView.whiteKeyWidth;
    var blackKeyWidth = app.KeyView.blackKeyWidth;

    var i = 0, keys = [], octaves = 3;

    for(var index = 0; index < 7 * octaves; index++) {
      i = keys.push(createWhiteKey(index, this.whiteKeyWidth));

      if(hasBlackKey(index)) {
        i = keys.push(createBlackKey(index, this.blackKeyWidth));
      }
    }

    return keys;

    function createWhiteKey(index) {
      return createKey(index * whiteKeyWidth, 'white');
    }

    function createBlackKey(index) {
      return createKey((index + 1) * whiteKeyWidth - blackKeyWidth / 2, 'black');
    }

    function createKey(x, color) {
      return new app.Key({x: x, color: color, id: i});
    }

    function hasBlackKey(index){
      var i = index % 7;
      return i !== 2 && i !== 6;
    }
  },

  render: function() {
    app.Keyboard.where({color: 'white'}).forEach(function(model) {
      var view = new app.WhiteKeyView({model: model}, model.get('x'));
      this.append( view.render().el );
    }, this.$el);

    app.Keyboard.where({color: 'black'}).forEach(function(model) {
      var view = new app.BlackKeyView({model: model}, model.get('x'));
      this.append( view.render().el );
    }, this.$el);

    this.$el.width(app.Keyboard.where({color: 'white'}).length * app.KeyView.whiteKeyWidth)

    return this;
  },
});