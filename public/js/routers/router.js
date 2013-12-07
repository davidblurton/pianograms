var Router = Backbone.Router.extend({
  routes: {
    'diagram/p:notes': 'diagram'
  },

  diagram: function(notes){
    console.log(notes);
  }
});

app.Router = new Router();