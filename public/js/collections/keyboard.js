var app = app || {};

app.KeyboardView = Backbone.View.extend({
    el: $('#keyboard'),

    initialize: function () {
        var self = this;

        $('#keyboard > .key').each(function (note) {
            new app.KeyView({
                el: $('#' + note)[0],
                model: self.model
            });
        });

        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'change', this.updateUrl);
    },

    render: function () {
        var notes = this.model.get('notes');

        notes.forEach(function (note) {
            $('#' + note).addClass('selected');
        });

        return this;
    },

    updateUrl: function () {
        var selectedNotes = this.model.get('notes');

        app.Router.navigate('diagram/' + selectedNotes.join());
    }
});

app.KeyView = app.SvgView.extend({
    events: {
        'click': 'toggleSelect'
    },

    toggleSelect: function (event) {
        $(this.$el).toggleClass('selected');

        var notes = $('.selected').map(function (index, note) {
            return note.id;
        }).toArray();

        this.model.set('notes', notes);
    }
});