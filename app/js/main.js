require.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  },

  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    noteConverter: 'modules/NoteConverter',
    chordNamer: 'modules/ChordNamer',
  }
});

require(['views/AppView'], function (AppView) {
  var appView = new AppView();
  appView.render();

  Backbone.history.start({
    pushState: false
  });
});