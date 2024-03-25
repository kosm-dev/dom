"use strict";

document.addEventListener("DOMContentLoaded", () => {

  if (document.querySelector('.burger')) {
    const burger = document.querySelector('.burger'),
      burgerClose = document.querySelector('.burger-close'),
      mobileMenu = document.querySelector('.mobile-menu');

    function mobileMenuToggle(trigger, menu) {
      trigger.addEventListener('click', () => {
        menu.classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
      });
    }

    mobileMenuToggle(burger, mobileMenu);
    mobileMenuToggle(burgerClose, mobileMenu);
  }


  if (document.querySelector('.item-menu__icon[data-icon-toggle]')) {
    const icons = document.querySelectorAll('.item-menu__icon[data-icon-toggle]');

    icons.forEach(function (icon) {
      icon.addEventListener('click', function () {
        const parent = this.closest('.item-menu');
        const list = parent.querySelector('.item-menu__list');
        icon.classList.toggle('active');
        list.classList.toggle('active');
      });
    });
  }



  // slider


  const heroSlider = new Swiper('.hero-slider', {
    // Optional parameters
    loop: true,
    effect: "fade",
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000
    },

    navigation: {
      nextEl: '.hero-slider__next',
      prevEl: '.hero-slider__prev',
    },
  });








});