"use strict"

  window.slider = (function setAutoScroll() {
  setInterval(function() {
  var inputChecked = document.querySelector(".slider__input:checked"),
    inputCheckedId = Number(inputChecked.id.slice(13));
    if (inputCheckedId != 5) {
    inputCheckedId++;
    } else {
  inputCheckedId = 1;
 };
    document.getElementById('slider-input-' + inputCheckedId).checked = true;
  },7500);
})();
