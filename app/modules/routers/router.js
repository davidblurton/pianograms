var Router = Backbone.Router.extend({
    routes: {
        'chord/*query': 'setNotes'
    },

    initialize: function(options){
        this.model = options.model;
    },

    setNotes: function (query) {
        var notes = query.split(',');
        this.model.set('notes', notes);
    }
});