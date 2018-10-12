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

});

/* eslint-enable */
