var app = app || {};

var Keyboard = Backbone.Collection.extend({
  model: app.Key,
});

app.Keyboard = new Keyboard();

app.KeyboardView = Backbone.View.extend({
  el: $('#keyboard'),

  whiteKeyWidth: app.KeyView.whiteKeyWidth,
  blackKeyWidth: app.KeyView.blackKeyWidth,

  initialize: function() {
    this.listenTo(app.Keyboard, 'reset', this.render);
    
    var keys = [];

    this.createWhiteKeys(keys);
    this.createBlackKeys(keys);

    app.Keyboard.reset(keys);
  },

  createWhiteKeys: function(keys){
    for(var index = 0; index < 7; index++) {
      var model = new app.Key({x: index * this.whiteKeyWidth, color: 'white'});
      keys.push(model);
    }
  },

  createBlackKeys: function(keys){
    for(var index = 0; index < 7; index++) {
      if(hasBlackKey(index)) {
        var model = new app.Key({x: (index + 1) * this.whiteKeyWidth - this.blackKeyWidth / 2, color: 'black'});
        keys.push(model);
      }
    }

    function hasBlackKey(index){
      var i = index % 7;
      return i === 0 || i === 1 || i === 3 || i == 4 || i == 5;
    }
  },

  render: function() {
    app.Keyboard.where({color: 'white'}).forEach(function(model) {
      var view = new app.WhiteKeyView({model: model}, model.get('x'));
      $('#keyboard').append( view.render().el );
    });

    app.Keyboard.where({color: 'black'}).forEach(function(model) {
      var view = new app.BlackKeyView({model: model}, model.get('x'));
      $('#keyboard').append( view.render().el );
    });

    return this;
  },
});

Backbone.sync = function(method, model) {
  console.log("I've been passed " + method + " with " + JSON.stringify(model));
};