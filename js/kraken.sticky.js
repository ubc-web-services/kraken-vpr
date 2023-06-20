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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnN0aWNreS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBVUEsTUFBTSxFQUFFO0VBQ2pCQSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsWUFBWSxHQUFHO0lBQzlCQyxNQUFNQSxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtNQUN4QixJQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztNQUMzQyxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztNQUN4RCxJQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO01BQ3RELElBQU1HLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBRUMsT0FBTyxJQUFLO1FBQ3JEQSxPQUFPLENBQUNDLE9BQU8sQ0FBRUMsS0FBSyxJQUFLO1VBQ3pCLElBQUlBLEtBQUssQ0FBQ0MsaUJBQWlCLElBQUksQ0FBQyxFQUFFO1lBQ2hDVixJQUFJLENBQUNXLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1lBQ3BDUixJQUFJLENBQUNPLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1VBQ3pDLENBQUMsTUFBTTtZQUNMWixJQUFJLENBQUNXLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZDVCxJQUFJLENBQUNPLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1VBQzVDO1FBQ0YsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO01BQ0ZSLFFBQVEsQ0FBQ1MsT0FBTyxDQUFDWCxRQUFRLENBQUM7SUFDNUI7RUFDRixDQUFDO0FBQ0gsQ0FBQyxFQUFFVCxNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tyYWtlbi12cHIvLi9zcmMvanMva3Jha2VuLnN0aWNreS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEZpbGU6IHN0aWNreS5qc1xuICpcbiAqIERlc2M6IGpzIGZvciBhZGRpbmcgaW50ZXJzZWN0aW9uIG9ic2VydmVyIHRvIHRoZSBuYXYgdG8gbWFrZSBpdCBzdGlja3kgd2hlbiB0aGUgZGlyZWN0IERPTSBzaWJsaW5nIGxlYXZlcyB0aGUgdmlld3BvcnQgKCN1YmM3LXVuaXQpLlxuICpcbiAqL1xuKGZ1bmN0aW9uIChEcnVwYWwpIHtcbiAgRHJ1cGFsLmJlaGF2aW9ycy5rcmFrZW5zdGlja3kgPSB7XG4gICAgYXR0YWNoKGNvbnRleHQsIHNldHRpbmdzKSB7XG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICBjb25zdCB1bml0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xmN19faGVhZGVyXCIpO1xuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdWJjNy11bml0LW1lbnVcIik7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDw9IDApIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcIm5hdi0taXMtcGlubmVkXCIpO1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5bmF2LS1waW5uZWRcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi0taXMtcGlubmVkXCIpO1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5bmF2LS1waW5uZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh1bml0YXJlYSk7XG4gICAgfSxcbiAgfTtcbn0pKERydXBhbCk7XG4iXSwibmFtZXMiOlsiRHJ1cGFsIiwiYmVoYXZpb3JzIiwia3Jha2Vuc3RpY2t5IiwiYXR0YWNoIiwiY29udGV4dCIsInNldHRpbmdzIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuaXRhcmVhIiwibWVudSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvYnNlcnZlIl0sInNvdXJjZVJvb3QiOiIifQ==