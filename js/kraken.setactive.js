/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/js/kraken.setactive.js ***!
  \************************************/
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

/*
 * File: setactive.js
 *
 * Desc: js for setting the 'is-active' class on active vue.js powered links
 *
 */
(function (Drupal) {
  Drupal.behaviors.krakenSetactive = {
    attach(context, settings) {
      var current = window.location.pathname;
      var menuItems = document.querySelectorAll(".nav--split > a");

      for (var i = 0, len = menuItems.length; i < len; +i, _readOnlyError("i")) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
          menuItems[i].classList.add("is-active");
        }
      }
    }

  };
})(Drupal);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnNldGFjdGl2ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCO0FBQ2pCQSxFQUFBQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGVBQWpCLEdBQW1DO0FBQ2pDQyxJQUFBQSxNQUFNLENBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUFvQjtBQUN4QixVQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEM7QUFDQSxVQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWxCOztBQUNBLFdBQUssSUFBTUMsQ0FBQyxHQUFHLENBQVYsRUFBYUMsR0FBRyxHQUFHSixTQUFTLENBQUNLLE1BQWxDLEVBQTBDRixDQUFDLEdBQUdDLEdBQTlDLEdBQW1ERCxDQUFuRCx1QkFBd0Q7QUFDdEQsWUFBSUgsU0FBUyxDQUFDRyxDQUFELENBQVQsQ0FBYUcsWUFBYixDQUEwQixNQUExQixFQUFrQ0MsT0FBbEMsQ0FBMENYLE9BQTFDLE1BQXVELENBQUMsQ0FBNUQsRUFBK0Q7QUFDN0RJLFVBQUFBLFNBQVMsQ0FBQ0csQ0FBRCxDQUFULENBQWFLLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFdBQTNCO0FBQ0Q7QUFDRjtBQUNGOztBQVRnQyxHQUFuQztBQVdELENBWkQsRUFZR25CLE1BWkgsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2tyYWtlbi8uL3NyYy9qcy9rcmFrZW4uc2V0YWN0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBGaWxlOiBzZXRhY3RpdmUuanNcbiAqXG4gKiBEZXNjOiBqcyBmb3Igc2V0dGluZyB0aGUgJ2lzLWFjdGl2ZScgY2xhc3Mgb24gYWN0aXZlIHZ1ZS5qcyBwb3dlcmVkIGxpbmtzXG4gKlxuICovXG4oZnVuY3Rpb24gKERydXBhbCkge1xuICBEcnVwYWwuYmVoYXZpb3JzLmtyYWtlblNldGFjdGl2ZSA9IHtcbiAgICBhdHRhY2goY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi0tc3BsaXQgPiBhXCIpO1xuICAgICAgZm9yIChjb25zdCBpID0gMCwgbGVuID0gbWVudUl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChtZW51SXRlbXNbaV0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSkge1xuICAgICAgICAgIG1lbnVJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn0pKERydXBhbCk7XG4iXSwibmFtZXMiOlsiRHJ1cGFsIiwiYmVoYXZpb3JzIiwia3Jha2VuU2V0YWN0aXZlIiwiYXR0YWNoIiwiY29udGV4dCIsInNldHRpbmdzIiwiY3VycmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJtZW51SXRlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsImNsYXNzTGlzdCIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=