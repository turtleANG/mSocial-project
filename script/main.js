
// адаптивность шапки

const burgerButton = document.querySelector('.nav__icon');
const closeMenuButton = document.querySelector('.nav__close');
const menuHeader = document.querySelector('.nav__head');
const menuBody = document.querySelector('.nav__menu');

if (burgerButton) {
  burgerButton.addEventListener('click', function (e) {
    menuBody.classList.toggle('nav__menu-active')
    burgerButton.classList.toggle('nav__icon-active')
    closeMenuButton.classList.toggle('nav__icon-active')
    menuHeader.classList.toggle('nav__head-active')
  })
}

if (closeMenuButton) {
  closeMenuButton.addEventListener('click', function (e) {
    menuBody.classList.toggle('nav__menu-active')
    burgerButton.classList.toggle('nav__icon-active')
    closeMenuButton.classList.toggle('nav__icon-active')
    menuHeader.classList.toggle('nav__head-active')
  })
}

// настройки карусели Swiper

new Swiper('.action__list', {
  loop: true,

  navigation: {
    enabled: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 4,
  spaceBetween: 70,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 18,
      navigation: {
        enabled: false,
      },
    },
    320: {
      slidesPerView: 2.5,
      spaceBetween: 18,
      navigation: {
        enabled: false,
      },
    },
    500: {
      slidesPerView: 3.5,
      spaceBetween: 30,
      navigation: {
        enabled: true,
      },
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 70,
      navigation: {
        enabled: true,
      },
    },
  },

});

// Модальные окна

// микро-библиотека closest для поиска родителя с классом .modal
!function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;) { if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {

  const modalButtons = document.querySelectorAll('.js-open-modal')
  const overlay = document.querySelector('.js-overlay-modal')
  const closeButtons = document.querySelectorAll('.js-modal-close')

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      const modalId = this.getAttribute('data-modal')
      const modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]')

      modalElem.classList.add('active');
      overlay.classList.add('active');
    });

  });


  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      const parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });

  });

  document.body.addEventListener('keyup', function (e) {
    const key = e.keyCode;

    if (key == 27) {
      document.querySelector('.modal.active').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
    };
  }, false);

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
  });

}); 