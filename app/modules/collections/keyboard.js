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
    $('.selected').each(function (index, note) {
      $(note).removeClass('selected');
    });

    var notes = this.model.get('notes');

    notes.forEach(function (note) {
      $('#' + note).addClass('selected');
    });

    return this;
  },

  updateUrl: function () {
    app.Router.navigate(this.model.url());
  }
});

app.KeyView = Backbone.View.extend({
  events: {
    'click': 'toggleSelect'
  },

  toggleSelect: function (event) {
    $(this.$el).toggleClass('selected');

    var notes = $('.selected').map(function (index, note) {
      return parseInt(note.id);
    }).toArray();

    this.model.set('notes', notes);
  }
});