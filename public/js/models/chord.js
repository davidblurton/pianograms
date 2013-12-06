var app = app || {};

app.Chord = Backbone.Model.extend({
  initialize: function(){
    this.on('change:name', function(){
        console.log('name changed.');
    });
  },

  defaults: {
    name: 'C7',
    notes: [0,1,2]
  },

  url: function(){
    return "";
  },

  setName: function(newName){
    this.set({ name: newName });
  }
});