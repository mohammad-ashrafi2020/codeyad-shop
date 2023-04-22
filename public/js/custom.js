(function ($) {
  "use strict";
  let THEME = {};

  /*====== Example ======*/
  THEME.Example = function () {
    // Write your code here
  };
  /*====== end Example ======*/

  $(window).on("load", function () {});
  $(document).ready(function () {
    THEME.Example();
  });
})(jQuery);

function initZoom() {
  $(".zoom-img").imagezoomsl({
    zoomrange: [2.12, 12],
    magnifiersize: [530, 340],
    scrollspeedanimate: 10,
    loopspeedanimate: 5,
    cursorshadeborder: "10px solid black",
  });
}
function InitRateSlider() {
  $("#rateSlider").bootstrapSlider({
    ticks_labels: ["خیلی بد", "بد", "معمولی", "خوب", "عالی"],
    ticks: [1, 2, 3, 4, 5],
    max: 5,
    min: 1,
  });
}
function getRateSliderValue() {
  return $("#rateSlider").bootstrapSlider("getValue");
}

function spyScroll(){
  $('body').scrollspy()
}
function CloseSubMenu(){
  $(".navigation .submenu").removeClass("toggle");
}