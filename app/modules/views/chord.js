var app = app || {};

app.Chord = Backbone.Model.extend({
    defaults: {
        key: 0, // C
        major: true,
        notes: []
    },

    url: function () {
        return 'chord/' + this.get('notes').join();
    }
});

app.ChordView = Backbone.View.extend({
    el: $('#chord-description'),

    initialize: function (options) {
        this.listenTo(this.model, 'change:notes change:key', this.render);
    },

    render: function (notes) {
        var majorExtentionNames = ['1', 'b9', '9', '#9', '3', '11', '#11', '5', 'b13', '13', '7', 'maj7'];
        var minorExtentionNames = ['1', 'b9', '9', '3', 'b11', '11', 'b5', '5', 'b13', '13', '7', 'maj7'];

        // if contains 1,3,5 append key
        // if contains 7,9,11,13 append respective number
        // else if contains maj7 append maj7
        // if contains b9, #9, #11, b13 append any

        var keyId = this.model.get('key');
        var keyOffset = 12 - keyId;

        var extensions = this.model.get('notes').map(function (note) {
            return majorExtentionNames[(note + keyOffset) % 12];
        });

        this.$el.text(extensions.join(' '));
        return this;
    },
});

app.KeyPicker = Backbone.View.extend({
    el: $('#key-picker'),

    initialize: function () {
        this.render();
    },

    events: {
        'change': 'changeKey'
    },

    render: function () {
        var keys = {
            'C': 0,
            'C# / Db': 1,
            'D': 2,
            'D# / Eb': 3,
            'E': 4,
            'F': 5,
            'F# / Gb': 6,
            'G': 7,
            'G# / Ab': 8,
            'A': 9,
            'A# / Bb': 10,
            'B': 11
        };

        for (var key in keys) {
            var element = $('<option value="' + keys[key] + '">' + key + '</option>'); // use a template instead
            this.$el.append(element);
        }

        return this;
    },

    changeKey: function (e) {
        var key = this.el.options[this.el.selectedIndex].value;
        this.model.set('key', key);
    }
});