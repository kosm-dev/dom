"use strict";

document.addEventListener("DOMContentLoaded", () => {


  function mobileMenu() {
    const burger = document.querySelector('.burger'),
          mobileMenu = document.querySelector('.mobile-menu');
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.querySelector('body').classList.toggle('lock');
    });
  }

  if (document.querySelector('.burger')) {
    mobileMenu();
  }



});