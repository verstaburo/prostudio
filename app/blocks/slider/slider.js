/* eslint-disable no-unused-vars */
// http://idangero.us/swiper/#.WcIu5oy0OHs
import * as Swiper from 'swiper/dist/js/swiper';

const $ = window.$;

export default function slider() {
  const Portfolio = new Swiper('.slider_portfolio .js-slider', {
    loop: true,
    speed: 700,
    effect: 'fade',
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

  const journalSlider = new Swiper('.js-slider.slider_journal', {
    loop: true,
    loopedSlides: 4,
    speed: 700,
    // autoplay: {
    //   delay: 2000,
    // },
    // slidesPerView: 1,
    slidesPerView: 'auto',
    spaceBetween: 27,
    navigation: {
      nextEl: '.journal-pag__next',
      prevEl: '.journal-pag__prev',
    },
    pagination: {
      el: '.slider__dots',
      clickable: true,
      paginationClickableClass: 'slider__dots_clickable',
      bulletClass: 'slider__dot',
      bulletActiveClass: 'active',
    },
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
  });

  const padPortfolio = new Swiper('.js-slider.slider_padportfolio', {
    // loop: true,
    // loopedSlides: 3,
    speed: 700,
    // autoplay: {
    //   delay: 2000,
    // },
    // slidesPerView: 'auto',
    // slidesPerView: 'auto',
    // spaceBetween: 27,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 173.6,
      depth: 50,
      modifier: 3,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.padportfolio__next',
      // prevEl: '.journal-pag__prev',
    },
    pagination: {
      el: '.padportfolio__pag',
      // el: '.slider__dots',
      clickable: true,
      dynamicBullets: true,
      // dynamicMainBullets: 6,
      paginationClickableClass: 'slider__dots_clickable',
      bulletClass: 'slider__dot',
      bulletActiveClass: 'active',
      // renderBullet(index, className) {
      //   let bullet = '';
      //   for (let i = 0; i < 4; i += 1) {
      //     bullet = bullet + `<span class="${className}">0${index + 1}</span>`;
      //     // return `<span class="${className}">0${index + 1}</span>`;
      //   }
      //   return `<span class="${className}">0${index + 1}</span>`;
      // },
    },
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
    on: {
      slideChange(index) {
        // $('.swiper-slide-active').fadeOut();
        // console.log(index);
        $('.swiper-slide').css('opacity', 1);
        $('.swiper-slide-active').css('opacity', 0);
      },
    },
  });

  const advantagelSlider = new Swiper('.js-slider.slider_advantage', {
    // loop: true,
    // loopedSlides: 4,
    speed: 700,
    // autoplay: {
    //   delay: 2000,
    // },
    // slidesPerView: 1,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 190,
      depth: 50,
      modifier: 3,
      slideShadows: false,
    },
    // slidesPerView: 'auto',
    // spaceBetween: 27,
    navigation: {
      nextEl: '.journal-pag__next',
      prevEl: '.journal-pag__prev',
    },
    pagination: {
      el: '.slider__dots',
      clickable: true,
      paginationClickableClass: 'slider__dots_clickable',
      bulletClass: 'slider__dot',
      bulletActiveClass: 'active',
    },
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
  });

  const padjournalSlider = new Swiper('.js-slider.slider_padjournal', {
    // loop: true,
    // loopedSlides: 4,
    speed: 700,
    // autoplay: {
    //   delay: 2000,
    // },
    // slidesPerView: 'auto',
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 190,
      depth: 50,
      modifier: 3,
      slideShadows: false,
    },
    // slidesPerView: 'auto',
    // spaceBetween: 27,
    navigation: {
      nextEl: '.journal-pag__next',
      prevEl: '.journal-pag__prev',
    },
    pagination: {
      el: '.slider__dots',
      clickable: true,
      paginationClickableClass: 'slider__dots_clickable',
      bulletClass: 'slider__dot',
      bulletActiveClass: 'active',
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
