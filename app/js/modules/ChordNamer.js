if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    describeChord: function (notes, key, isMajor) {
      var extensions = notes.map(function (note) {
        return (note + 12 - key) % 12;
      });

      var majorExtentionNames = ['1', 'b9', '9', '#9', '3', '11', '#11', '5', 'b13', '13', '7', 'maj7'];
      var minorExtentionNames = ['1', 'b9', '9', '3', 'b11', '11', 'b5', '5', 'b6', '6', '7', 'maj7'];

      var keyDescription = this.describeKey(key); //key name

      var majorExtensionDescriptions = ['', 'b9', '', '#9', '', '', '#11', '', 'b13', '', '7', 'maj7'];

      for (var extension in extensions) {
        var ext = extensions[extension];
        keyDescription += majorExtensionDescriptions[ext];
      }

      // put 7 or maj7 first
      // unique

      return keyDescription;
    },

    describeKey: function (key, preferFlats) {
      var keyNames = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

      return keyNames[key];
    }
  };
});