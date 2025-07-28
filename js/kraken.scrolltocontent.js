/******/ (function() { // webpackBootstrap
/*!******************************************!*\
  !*** ./src/js/kraken.scrolltocontent.js ***!
  \******************************************/
/*
 * File: misc.js
 *
 * Desc: js for misc scripts in the theme
 *
 */
(function (Drupal) {
  Drupal.behaviors.krakenScrollToContent = {
    attach(context, settings) {
      document
        .getElementById("js-scroll-to-unit-content")
        .addEventListener("click", (e) => {
          e.preventDefault();
          document.getElementById("unit-content").scrollIntoView({
            behavior: "smooth",
          });
        });
    },
  };
})(Drupal);

/******/ })()
;
//# sourceMappingURL=kraken.scrolltocontent.js.map