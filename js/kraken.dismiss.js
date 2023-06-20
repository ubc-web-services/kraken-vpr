/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/js/kraken.dismiss.js ***!
  \**********************************/
/*
 * File: dismiss.js
 *
 * Desc: js for dismissing elements from the dom via close button
 *
 */
(function (Drupal) {
  Drupal.behaviors.krakenDismiss = {
    attach(context, settings) {
      class Dismiss {
        constructor(node) {
          this.node = node;
        }
        dismiss() {
          var a = document.querySelectorAll(this.node);
          a.forEach(entry => {
            var btn = entry.querySelector(".js-dismiss__trigger");
            btn.addEventListener("click", () => {
              btn.parentElement.remove();
            });
          });
        }
      }
      var dismissable = new Dismiss(".js-dismiss");
      dismissable.dismiss();
    }
  };
})(Drupal);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLmRpc21pc3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVVBLE1BQU0sRUFBRTtFQUNqQkEsTUFBTSxDQUFDQyxTQUFTLENBQUNDLGFBQWEsR0FBRztJQUMvQkMsTUFBTUEsQ0FBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUU7TUFDeEIsTUFBTUMsT0FBTyxDQUFDO1FBQ1pDLFdBQVdBLENBQUNDLElBQUksRUFBRTtVQUNoQixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtRQUNsQjtRQUVBQyxPQUFPQSxDQUFBLEVBQUc7VUFDUixJQUFNQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsSUFBSSxDQUFDSixJQUFJLENBQUM7VUFDOUNFLENBQUMsQ0FBQ0csT0FBTyxDQUFFQyxLQUFLLElBQUs7WUFDbkIsSUFBTUMsR0FBRyxHQUFHRCxLQUFLLENBQUNFLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztZQUN2REQsR0FBRyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtjQUNsQ0YsR0FBRyxDQUFDRyxhQUFhLENBQUNDLE1BQU0sRUFBRTtZQUM1QixDQUFDLENBQUM7VUFDSixDQUFDLENBQUM7UUFDSjtNQUNGO01BQ0EsSUFBTUMsV0FBVyxHQUFHLElBQUlkLE9BQU8sQ0FBQyxhQUFhLENBQUM7TUFDOUNjLFdBQVcsQ0FBQ1gsT0FBTyxFQUFFO0lBQ3ZCO0VBQ0YsQ0FBQztBQUNILENBQUMsRUFBRVQsTUFBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rcmFrZW4tdnByLy4vc3JjL2pzL2tyYWtlbi5kaXNtaXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBGaWxlOiBkaXNtaXNzLmpzXG4gKlxuICogRGVzYzoganMgZm9yIGRpc21pc3NpbmcgZWxlbWVudHMgZnJvbSB0aGUgZG9tIHZpYSBjbG9zZSBidXR0b25cbiAqXG4gKi9cbihmdW5jdGlvbiAoRHJ1cGFsKSB7XG4gIERydXBhbC5iZWhhdmlvcnMua3Jha2VuRGlzbWlzcyA9IHtcbiAgICBhdHRhY2goY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgIGNsYXNzIERpc21pc3Mge1xuICAgICAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc21pc3MoKSB7XG4gICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5ub2RlKTtcbiAgICAgICAgICBhLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidG4gPSBlbnRyeS5xdWVyeVNlbGVjdG9yKFwiLmpzLWRpc21pc3NfX3RyaWdnZXJcIik7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgZGlzbWlzc2FibGUgPSBuZXcgRGlzbWlzcyhcIi5qcy1kaXNtaXNzXCIpO1xuICAgICAgZGlzbWlzc2FibGUuZGlzbWlzcygpO1xuICAgIH0sXG4gIH07XG59KShEcnVwYWwpO1xuIl0sIm5hbWVzIjpbIkRydXBhbCIsImJlaGF2aW9ycyIsImtyYWtlbkRpc21pc3MiLCJhdHRhY2giLCJjb250ZXh0Iiwic2V0dGluZ3MiLCJEaXNtaXNzIiwiY29uc3RydWN0b3IiLCJub2RlIiwiZGlzbWlzcyIsImEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZW50cnkiLCJidG4iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJkaXNtaXNzYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=