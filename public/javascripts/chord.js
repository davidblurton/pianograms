var Chord = Backbone.Model.extend({
  initialize: function(){
    console.log('initialize model');

    this.on('change:name', function(){
        console.log('name changed.');
    });
  },

  defaults: function(){
    name: 'C7',
    notes: [0,1,2]
  },

  setName: function(newName){
    this.set({ name: newName });
  }
});

var chord = new Chord();