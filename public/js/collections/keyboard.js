var app = app || {};

var Keyboard = Backbone.Collection.extend({
  
  model: app.Key,
  whiteKeyWidth: app.KeyView.whiteKeyWidth,
  blackKeyWidth: app.KeyView.blackKeyWidth,

  initialize: function() {
    this.createWhiteKeys();
    this.createBlackKeys();
  },

  createWhiteKeys: function(){
    for(var index = 0; index < 7; index++) {
      this.addKey(index * this.whiteKeyWidth);
    }
  },

  createBlackKeys: function(){
    for(var index = 0; index < 7; index++) {
      if(hasBlackKey(index)) {
        this.addBlackKey((index + 1) * this.whiteKeyWidth - this.blackKeyWidth / 2);
      }
    }

    function hasBlackKey(index){
      var i = index % 7;
      return i === 0 || i === 1 || i === 3 || i == 4 || i == 5;
    }
  },

  addKey: function(x){
    var model = new app.Key();  
    this.add(model);

    var view = new app.WhiteKeyView({model: model}, x);
    $('#keyboard').append( view.render().el );
  },

  addBlackKey: function(x){
    var model = new app.Key();  
    this.add(model);

    var view = new app.BlackKeyView({model: model}, x);
    $('#keyboard').append( view.render().el );
  },
});

app.Keyboard = new Keyboard();

Backbone.sync = function(method, model) {
  console.log("I've been passed " + method + " with " + JSON.stringify(model));
};