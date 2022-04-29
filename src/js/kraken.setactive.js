/*
 * File: setactive.js
 *
 * Desc: js for setting the 'is-active' class on active vue.js powered links
 *
 */
(function (Drupal) {
  Drupal.behaviors.krakenSetactive = {
    attach(context, settings) {
      const current = window.location.pathname;
      const menuItems = document.querySelectorAll(".nav--split > a");
      for (const i = 0, len = menuItems.length; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
          menuItems[i].classList.add("is-active");
        }
      }
    },
  };
})(Drupal);
