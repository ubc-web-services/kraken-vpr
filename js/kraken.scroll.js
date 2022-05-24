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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnNjcm9sbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBVUEsTUFBVixFQUFrQjtFQUNqQkEsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxZQUFqQixHQUFnQztJQUM5QkMsTUFBTSxDQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBb0I7TUFDeEIsSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtNQUNBLElBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQXJCO01BQ0EsSUFBTUUsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQTBCQyxPQUFELElBQWE7UUFDckRBLE9BQU8sQ0FBQ0MsT0FBUixDQUFpQkMsS0FBRCxJQUFXO1VBQ3pCLElBQUlBLEtBQUssQ0FBQ0MsaUJBQU4sR0FBMEIsQ0FBOUIsRUFBaUM7WUFDL0JULE1BQU0sQ0FBQ1UsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsWUFBeEI7VUFDRCxDQUZELE1BRU87WUFDTFgsTUFBTSxDQUFDVSxTQUFQLENBQWlCRSxHQUFqQixDQUFxQixZQUFyQjtVQUNEO1FBQ0YsQ0FORDtNQU9ELENBUmdCLENBQWpCO01BU0FSLFFBQVEsQ0FBQ1MsT0FBVCxDQUFpQlYsWUFBakI7TUFDQUYsUUFBUSxDQUFDYSxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxnQkFBakMsQ0FBa0QsT0FBbEQsRUFBMkQsTUFBTTtRQUMvREMsTUFBTSxDQUFDQyxRQUFQLENBQWdCO1VBQ2RDLEdBQUcsRUFBRSxDQURTO1VBRWRDLFFBQVEsRUFBRTtRQUZJLENBQWhCO01BSUQsQ0FMRDtJQU1EOztFQXBCNkIsQ0FBaEM7QUFzQkQsQ0F2QkQsRUF1Qkd6QixNQXZCSCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3Jha2VuLXZwci8uL3NyYy9qcy9rcmFrZW4uc2Nyb2xsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogRmlsZTogc2Nyb2xsLmpzXG4gKlxuICogRGVzYzoganMgZm9yIGFkZGluZyBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXIgdG8gdGhlIHRvcCB0b3AgYnV0dG9uLCByZXZlYWxpbmcgaXQgd2hlbiB0aGUgdG90b3AtbWFzayBpcyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydFxuICpcbiAqL1xuKGZ1bmN0aW9uIChEcnVwYWwpIHtcbiAgRHJ1cGFsLmJlaGF2aW9ycy5rcmFrZW5zY3JvbGwgPSB7XG4gICAgYXR0YWNoKGNvbnRleHQsIHNldHRpbmdzKSB7XG4gICAgICBjb25zdCB0b3BidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdG9wXCIpO1xuICAgICAgY29uc3QgdG9wY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3RvcC1tYXNrXCIpO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICAgIHRvcGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9wYnRuLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodG9wY29udGFpbmVyKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90b3BcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn0pKERydXBhbCk7XG4iXSwibmFtZXMiOlsiRHJ1cGFsIiwiYmVoYXZpb3JzIiwia3Jha2Vuc2Nyb2xsIiwiYXR0YWNoIiwiY29udGV4dCIsInNldHRpbmdzIiwidG9wYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9wY29udGFpbmVyIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIl0sInNvdXJjZVJvb3QiOiIifQ==