/* eslint-disable */

/**
 * REMOVE IT
 *
 * Скрипты можно писать тут, либо подключать с помощь https://github.com/coderhaoxin/gulp-file-include
 *
 * ВАЖНО: Файлы просто подключаются, без транспиляции (babel) минификации, поэтому нужно писать на ES5
 * Так же доступа к блокам, которые собираются с помощью вебпака не будет.
 */

$(document).ready(() => {

  $('.js-padmenu').click(() => {
    // $('.burger').toggleClass('rbc-padmenu_active');
    $('.buttons__burger').toggleClass('buttons__burger_active');
    $('.header__menu').toggleClass('header__menu_active');
  });

  $('.js-vacancy-hot .switcher__box').click(() => {
    // e.preventDefault();
    // $('.js-vacancy-hot').on('click'() => {
    // console.log($('.vacancy__title').not('.vacancy__title_hot'));
    console.log('piu');
    $('.vacancy__title').not('.vacancy__title_hot').each(function () {

      $(this).parents('.accordion').toggle(300);
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
