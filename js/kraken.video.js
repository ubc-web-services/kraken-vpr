/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/js/kraken.video.js ***!
  \********************************/
/*
 * File: video.js
 *
 * Desc: js for video scripts in the theme
 *
 */
(function (Drupal, once) {
  Drupal.behaviors.krakenVideo = {
    attach(context) {
      once("js-video", ".media--type-remote-video", context).forEach(item => {
        item.addEventListener("click", () => {
          var video = item.querySelector(".field--name-field-media-oembed-video");
          var thumb = item.querySelector(".field--name-thumbnail");
          thumb.classList.add("hidden");
          video.removeAttribute("hidden");
        });
      });
    }
  };
})(Drupal, once);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnZpZGVvLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVQSxNQUFNLEVBQUVDLElBQUksRUFBRTtFQUNyQkQsTUFBTSxDQUFDRSxTQUFTLENBQUNDLFdBQVcsR0FBRztJQUM3QkMsTUFBTUEsQ0FBQ0MsT0FBTyxFQUFFO01BQ2RKLElBQUksQ0FBQyxVQUFVLEVBQUUsMkJBQTJCLEVBQUVJLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLENBQUVDLElBQUksSUFBSztRQUN2RUEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtVQUNuQyxJQUFNQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csYUFBYSxDQUM5Qix1Q0FDRixDQUFDO1VBQ0QsSUFBTUMsS0FBSyxHQUFHSixJQUFJLENBQUNHLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztVQUMxREMsS0FBSyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7VUFDN0JKLEtBQUssQ0FBQ0ssZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUM7QUFDSCxDQUFDLEVBQUVkLE1BQU0sRUFBRUMsSUFBSSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rcmFrZW4tdnByLy4vc3JjL2pzL2tyYWtlbi52aWRlby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogRmlsZTogdmlkZW8uanNcbiAqXG4gKiBEZXNjOiBqcyBmb3IgdmlkZW8gc2NyaXB0cyBpbiB0aGUgdGhlbWVcbiAqXG4gKi9cbihmdW5jdGlvbiAoRHJ1cGFsLCBvbmNlKSB7XG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5rcmFrZW5WaWRlbyA9IHtcbiAgICAgIGF0dGFjaChjb250ZXh0KSB7XG4gICAgICAgIG9uY2UoXCJqcy12aWRlb1wiLCBcIi5tZWRpYS0tdHlwZS1yZW1vdGUtdmlkZW9cIiwgY29udGV4dCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gaXRlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBcIi5maWVsZC0tbmFtZS1maWVsZC1tZWRpYS1vZW1iZWQtdmlkZW9cIixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB0aHVtYiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5maWVsZC0tbmFtZS10aHVtYm5haWxcIik7XG4gICAgICAgICAgICB0aHVtYi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgdmlkZW8ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSkoRHJ1cGFsLCBvbmNlKTtcbiJdLCJuYW1lcyI6WyJEcnVwYWwiLCJvbmNlIiwiYmVoYXZpb3JzIiwia3Jha2VuVmlkZW8iLCJhdHRhY2giLCJjb250ZXh0IiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwidmlkZW8iLCJxdWVyeVNlbGVjdG9yIiwidGh1bWIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9