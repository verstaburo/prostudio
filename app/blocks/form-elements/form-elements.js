// https://github.com/jshjohnson/Choices
import Choices from 'choices.js';

// https://github.com/leongersen/noUiSlider
import noUiSlider from 'nouislider';

// https://github.com/t1m0n/air-datepicker
import 'air-datepicker';

// https://github.com/RobinHerbots/Inputmask
import Inputmask from 'inputmask';

import autosize from 'autosize';

const $ = window.$;

export function textareabox() {
  autosize($('.js-autosize'));
}

export function selects() {
  /* eslint-disable no-unused-vars */
  if ($('.js-select').length) {
    window.choices = new Choices('.js-select', {
      searchEnabled: false,
      itemSelectText: '',
    });
  }
  /* eslint-enable no-unused-vars */
}

$('.inputbox .input, .inputbox .textarea').focus(function () {
  const placeHolder = $(this).next('.inputbox__placeholder');
  placeHolder.addClass('inputbox__placeholder_active');
});

$('.inputbox .input, .inputbox .textarea').focusout(function () {
  const placeHolder = $(this).next('.inputbox__placeholder');
  if ($(this).val().length >= 1) {
    placeHolder.addClass('inputbox__placeholder_active');
  } else {
    placeHolder.removeClass('inputbox__placeholder_active');
  }
});

$('.textareabox .textarea').focus(function () {
  const placeHolder = $(this).next('.textareabox__placeholder');
  placeHolder.addClass('textareabox__placeholder_active');
});

$('.textareabox .textarea').focusout(function () {
  const placeHolder = $(this).next('.textareabox__placeholder');
  if ($(this).val().length >= 1) {
    placeHolder.addClass('textareabox__placeholder_active');
  } else {
    placeHolder.removeClass('textareabox__placeholder_active');
  }
});

export function sliders() {
  // Параметры берутся из дата-атрибутов
  if ($('.js-range').length < 1) return;

  const slider = $('.js-range')[0];

  noUiSlider.create(slider, {
    start: 0,
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
    animate: true,
    animationDuration: 300,
  });

  function unlock() {
    document.querySelector('.js-fancybox').click();
  }

  slider.noUiSlider.on('update', () => {
    const theRange = parseInt(slider.noUiSlider.get(), 0);

    if (theRange === 100) {
      unlock();
    }
  });

  slider.noUiSlider.on('end', () => {
    slider.noUiSlider.set(0);
  });
}

export function datepicker() {
  $('.js-datepicker').each(function () {
    const el = $(this);

    el.datepicker();
  });
}

export function inputmask() {
  Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
  }).mask('input[data-type="tel"]');

  Inputmask({
    alias: 'email',
  }).mask('input[data-type="email"]');
}

export function numberinput() {
  $(document).on('click', '.js-numberbox-minus, .js-numberbox-plus', function (e) {
    e.preventDefault();

    const input = $(this).parent().find('.js-numberbox-input');
    let val = +input.val();
    const minus = $(this).attr('class').includes('minus') || false;

    if (!val.length) {
      input.val(1);
    }

    if (minus) {
      input.val(val > 0 ? (val -= 1) : 0);
    } else {
      input.val(val += 1);
    }
  });

  $(document).on('keyup change', '.js-numberbox-input', function () {
    this.value = this.value.replace(/[^\d]/, '');
    if ($(this).val() < 0) $(this).val(0);
  });
}

export function inputfile() {
  $('.inputbox_file input[type=file]').change(function () {
    const filename = $(this).val().replace(/.*\\/, '');
    $('.filename').html(filename);
  });
}
