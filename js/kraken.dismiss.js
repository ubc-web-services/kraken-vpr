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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLmRpc21pc3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVVBLE1BQVYsRUFBa0I7QUFDakJBLEVBQUFBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsYUFBakIsR0FBaUM7QUFDL0JDLElBQUFBLE1BQU0sQ0FBQ0MsT0FBRCxFQUFVQyxRQUFWLEVBQW9CO0FBQ3hCLFlBQU1DLE9BQU4sQ0FBYztBQUNaQyxRQUFBQSxXQUFXLENBQUNDLElBQUQsRUFBTztBQUNoQixlQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7QUFFREMsUUFBQUEsT0FBTyxHQUFHO0FBQ1IsY0FBTUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLEtBQUtKLElBQS9CLENBQVY7QUFDQUUsVUFBQUEsQ0FBQyxDQUFDRyxPQUFGLENBQVdDLEtBQUQsSUFBVztBQUNuQixnQkFBTUMsR0FBRyxHQUFHRCxLQUFLLENBQUNFLGFBQU4sQ0FBb0Isc0JBQXBCLENBQVo7QUFDQUQsWUFBQUEsR0FBRyxDQUFDRSxnQkFBSixDQUFxQixPQUFyQixFQUE4QixNQUFNO0FBQ2xDRixjQUFBQSxHQUFHLENBQUNHLGFBQUosQ0FBa0JDLE1BQWxCO0FBQ0QsYUFGRDtBQUdELFdBTEQ7QUFNRDs7QUFiVzs7QUFlZCxVQUFNQyxXQUFXLEdBQUcsSUFBSWQsT0FBSixDQUFZLGFBQVosQ0FBcEI7QUFDQWMsTUFBQUEsV0FBVyxDQUFDWCxPQUFaO0FBQ0Q7O0FBbkI4QixHQUFqQztBQXFCRCxDQXRCRCxFQXNCR1QsTUF0QkgsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2tyYWtlbi8uL3NyYy9qcy9rcmFrZW4uZGlzbWlzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogRmlsZTogZGlzbWlzcy5qc1xuICpcbiAqIERlc2M6IGpzIGZvciBkaXNtaXNzaW5nIGVsZW1lbnRzIGZyb20gdGhlIGRvbSB2aWEgY2xvc2UgYnV0dG9uXG4gKlxuICovXG4oZnVuY3Rpb24gKERydXBhbCkge1xuICBEcnVwYWwuYmVoYXZpb3JzLmtyYWtlbkRpc21pc3MgPSB7XG4gICAgYXR0YWNoKGNvbnRleHQsIHNldHRpbmdzKSB7XG4gICAgICBjbGFzcyBEaXNtaXNzIHtcbiAgICAgICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNtaXNzKCkge1xuICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubm9kZSk7XG4gICAgICAgICAgYS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnRuID0gZW50cnkucXVlcnlTZWxlY3RvcihcIi5qcy1kaXNtaXNzX190cmlnZ2VyXCIpO1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpc21pc3NhYmxlID0gbmV3IERpc21pc3MoXCIuanMtZGlzbWlzc1wiKTtcbiAgICAgIGRpc21pc3NhYmxlLmRpc21pc3MoKTtcbiAgICB9LFxuICB9O1xufSkoRHJ1cGFsKTtcbiJdLCJuYW1lcyI6WyJEcnVwYWwiLCJiZWhhdmlvcnMiLCJrcmFrZW5EaXNtaXNzIiwiYXR0YWNoIiwiY29udGV4dCIsInNldHRpbmdzIiwiRGlzbWlzcyIsImNvbnN0cnVjdG9yIiwibm9kZSIsImRpc21pc3MiLCJhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVudHJ5IiwiYnRuIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwiZGlzbWlzc2FibGUiXSwic291cmNlUm9vdCI6IiJ9