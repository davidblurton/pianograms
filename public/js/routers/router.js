var Router = Backbone.Router.extend({
    routes: {
        'diagram/*query': 'diagram'
    },

    initialize: function (options) {
        this.model = options.model;
    },

    diagram: function (query) {
        var notes = query.split(',');

        notes.forEach(function (id) {
            var note = app.Keyboard.get(id);
            note.set({
                selected: true
            });
        });

        //this.model.set('notes', notes);
    }
});