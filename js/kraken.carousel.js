/******/ (function() { // webpackBootstrap
/*!***********************************!*\
  !*** ./src/js/kraken.carousel.js ***!
  \***********************************/
/*
 * File: carousel.js
 *
 * Desc: js for carousel
 */
(function (Drupal, once, $) {
    Drupal.behaviors.krakenCarousel = {
      attach(context) {
        once('js-carousel', '.bootstrap-carousel', context).forEach(function (element) {
            // make first slide active
            $('.carousel-item:first-child').addClass('active');
        });
      },
    };
  })(Drupal, once, jQuery);

/******/ })()
;
//# sourceMappingURL=kraken.carousel.js.map