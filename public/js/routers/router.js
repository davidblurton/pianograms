var Router = Backbone.Router.extend({
    routes: {
        'diagram/*query': 'diagram'
    },

    diagram: function (query) {
        var notes = query.split(',');

        notes.forEach(function (id) {
            var note = app.Keyboard.get(id);
            note.set({
                selected: true
            });
        });
    }
});

app.Router = new Router();