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
    // on: {
    //   slideChange(index) {
    //     // $('.swiper-slide-active').fadeOut();
    //     // console.log(index);
    //     $('.swiper-slide').css('opacity', 1);
    //     $('.swiper-slide-active').css('opacity', 0);
    //   },
    // },
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

  const caseSlider = new Swiper('.js-slider.slider_case', {
    loop: true,
    // loopedSlides: 4,
    speed: 700,
    simulateTouch: false,
    // autoplay: {
    //   delay: 2000,
    // },
    autoHeight: true,
    slidesPerView: 1,
    // effect: 'coverflow',
    // slidesPerView: 'auto',
    // spaceBetween: 27,
    navigation: {
      nextEl: '.case__next',
      prevEl: '.case__prev',
    },
    // pagination: {
    //   el: '.slider__dots',
    //   clickable: true,
    //   paginationClickableClass: 'slider__dots_clickable',
    //   bulletClass: 'slider__dot',
    //   bulletActiveClass: 'active',
    // },
    roundLengths: true,
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //   },
    // },
  });

  const aboutSlider = new Swiper('.about__slider .js-slider', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.about__pag',
      type: 'custom',
      renderCustom(swiper, current, total) {
        return `<span class="swiper-pagination-current">0${current}</span><span class="swiper-pagination-total">0${total}</span>`;
      },
    },
    navigation: {
      nextEl: '.about__next',
      prevEl: '.about__prev',
    },
  });

  const teamSlider = new Swiper('.js-slider.team__slider', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    centerInsufficientSlides: true,
    pagination: {
      el: '.slider__dots',
      clickable: true,
    },
  });

  const principlesSlider = new Swiper('.principles__slider .js-slider', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    centerInsufficientSlides: true,
    pagination: {
      el: '.principles__pag',
      // type: 'custom',
      // renderCustom(swiper, current, total) {
      //   return `<span class="principles__slidenum">0${current}</span>`;
      // },
      bulletClass: 'principles__slidenum',
      bulletActiveClass: 'principles__slidenum_active',
      clickable: true,
      renderBullet(index, className) {
        // index+=1;
        const num = index + 1;
        return `<span class="${className}">0${num}</span>`;
      },
    },
  });

  const uslugiHowSlider = new Swiper('.js-slider.usluga-how__slider ', {
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    centerInsufficientSlides: true,
    pagination: {
      el: '.slider__dots',
      clickable: true,
    },
  });

  const uslugiStepsSlider = new Swiper('.js-slider.usluga-steps__slider', {
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    navigation: {
      nextEl: '.usluga-steps__next',
      prevEl: '.usluga-steps__prev',
    },
    pagination: {
      el: '.usluga-steps__dots',
      clickable: true,
    },
  });

  const icoUslugiSlider = new Swiper('.js-slider.ico-uslugi-slider', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.ico-uslugi__button_right',
      prevEl: '.ico-uslugi__button_left',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
  });

  const icoworksSlider = new Swiper('.js-slider.ico-works__slider', {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
      el: '.ico-works__slider-num',
      type: 'custom',
      renderCustom(swiper, current, total) {
        return `<span class="ico-works__slider-num__current">0${current}</span><span class="ico-works__slider-num__total">0${total}</span>`;
      },
    },
    navigation: {
      nextEl: '.ico-works__button_right',
      prevEl: '.ico-works__button_left',
    },
  });

  const icoPartnersSlider = new Swiper('.js-slider.ico-partners__slider', {
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    centerInsufficientSlides: true,
    pagination: {
      el: '.ico-partners__slider-pag',
      bulletClass: 'ico-partners__slider-pag-item',
      bulletActiveClass: 'ico-partners__slider-pag-item_active',
      clickable: true,
    },
  });
}
/* eslint-enable no-unused-vars */
