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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnNjcm9sbHRvY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBVUEsTUFBTSxFQUFFO0VBQ2pCQSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MscUJBQXFCLEdBQUc7SUFDdkNDLE1BQU1BLENBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO01BQ3hCQyxRQUFRLENBQ0xDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxDQUMzQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUs7UUFDaENBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1FBQ2xCSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0ksY0FBYyxDQUFDO1VBQ3JEQyxRQUFRLEVBQUU7UUFDWixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNGLENBQUM7QUFDSCxDQUFDLEVBQUVaLE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3Jha2VuLXZwci8uL3NyYy9qcy9rcmFrZW4uc2Nyb2xsdG9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBGaWxlOiBtaXNjLmpzXG4gKlxuICogRGVzYzoganMgZm9yIG1pc2Mgc2NyaXB0cyBpbiB0aGUgdGhlbWVcbiAqXG4gKi9cbihmdW5jdGlvbiAoRHJ1cGFsKSB7XG4gIERydXBhbC5iZWhhdmlvcnMua3Jha2VuU2Nyb2xsVG9Db250ZW50ID0ge1xuICAgIGF0dGFjaChjb250ZXh0LCBzZXR0aW5ncykge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwianMtc2Nyb2xsLXRvLXVuaXQtY29udGVudFwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdC1jb250ZW50XCIpLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9O1xufSkoRHJ1cGFsKTtcbiJdLCJuYW1lcyI6WyJEcnVwYWwiLCJiZWhhdmlvcnMiLCJrcmFrZW5TY3JvbGxUb0NvbnRlbnQiLCJhdHRhY2giLCJjb250ZXh0Iiwic2V0dGluZ3MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiXSwic291cmNlUm9vdCI6IiJ9