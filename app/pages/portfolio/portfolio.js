const $ = window.$;

export default function portfolioFilter() {
  $('.js-portfolio-filer').click((e) => {
    const self = e.target;
    $(self).addClass('portfolio__filter_active').siblings().removeClass('portfolio__filter_active');
    const filterTag = $(self).html();
    $('.card-portfolio').removeClass('is-active').hide();

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
