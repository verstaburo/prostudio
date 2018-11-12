const $ = window.$;

export default function portfolioFilter() {
  $('.js-portfolio-filer').click((e) => {
    // console.log(e.target);
    // const self = this;
    const filterTag = $(e.target).html();
    // console.log(filterTag);
    // $('.card-portfolio').each((index, element) => {
    $('.card-portfolio').filter((index, element) => {
      // return $("strong", this).length === 1;
      // return 0;
      // console.log(index);
      // $(element).
      // const item = $(this);
      const tag = $(element).find('.card-portfolio__tags').html();
      // if (tag.indexOf(filterTag) >= 0) {
      //   console.log('совпадение есть!');
      // }
      return !(tag.indexOf(filterTag) >= 0);
      // console.log(tag);
      // console.log($('.card-portfolio__tags', this).html());
      // return index % 3 === 2;
      // return index % 3 === 2;
    }).hide();
    // $('.card-portfolio').filter('.card-portfolio_wide').hide();
  });
}
