var app = app || {};

app.KeyView = app.SvgBackboneView.extend({
    tagName: 'rect',

    initialize: function (model, x) {
        this.x = x;

        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'change', this.updateUrl);
        this.listenTo(this.model, 'change', this.raiseEvent);
    },

    id: function () {
        return this.model.id;
    },

    events: {
        'click': 'toggleSelect'
    },

    render: function () {
        if (this.model.get('selected')) {
            this.$el.addClass('selected');
        } else {
            this.$el.removeClass('selected');
        }

        this.$el.attr('x', this.x);

        return this;
    },

    toggleSelect: function (e) {
        this.model.set('selected', !this.model.get('selected'));
    },

    updateUrl: function () {
        var selectedNotes = app.Keyboard.where({
            selected: true
        });
        app.Router.navigate('diagram/' + selectedNotes.map(function (a) {
            return a.id;
        }).join());
    },

    raiseEvent: function () {
        var selectedNotes = app.Keyboard.where({
            selected: true
        }).map(function (a) {
            return a.id;
        });

        events.trigger('chord changed', selectedNotes);
    }
});

app.KeyView.whiteKeyWidth = 23;
app.KeyView.blackKeyWidth = 13;

app.WhiteKeyView = app.KeyView.extend({

    className: 'white key',

    attributes: {
        y: 0,
        width: app.KeyView.whiteKeyWidth,
        height: 120
    }
});

app.BlackKeyView = app.KeyView.extend({

    className: 'black key',

    attributes: {
        y: 0,
        width: app.KeyView.blackKeyWidth,
        height: 80
    }
});