var Chord = Backbone.Model.extend({
  initialize: function(){
    console.log('initialize model')
  }

  defaults: function(){
    name: 'C7',
    notes: [0,1,2]
  }
});

var chord = new Chord();