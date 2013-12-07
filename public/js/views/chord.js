var app = app || {};

app.Chord = Backbone.Model.extend({
    defaults: {
        key: 0, // C
        major: true,
        notes: []
    },

    url: function () {
        return '';
    }
});

app.ChordView = Backbone.View.extend({
    //pass this a model with key and notes on it
    // bind to model change instead
    
    el: $('#chord-description'),

    initialize: function (options) {
        options.events.on('chord changed', this.render, this);
    },

    render: function (notes) {        
        var majorExtentionNames = ['1', 'b9', '9', '#9', '3', '11', '#11', '5', 'b13', '13', '7', 'maj7'];

        var keyId = 8; // Ab
        var keyOffset = 12 - keyId;
        
        var extensions = notes.map(function (note) {
            return majorExtentionNames[(note + keyOffset) % 12];
        });

        this.$el.text(extensions.join(' '));
        return this;
    },
});