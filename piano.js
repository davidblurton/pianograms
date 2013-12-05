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

$(document).ready(function() {
  generateKeyboard();

  $('.key').click(function() {
    $(this).toggleClass("selected");
  })
});

function generateKeyboard(){
  $('#piano').svg({onLoad: drawKeys, settings: {height: height, width: width}})
};

function drawKeys(svg, index){
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

function isBlackNote(index) {
  var i = index % 7;
  return i === 0 || i === 1 || i === 3 || i == 4 || i == 5;
}

function drawWhiteNote(svg, index) {
  svg.rect(index * noteWidth, 0, noteWidth, height, {id: index, class: 'white key'});
};

function drawBlackNote(svg, index) {
  svg.rect(index * noteWidth + blackNoteOffset, 0, blackNoteWidth, blackNoteHeight, {id: 'b' + index, class: 'black key'});
};