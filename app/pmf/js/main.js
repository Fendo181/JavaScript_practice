'use strict';

// 動的に背景色を変える

setAutoColorChange();

function setAutoColorChange(index) {
  var colorlist = ["#7b9ad0", "#f8e352", "#c8d627#d", "#d5848b", "#e5ab47", "#e1cea3", "#51a1a2", "#b1d7e4", "#66b7ec", "#c08e47", "#ae8dbc", "#c3cfa9"];
  if (!index || index > (colorlist.length - 1)) {
    index = 0;
  }
  var color = colorlist[index];
  $('body').animate({
    backgroundColor: color
  }, 3000);
  setAutoColorChange(++index);
}