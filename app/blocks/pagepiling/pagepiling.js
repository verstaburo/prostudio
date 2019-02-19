/* eslint-disable no-unused-vars */
// https://github.com/alvarotrigo/pagePiling.js
import * as Pagepiling from 'pagepiling.js/dist/jquery.pagepiling.min';

const $ = window.$;

export default function mainSlider() {
  if ($('#pagepiling')[0]) {
    let headerTimeout;

    $('#pagepiling').pagepiling({
      menu: null,
      direction: 'vertical',
      verticalCentered: true,
      sectionsColor: ['white', 'white', 'white', 'white', 'white'],
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
      onLeave(index, nextIndex, direction) {
        if (nextIndex === 1) {
          clearTimeout(headerTimeout);
          $('.header__container').removeClass('header__container_wide');
          $('.header').removeClass('header_wide');
        }

        if (index === 1) {
          headerTimeout = setTimeout(() => {
            $('.header__container').addClass('header__container_wide');
            $('.header').addClass('header_wide');
          }, 700);
        }
      },
    });

    $.fn.pagepiling.moveTo(2);

    setTimeout(() => {
      $.fn.pagepiling.moveTo(1);
    }, 1);

    setTimeout(() => {
      $('#pagepiling').addClass('is-active');
    }, 500);

    $(document).find('html').addClass('html_index');

    $('.slide-footer__scroll').click(() => {
      $.fn.pagepiling.moveSectionDown();
    });
  }
}

/* eslint-enable no-unused-vars */
