var Router = Backbone.Router.extend({
    routes: {
        'diagram/*query': 'diagram'
    },

    initialize: function(options){
        this.model = options.model;
    },

    diagram: function (query) {
        var notes = query.split(',');
        this.model.set('notes', notes);
    }
});