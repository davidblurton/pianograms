var app = app || {};

app.Key = Backbone.Model.extend({
  defaults: {
    label: '',
    selected: false
  },

  url: function(){
    return "";
  },
});