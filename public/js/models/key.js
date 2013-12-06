var app = app || {};

app.Key = Backbone.Model.extend({
  initialize: function(){
    console.log('initialize key model');

    this.on('change:selected', function(){
        console.log('selected changed.');
    });
  },

  defaults: {
    label: '',
    selected: false
  },

  url: function(){
    return "";
  },

  setSelected: function(){
    if(!this.selected){
      this.set({ selected: true });  
    }
  }
});