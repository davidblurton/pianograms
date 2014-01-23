require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    jquerySvgDom: {
      deps: ['jquerySvg']
    },
    jquerySvg: {
      deps: ['jquery']
    }
  },

  paths: {
    jquery: 'libs/jquery/jquery-min',
    jquerySvg: 'libs/jquery/jquery.svg',
    jquerySvgDom: 'libs/jquery/jquery.svgdom',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    noteConverter: 'modules/NoteConverter',
    chordNamer: 'modules/ChordNamer',
  }
});

require([
  'views/AppView',
  'router',
  'models/Chord'
], function (AppView, Router, Chord) {
  var model = new Chord();

  var appView = new AppView({
    model: model
  });

  appView.render();

  var router = new Router({
    model: model
  });

  Backbone.history.start({
    pushState: false
  });
});