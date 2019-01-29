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

  $('.slideToUnlock').each(function () {
    document.querySelector("input[type=\"range\"]").onmouseup = function() {
      var theRange = this.value;
      if (theRange == 100) {
        unlock();
      }

      document.init = setInterval(function() {
        if(document.querySelector("input[type=\"range\"]").value != 0) {
          document.querySelector("input[type=\"range\"]").value = theRange--;
        }
      }, 1);
    };

    document.querySelector("input[type=\"range\"]").onmousedown = function() {
      clearInterval(document.init);
    };

    function unlock() {
      document.querySelector(".js-fancybox").click();
    };
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

});

/* eslint-enable */
