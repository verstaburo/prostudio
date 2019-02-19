// http://fancyapps.com/fancybox/3/
/* eslint-disable */
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../js-functions/freeze';

const $ = window.$;

export default function popups() {
  $('.js-fancybox').fancybox({
    afterLoad: function () {
      freeze();
      $('.main-page-wrapper').addClass('is-active');
    },
    afterClose: function () {
      unfreeze();
      $('.main-page-wrapper').removeClass('is-active');
    },
    touch: false,
  });
}
/* eslint-enable */
