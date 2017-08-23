$(document).ready(function() {
  // Carousel Functionality
  $('.carousel').slick({
    slidesToShow: 1, // one slide scroll at a time
    autoplay: true,
    autoplaySpeed: 4000, // milliseconds
    arrows: false,
    draggable: false, // users cannot drag images
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: true
  });


  // How far user has scrolled
  var $scrolled = 0;

  $(window).scroll(function() {
    var $scroll_top = $(this).scrollTop();

    if ($scroll_top - $scrolled >= 50) {
      // Height of navbar
      var $height = $(".navbar").css("height");

      /* Change the top offset of the navbar to be the negative
      height of navbar over 150ms */
      $('.navbar').animate({top: "-" + $height}, 150);

      // Keep record of how far used scrolled last time
      $scrolled = $scroll_top;
    }

    else if ($scrolled - $scroll_top >= 50) {
      // Change the top offset of the navbar to 0px over 150ms
      $('.navbar').animate({top: 0}, 150);

      // Keep record of how far used scrolled last time
      $scrolled = $scroll_top;
    }
  });
});
