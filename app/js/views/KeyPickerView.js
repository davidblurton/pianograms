define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var KeyPickerView = Backbone.View.extend({
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

  return KeyPickerView;
});