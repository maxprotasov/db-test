"use strict"

var setAutoScroll = function() {
  var toggles = document.querySelectorAll(".slider__input");
  setInterval(function() {
    console.log(toggles);
    toggles.forEach(function() {

    });
    // for (key in toggles) {
    //   if (key.checked) {
    //     key.checked = false;
    //
    //   };
    // };
  },7500);
};
setAutoScroll();
