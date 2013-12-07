var app = app || {};

app.AppView = Backbone.View.extend({
    el: $('#app')
});

var events = _.extend({}, Backbone.Events);

$(function () {
    new app.KeyboardView({
        events: events
    });
    
    new app.AppView();
    
    new app.ChordView({
        events: events
    });

    Backbone.history.start({
        pushState: false
    });
});