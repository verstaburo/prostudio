const $ = window.$;

export default function mixContent() {
  function NewsCards() {
    this.grid = $('.js-mix');
    this.storage = $('.js-storage');
    this.orderId = 'data-order-id';
  }

  NewsCards.prototype.getLowestColumn = function (columns) {
    const sortedColumns = columns.sort((a, b) => {
      const res = $(a).outerHeight() - $(b).outerHeight();
      return res;
    });
    return sortedColumns[0];
  };

  NewsCards.prototype.sortBlocks = function (blocks) {
    const self = this;
    return blocks.sort((a, b) => {
      const res = Number($(a).attr(self.orderId)) - Number($(b).attr(self.orderId));
      return res;
    });
  };

  NewsCards.prototype.setOrderId = function (blocks) {
    const self = this;
    // const orderedBlocks = blocks.filter('[data-order-id]');
    const orderedBlocks = blocks.filter('[data-order-id]').not('.card-journal_popular');
    let index = $(orderedBlocks).length > 0 ? $(orderedBlocks).length + 1 : 1;
    const indexPopular = Number($('.card-journal_popular').attr(self.orderId));
    // console.log(indexPopular);

    blocks.each(function () {
      const block = $(this);

      if (block.attr(self.orderId)) {
        return;
      }

      if (index === indexPopular) {
        index += 1;
      }

      block.attr(self.orderId, index);
      index += 1;
    });
  };

  NewsCards.prototype.sort = function () {
    const self = this;

    if (!self.grid.length) {
      return;
    }

    const columns = self.grid.find('.grid-list__item:visible');
    let blocks = self.storage.find('.card-journal');
    const gridBlocks = self.grid.find('.card-journal');
    $.merge(blocks, gridBlocks);
    blocks.each(function () {
      $(this).appendTo(self.storage);
    });
    blocks = self.storage.find('.card-journal');

    self.setOrderId(blocks);

    const sortedBlocks = self.sortBlocks(blocks);

    sortedBlocks
        .each(function () {
          $(this).appendTo(self.getLowestColumn(columns));
        });
  };

  const news = new NewsCards();
  if ($(window).width() < 1310) {
    $('.card-journal_popular').attr(news.orderId, 2);
  } else {
    $('.card-journal_popular').attr(news.orderId, 3);
  }
  news.sort();
  window.news = news;

  $(window).on('resize', () => {
    news.sort();
  });
}
