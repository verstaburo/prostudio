/* eslint-disable */

/**
 * REMOVE IT
 *
 * Скрипты можно писать тут, либо подключать с помощь https://github.com/coderhaoxin/gulp-file-include
 *
 * ВАЖНО: Файлы просто подключаются, без транспиляции (babel) минификации, поэтому нужно писать на ES5
 * Так же доступа к блокам, которые собираются с помощью вебпака не будет.
 */

// $(window).on('scroll', () => {
//   if ($('.header').hasClass('header_wide')) {
//     $('.buttons__wrap .buttons__project').css('display', 'block');
//     alert(true);
//   } else {
//     $('.buttons__wrap .buttons__project').css('display', 'none');
//     alert(false);
//   }
// });
var
  siteWidth,
  screenSize = $(window).width();

if (screenSize > 768) {
  if (screenSize < 768) siteWidth = 480;
  if (screenSize >= 768) siteWidth = 768;
  if (screenSize >= 1024) siteWidth = 1366;
  if (screenSize >= 1366) siteWidth = 1920;

  scale = screenSize / siteWidth;

  document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + siteWidth + ', initial-scale=' + scale + ', maximum-scale=' + scale);
}

$(document).ready(() => {

  function checkMenuLinks() {
    var links = document.querySelectorAll('.menu__item .link'),
          loc = window.location.href;

    for (var i = 0; i < links.length; i++) {
      links[i].href == loc ? links[i].classList.add('is-active') : false;
    }
  }
  checkMenuLinks();

  function switchLanguage() {
    var ckeckbox = document.querySelectorAll('.js-switcher-lang input[type="checkbox"]'),
        elem = document.querySelectorAll('.js-switcher-lang .switcher__value'),
        elemValue = elem[elem.length - 1].innerHTML.toLowerCase(),
        loc = window.location;

    for (var i = 0; i < ckeckbox.length; i++) {
      if (ckeckbox[i].checked) {
        loc.href = loc.origin + '/' + elemValue + loc.pathname;
      }
    }
  }

  $('.js-switcher-lang input[type="checkbox"]').click(() => {
    switchLanguage();
  });

  $('.langs .langs__lang').click((event) => {
    var self = event.currentTarget,
        value = $(self).text().toLowerCase(),
        activeClass = 'langs__lang_active',
        loc = window.location;

    $(self).addClass(activeClass).siblings().removeClass(activeClass);

    if (value == 'en') {
      loc.href = loc.origin + '/' + value + loc.pathname;
    }
  });

  $('.buttons__burger').click(() => {
    var header = document.querySelector('.header'),
        headerFixed = header.querySelector('.header_fixed'),
        bodyDark = document.querySelector('.body_dark');

    document.documentElement.classList.toggle('html_freeze');

    if (!header.contains(headerFixed)) {
      $('.header').toggleClass('header_fixed-light');
    }

    if (document.body.contains(bodyDark)) {
      $('.header').toggleClass('header_fixed-dark');
    }
  });

  $('.js-padmenu').click(() => {
    $('.buttons__burger').toggleClass('buttons__burger_active');
    $('.header__menu').toggleClass('header__menu_active');
    $('#pp-nav').toggleClass('hidden');
  });

  $('.header .buttons__ico').css({
    marginRight: - $('.header .buttons__project').outerWidth(),
  });

  $('.js-vacancy-hot .switcher__box').click(() => {
    $('.vacancy__title').not('.vacancy__title_hot').each(function () {
      $(this).parents('.accordion').slideToggle(300);
    })
  });

  $('.js-submit').click((e) => {
    e.preventDefault();
    $('.contact__step1').fadeOut();
    setTimeout(() => {
      $('.contact__step2').addClass('is-active');
    }, 500);

  });

  $('.js-popup-close').click(() => {
    $.fancybox.close();
    $('.contact__step1').fadeIn();
    $('.contact__step2').removeClass('is-active');
  });

  $('.uslugi-item_left .uslugi-item__icon-right').hover(function (){
    $(this).parents('.uslugi-item').find('.uslugi-item__img-wrap').css({
      transform: 'translate3d(10px, 0, 0)'
    });
  }, function () {
    $(this).parents('.uslugi-item').find('.uslugi-item__img-wrap').css({
      transform: 'translate3d(0, 0, 0)'
    });
  });

  if ($('.uslugi-item__icon-right').length > 0) {
    $('.uslugi-item__icon-right, .uslugi-item__img-wrap').hover(function () {
      $(this).parents('.uslugi-item').find('.uslugi-item__img-wrap, .uslugi-item__icon-right').addClass('is-active');
    }, function () {
      $(this).parents('.uslugi-item').find('.uslugi-item__img-wrap, .uslugi-item__icon-right').removeClass('is-active');
    });
  }

  $(window).on('load resize', function () {
    var header = $(document).find('.header_index');

    if ($(window).width() < 1310) {
      header.addClass('header_wide header_inner');
    } else {
      header.removeClass('header_wide header_inner');
    }
  });

  if (navigator.userAgent.indexOf('Mac') > 0) {
    $('body').addClass('mac-os');
  }

  $('window').on('load', function () {
    window.dispatchEvent(new Event('resize'));
  });

});

/* eslint-enable */
