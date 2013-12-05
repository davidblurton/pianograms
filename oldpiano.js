"use strict";

var notes = {
  "Cb": 12,
  "C": 1,
  "C#": 2,
  "Db": 2,
  "D": 3,
  "D#": 4,
  "Eb": 4,
  "E": 5,
  "E#": 6,
  "Fb": 5,
  "F": 6,
  "F#": 7,
  "Gb": 7,
  "G": 8,
  "G#": 9,
  "Ab": 9,
  "A": 10,
  "A#": 11,
  "Bb": 11,
  "B": 12,
  "B#": 1
};

function setKeys() {
  var note = $('#notesInput').val();

  $('rect').removeClass("selected");

  note.split(" ").forEach(function(element){
    var noteValue = notes[element];
    $('#' + noteValue).addClass("selected");  
  })
};

$(document).ready(function() {
  $('#notesInput').keyup(function(){
    setKeys()
  });

  $('.key').click(function() {
    $(this).toggleClass("selected");

    var selectedNotes = [];

    $(".selected").each(function(index, element){
      selectedNotes.push(element.id);
    })

    $(".selectedNotes").text(selectedNotes.join());
  })
});