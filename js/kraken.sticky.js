/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/js/kraken.sticky.js ***!
  \*********************************/
/*!
 * File: sticky.js
 *
 * Desc: js for adding intersection observer to the nav to make it sticky when the direct DOM sibling leaves the viewport (#ubc7-unit).
 *
 */
(function (Drupal) {
  Drupal.behaviors.krakensticky = {
    attach(context, settings) {
      var body = document.querySelector("body");
      var unitarea = document.querySelector("#clf7__header");
      var menu = document.querySelector("#ubc7-unit-menu");
      var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio <= 0) {
            body.classList.add("nav--is-pinned");
            menu.classList.add("stickynav--pinned");
          } else {
            body.classList.remove("nav--is-pinned");
            menu.classList.remove("stickynav--pinned");
          }
        });
      });
      observer.observe(unitarea);
    }

  };
})(Drupal);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnN0aWNreS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBVUEsTUFBVixFQUFrQjtFQUNqQkEsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxZQUFqQixHQUFnQztJQUM5QkMsTUFBTSxDQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBb0I7TUFDeEIsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtNQUNBLElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWpCO01BQ0EsSUFBTUUsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWI7TUFDQSxJQUFNRyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBMEJDLE9BQUQsSUFBYTtRQUNyREEsT0FBTyxDQUFDQyxPQUFSLENBQWlCQyxLQUFELElBQVc7VUFDekIsSUFBSUEsS0FBSyxDQUFDQyxpQkFBTixJQUEyQixDQUEvQixFQUFrQztZQUNoQ1YsSUFBSSxDQUFDVyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsZ0JBQW5CO1lBQ0FSLElBQUksQ0FBQ08sU0FBTCxDQUFlQyxHQUFmLENBQW1CLG1CQUFuQjtVQUNELENBSEQsTUFHTztZQUNMWixJQUFJLENBQUNXLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixnQkFBdEI7WUFDQVQsSUFBSSxDQUFDTyxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsbUJBQXRCO1VBQ0Q7UUFDRixDQVJEO01BU0QsQ0FWZ0IsQ0FBakI7TUFXQVIsUUFBUSxDQUFDUyxPQUFULENBQWlCWCxRQUFqQjtJQUNEOztFQWpCNkIsQ0FBaEM7QUFtQkQsQ0FwQkQsRUFvQkdULE1BcEJILEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rcmFrZW4tdnByLy4vc3JjL2pzL2tyYWtlbi5zdGlja3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBGaWxlOiBzdGlja3kuanNcbiAqXG4gKiBEZXNjOiBqcyBmb3IgYWRkaW5nIGludGVyc2VjdGlvbiBvYnNlcnZlciB0byB0aGUgbmF2IHRvIG1ha2UgaXQgc3RpY2t5IHdoZW4gdGhlIGRpcmVjdCBET00gc2libGluZyBsZWF2ZXMgdGhlIHZpZXdwb3J0ICgjdWJjNy11bml0KS5cbiAqXG4gKi9cbihmdW5jdGlvbiAoRHJ1cGFsKSB7XG4gIERydXBhbC5iZWhhdmlvcnMua3Jha2Vuc3RpY2t5ID0ge1xuICAgIGF0dGFjaChjb250ZXh0LCBzZXR0aW5ncykge1xuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgY29uc3QgdW5pdGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZjdfX2hlYWRlclwiKTtcbiAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ViYzctdW5pdC1tZW51XCIpO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA8PSAwKSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJuYXYtLWlzLXBpbm5lZFwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcInN0aWNreW5hdi0tcGlubmVkXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtLWlzLXBpbm5lZFwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreW5hdi0tcGlubmVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodW5pdGFyZWEpO1xuICAgIH0sXG4gIH07XG59KShEcnVwYWwpO1xuIl0sIm5hbWVzIjpbIkRydXBhbCIsImJlaGF2aW9ycyIsImtyYWtlbnN0aWNreSIsImF0dGFjaCIsImNvbnRleHQiLCJzZXR0aW5ncyIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bml0YXJlYSIsIm1lbnUiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImludGVyc2VjdGlvblJhdGlvIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib2JzZXJ2ZSJdLCJzb3VyY2VSb290IjoiIn0=