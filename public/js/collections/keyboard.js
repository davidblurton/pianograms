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
    this.listenTo(app.Keyboard, 'add', this.render);
    
    this.createWhiteKeys();
    this.createBlackKeys();
  },

  createWhiteKeys: function(){
    for(var index = 0; index < 7; index++) {
      this.addKey(index * this.whiteKeyWidth, 'white');
    }
  },

  createBlackKeys: function(){
    for(var index = 0; index < 7; index++) {
      if(hasBlackKey(index)) {
        this.addKey((index + 1) * this.whiteKeyWidth - this.blackKeyWidth / 2, 'black');
      }
    }

    function hasBlackKey(index){
      var i = index % 7;
      return i === 0 || i === 1 || i === 3 || i == 4 || i == 5;
    }
  },

  addKey: function(x, color){
    var model = new app.Key({x: x, color: color});  
    app.Keyboard.add(model);
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