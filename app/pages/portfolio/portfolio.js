const $ = window.$;

export default function portfolioFilter() {
  $('.js-portfolio-filer, .card-portfolio__tags span').click((e) => {
    e.preventDefault();
    const self = e.target;
    $(self).addClass('is-active').siblings().removeClass('is-active');
    const filterTag = $(self).text().replace('#', '');
    $('.card-portfolio').removeClass('is-active').hide();

    $('.js-portfolio-filer').each(function () {
      if ($(this).text() === filterTag) {
        $(this).addClass('is-active').siblings().removeClass('is-active');
      }
    });

    if (filterTag !== 'Все') {
      $('.card-portfolio').filter((index, element) => {
        const tag = $(element).find('.card-portfolio__tags').html();
        return (tag.indexOf(filterTag) >= 0);
      }).show(0, function () {
        $(this).css('display', 'flex');
        $(this).addClass('is-active');
      });
    } else {
      $('.card-portfolio').show(0, function () {
        $(this).css('display', 'flex');
        $(this).addClass('is-active');
      });
    }
  });
}
