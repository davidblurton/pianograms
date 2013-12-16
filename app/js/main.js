require.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'bootstrap': {
          deps: ['jquery'],
          exports: "$.fn.popover"
        },
    enforceDefine: true
  },

  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    templates: '../templates',
    noteConverter: 'modules/NoteConverter',
    chordNamer: 'modules/ChordNamer',
    bootstrap: 'libs/bootstrap/bootstrap.min'
  }
});

require(['app'], function (App) {
  App.initialize();
});