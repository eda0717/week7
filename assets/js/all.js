"use strict";

$(document).ready(function () {
  //navbar滾動變色
  $(window).scroll(function (e) {
    if ($(window).scrollTop() <= 0) {
      $('.navbar').addClass('bg-white');
      $('.navbar').removeClass('bg-light');
    } else {
      $('.navbar').addClass('bg-light');
      $('.navbar').removeClass('bg-white');
    }
  });
});
//# sourceMappingURL=all.js.map
