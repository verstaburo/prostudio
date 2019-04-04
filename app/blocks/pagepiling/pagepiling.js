/* eslint-disable */
// https://github.com/alvarotrigo/pagePiling.js
import * as Pagepiling from 'pagepiling.js/dist/jquery.pagepiling.min';

const $ = window.$;
const velocity = window.velocity;

export default function mainSlider() {
  $.fn.actualSize = function (margins) {
    var el = this,
      previousCSS = el.attr('style'),
      size;

    el.css({
      position: 'absolute',
      visibility: 'hidden',
      display: 'block',
    });

    size = {
      'width': el.width(),
      'height': el.height(),
      'innerWidth': el.innerWidth(),
      'innerHeight': el.innerHeight(),
      'outerWidth': el.outerWidth(margins || false),
      'outerHeight': el.outerHeight(margins || false),
    };

    el.attr('style', previousCSS ? previousCSS : '');

    return size;
  };

///////////////////////////////////////////////////////

  $.fn.smartToggle = function (dimension, options) {
    var el = this,
      options = options || '',
      toggleXClass = 'toggled-x',
      toggleYClass = 'toggled-y',
      easing = options.easing || 'swing',
      timing = options.timing || 500,
      type = options.display || 'block', // Display 'block' by default
      param = dimension || 'height', // Animate height by default
      size = el.actualSize(),
      toggledX = el.hasClass(toggleXClass),
      toggledY = el.hasClass(toggleYClass),
      realWidth = size.width,
      realHeight = size.height,
      isWidth = (param != 'height'),
      isHeight = (param != 'width');

    function elStart() {
      el.css({
        width: toggledX || (isHeight && !isWidth) ? realWidth : 0,
        height: toggledY || (!isHeight && isWidth) ? realHeight : 0,
      });
    };

    function animEnd() {
      el.css({
        display: toggledX || toggledY ? '' : type,
        height: toggledY || (!isHeight && isWidth) ? 'auto' : '',
        width: toggledX || (isHeight && !isWidth) ? 'auto' : '',
      });
    };

    el.show(0, elStart).velocity({
      height: toggledY ? 0 : realHeight + 'px',
      width: toggledX ? 0 : realWidth + 'px',
    }, {
      duration: timing,
      easing: easing,
      complete: animEnd,
    });

    !toggledX && isWidth ? el.addClass(toggleXClass) : el.removeClass(toggleXClass);
    !toggledY && isHeight ? el.addClass(toggleYClass) : el.removeClass(toggleYClass);
  }

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
          if ($('.header .buttons__project').hasClass('toggled-x')) {
            $('.header .buttons__project').smartToggle('width', {easing: 'ease', timing: 300, display: 'inline-block'});
            $('.header .buttons__project').css({ opacity: 0 });
          }

          //if ($('.header .buttons__ico').hasClass('toggled-x')) {
          //  if ($(window).width() <= 1500) {
          //    $('.header .buttons__ico').smartToggle('width', {easing: 'ease', timing: 300, display: 'inline-block'});
          //  }
          //}
        }

        if (index === 1) {
          headerTimeout = setTimeout(() => {
            $('.header__container').addClass('header__container_wide');
            $('.header').addClass('header_wide');
            if (!$('.header .buttons__project').hasClass('toggled-x')) {
              $('.header .buttons__project').smartToggle('width', {easing: 'ease', timing: 300, display: 'inline-block'});
              setTimeout(function () { $('.header .buttons__project').css({ opacity: 1 }); }, 300);
            }

            //if (!$('.header .buttons__ico').hasClass('toggled-x')) {
            //  if ($(window).width() <= 1500) {
            //    $('.header .buttons__ico').smartToggle('width', {easing: 'ease', timing: 300, display: 'inline-block'});
            //  }
            //}
          }, 700);
        }
      },
    });

    $.fn.pagepiling.moveTo(2);

    setTimeout(() => {
      $.fn.pagepiling.moveTo(1);

      window.headerIndex();
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

/* eslint-enable */
