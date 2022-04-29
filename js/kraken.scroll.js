/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/js/kraken.scroll.js ***!
  \*********************************/
/*!
 * File: scroll.js
 *
 * Desc: js for adding intersection observer to the top top button, revealing it when the totop-mask is outside of the viewport
 *
 */
(function (Drupal) {
  Drupal.behaviors.krakenscroll = {
    attach(context, settings) {
      var topbtn = document.querySelector("#totop");
      var topcontainer = document.querySelector("#totop-mask");
      var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            topbtn.classList.remove("is-visible");
          } else {
            topbtn.classList.add("is-visible");
          }
        });
      });
      observer.observe(topcontainer);
      document.getElementById("totop").addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }

  };
})(Drupal);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnNjcm9sbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBVUEsTUFBVixFQUFrQjtBQUNqQkEsRUFBQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxZQUFqQixHQUFnQztBQUM5QkMsSUFBQUEsTUFBTSxDQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBb0I7QUFDeEIsVUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLFVBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQXJCO0FBQ0EsVUFBTUUsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQTBCQyxPQUFELElBQWE7QUFDckRBLFFBQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFpQkMsS0FBRCxJQUFXO0FBQ3pCLGNBQUlBLEtBQUssQ0FBQ0MsaUJBQU4sR0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0JULFlBQUFBLE1BQU0sQ0FBQ1UsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsWUFBeEI7QUFDRCxXQUZELE1BRU87QUFDTFgsWUFBQUEsTUFBTSxDQUFDVSxTQUFQLENBQWlCRSxHQUFqQixDQUFxQixZQUFyQjtBQUNEO0FBQ0YsU0FORDtBQU9ELE9BUmdCLENBQWpCO0FBU0FSLE1BQUFBLFFBQVEsQ0FBQ1MsT0FBVCxDQUFpQlYsWUFBakI7QUFDQUYsTUFBQUEsUUFBUSxDQUFDYSxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxnQkFBakMsQ0FBa0QsT0FBbEQsRUFBMkQsTUFBTTtBQUMvREMsUUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCO0FBQ2RDLFVBQUFBLEdBQUcsRUFBRSxDQURTO0FBRWRDLFVBQUFBLFFBQVEsRUFBRTtBQUZJLFNBQWhCO0FBSUQsT0FMRDtBQU1EOztBQXBCNkIsR0FBaEM7QUFzQkQsQ0F2QkQsRUF1Qkd6QixNQXZCSCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3Jha2VuLy4vc3JjL2pzL2tyYWtlbi5zY3JvbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBGaWxlOiBzY3JvbGwuanNcbiAqXG4gKiBEZXNjOiBqcyBmb3IgYWRkaW5nIGludGVyc2VjdGlvbiBvYnNlcnZlciB0byB0aGUgdG9wIHRvcCBidXR0b24sIHJldmVhbGluZyBpdCB3aGVuIHRoZSB0b3RvcC1tYXNrIGlzIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0XG4gKlxuICovXG4oZnVuY3Rpb24gKERydXBhbCkge1xuICBEcnVwYWwuYmVoYXZpb3JzLmtyYWtlbnNjcm9sbCA9IHtcbiAgICBhdHRhY2goY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgIGNvbnN0IHRvcGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90b3BcIik7XG4gICAgICBjb25zdCB0b3Bjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdG9wLW1hc2tcIik7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgICAgdG9wYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3BidG4uY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0b3Bjb250YWluZXIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RvcFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufSkoRHJ1cGFsKTtcbiJdLCJuYW1lcyI6WyJEcnVwYWwiLCJiZWhhdmlvcnMiLCJrcmFrZW5zY3JvbGwiLCJhdHRhY2giLCJjb250ZXh0Iiwic2V0dGluZ3MiLCJ0b3BidG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3Bjb250YWluZXIiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImludGVyc2VjdGlvblJhdGlvIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiXSwic291cmNlUm9vdCI6IiJ9