/* eslint-disable no-unused-vars */
// https://github.com/alvarotrigo/pagePiling.js
import * as Pagepiling from 'pagepiling.js/dist/jquery.pagepiling.min';

const $ = window.$;

export default function mainSlider() {
  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'vertical',
    // verticalCentered: true,
    sectionsColor: ['white', 'white', 'white'],
    anchors: [],
    scrollingSpeed: 700,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      // 'textColor': '#000',
      bulletsColor: '#d4d4d4',
      position: 'left',
      // 'tooltips': ['section1', 'section2', 'section3', 'section4']
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,
    afterLoad(anchorLink, index) {
      if (index === 1) {
        $('.header__container').removeClass('header__container_wide');
        $('.header').removeClass('header_wide');
        $('.slider-pag').show();
        // alert('Section 3 ended loading');
      }
      if (index === 2) {
        $('.header__container').addClass('header__container_wide');
        $('.header').addClass('header_wide');
        $('.slider-pag').hide();
        // alert('Section 3 ended loading');
      }
    },
  });
}

/* eslint-enable no-unused-vars */
