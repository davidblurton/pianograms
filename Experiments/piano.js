"use strict";

// parameters
var octaves = 3;
var width = 161;

//calculated
var height = width / (1.34 * octaves);

var blackNoteHeight = height * 2/3;
var noteWidth = width / (7 * octaves);
var blackNoteWidth = width / (12 * octaves);

var blackNoteOffset = noteWidth - (blackNoteWidth * 0.5);

var selectedNotes = [];

$(document).ready(function() {
  generateKeyboard();

  $('.key').click(function() {
    $(this).toggleClass("selected");
    console.log($(this).attr('id'));
  });
});

function generateKeyboard(){
  $('#piano').svg({onLoad: drawKeys, settings: {height: height, width: width}});
  addIdsForNotes();
};

function drawKeys(svg, index){
  var whiteNoteIndexes = [];
  var blackNoteIndexes = [];

  for(var index = 0; index < 7 * octaves; index++){
    drawWhiteNote(svg, index);
  }

  // do this after so the black notes are on top
  for(var index = 0; index < 7 * octaves; index++){
    if(isBlackNote(index)) {
      drawBlackNote(svg, index);
    }
  }  
}

function transpose(amount) {
  var newSelectedIndexes = getSelectedIds().map(function (index, value) {
    return parseInt(value) + amount;
  });

  $('.key').each(function(index, element){
    $(element).removeClass('selected');
  });

  newSelectedIndexes.each(function(index, element){
    $('#' + element).addClass('selected');
  });
}

function getSelectedIds(){
  return $('.selected').map(getId);
}

function getId(index, element, array){
  return $(element).attr('id');
}

function addIdsForNotes(){
  $('.key').sort(function(a, b){
    return parseInt($(a).attr('x')) > parseInt($(b).attr('x')) ? 1 : -1;
  }).each(function(index, element){
    $(element).attr('id', index);
  });
}

function isBlackNote(index) {
  var i = index % 7;
  return i === 0 || i === 1 || i === 3 || i == 4 || i == 5;
}

function drawWhiteNote(svg, index) {
  svg.rect(index * noteWidth, 0, noteWidth, height, {class: 'white key'});
};

function drawBlackNote(svg, index) {
  svg.rect(index * noteWidth + blackNoteOffset, 0, blackNoteWidth, blackNoteHeight, {class: 'black key'});
};