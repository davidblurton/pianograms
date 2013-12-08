var app = app || {};

app.AppView = Backbone.View.extend({
    el: $('#app')
});

$(function () {
    var chord = new app.Chord();
    
    new app.KeyboardView({
        model: chord
    });
    
    new app.AppView();
    
    new app.ChordView({
        model: chord
    });
    
    app.Router = new Router({model: chord});

    Backbone.history.start({
        pushState: false
    });
});