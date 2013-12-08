var app = app || {};

app.Chord = Backbone.Model.extend({    
    defaults: {
        key: 0, // C
        major: true,
        notes: []
    },
    
    url: function () {
        return 'diagram/' + notes.join();
    }
});

app.ChordView = Backbone.View.extend({    
    el: $('#chord-description'),

    initialize: function (options) {
        this.model = options.model;
        this.listenTo(this.model, 'change', this.render)
    },

    render: function (notes) {        
        var majorExtentionNames = ['1', 'b9', '9', '#9', '3', '11', '#11', '5', 'b13', '13', '7', 'maj7'];

        var keyId = 8; // Ab
        var keyOffset = 12 - keyId;
        
        var extensions = this.model.get('notes').map(function (note) {
            return majorExtentionNames[(note + keyOffset) % 12];
        });

        this.$el.text(extensions.join(' '));
        return this;
    },
});