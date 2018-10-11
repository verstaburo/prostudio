/* eslint-disable no-unused-vars */
// http://idangero.us/swiper/#.WcIu5oy0OHs
import * as Swiper from 'swiper/dist/js/swiper';

const $ = window.$;

export default function slider() {
  const mySlider = new Swiper('.js-slider', {
    loop: true,
    speed: 700,
    // autoplay: {
    //   delay: 2000,
    // },
    slidesPerView: 1,
    navigation: {
      nextEl: '.slider__button_next',
      prevEl: '.slider__button_prev',
    },
    pagination: {
      // el: '.slider__dots',
      el: '.slider-pag',
      clickable: true,
      paginationClickableClass: 'slider__dots_clickable',
      // bulletClass: 'slider__dot',
      bulletClass: 'slider-pag__item',
      bulletActiveClass: 'active',
      renderBullet(index, className) {
        // return '<span class="' + className + '">' + (index + 1) + '</span>';
        return `<span class="${className}">0${index + 1}</span>`;
      },
    },
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
  });
}
/* eslint-enable no-unused-vars */
