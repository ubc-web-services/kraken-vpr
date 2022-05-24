/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
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
      document.getElementById("js-scroll-to-unit-content").addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("unit-content").scrollIntoView({
          behavior: "smooth"
        });
      });
    }

  };
})(Drupal);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnNjcm9sbHRvY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBVUEsTUFBVixFQUFrQjtFQUNqQkEsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxxQkFBakIsR0FBeUM7SUFDdkNDLE1BQU0sQ0FBQ0MsT0FBRCxFQUFVQyxRQUFWLEVBQW9CO01BQ3hCQyxRQUFRLENBQ0xDLGNBREgsQ0FDa0IsMkJBRGxCLEVBRUdDLGdCQUZILENBRW9CLE9BRnBCLEVBRThCQyxDQUFELElBQU87UUFDaENBLENBQUMsQ0FBQ0MsY0FBRjtRQUNBSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NJLGNBQXhDLENBQXVEO1VBQ3JEQyxRQUFRLEVBQUU7UUFEMkMsQ0FBdkQ7TUFHRCxDQVBIO0lBUUQ7O0VBVnNDLENBQXpDO0FBWUQsQ0FiRCxFQWFHWixNQWJILEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rcmFrZW4tdnByLy4vc3JjL2pzL2tyYWtlbi5zY3JvbGx0b2NvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEZpbGU6IG1pc2MuanNcbiAqXG4gKiBEZXNjOiBqcyBmb3IgbWlzYyBzY3JpcHRzIGluIHRoZSB0aGVtZVxuICpcbiAqL1xuKGZ1bmN0aW9uIChEcnVwYWwpIHtcbiAgRHJ1cGFsLmJlaGF2aW9ycy5rcmFrZW5TY3JvbGxUb0NvbnRlbnQgPSB7XG4gICAgYXR0YWNoKGNvbnRleHQsIHNldHRpbmdzKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJqcy1zY3JvbGwtdG8tdW5pdC1jb250ZW50XCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0LWNvbnRlbnRcIikuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59KShEcnVwYWwpO1xuIl0sIm5hbWVzIjpbIkRydXBhbCIsImJlaGF2aW9ycyIsImtyYWtlblNjcm9sbFRvQ29udGVudCIsImF0dGFjaCIsImNvbnRleHQiLCJzZXR0aW5ncyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciJdLCJzb3VyY2VSb290IjoiIn0=