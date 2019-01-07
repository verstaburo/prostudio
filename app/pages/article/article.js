/* eslint-disable */
//
// RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
// LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/


export default function Article() {

  let path = window.location.pathname;
  let page = path.split("/").pop();

  $('.principles__item').hover(function(){
    $(this).removeClass('active');
    $(this).siblings().removeClass('active');
  });

  if (page === 'article.html') {

    var disqus_config = function () {
      this.page.url = 'https://verstaburo.github.io/prostudio/article.html';  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = 'test_page'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function () { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://prostudio-1.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();

    $('.content-zone p a').each(function (index) {
      if ($(this).siblings().length === 0) {
        // console.log('piu')
        // $(this).css('margin-top', '24px');
        $(this).parent().addClass('content-zone__linkblock');

        if (index === 0) {
          $(this).parent().addClass('content-zone__linkblock');
        }

      }
    });

    if ($(window).width() < 768) {
      $('.card-journal').each(function (index) {
        if (index > 2) {
          $(this).hide();
        }
      })
    }

    $(window).scroll(function () {
      const scroll_offset = ($(window).scrollTop() - $('.head').height()) / ($('.section-article').height());
      $('.progress').show();
      $('.js-progress').css('transform', 'scaleX(' + scroll_offset + ')');

      if (window.pageYOffset < $('.head').height() || scroll_offset >= 1) {
        hideProgressBar();
      }

      if (window.pageYOffset >= $('.head').height() && scroll_offset < 1) {
        showProgressBar();
      }

      function hideProgressBar() {
        $('.progress').removeClass('active');
        $('.header').css('border-bottom-color', '#dcdcdc');
      }

      function showProgressBar() {
        $('.progress').addClass('active');
        $('.header').css('border-bottom-color', 'transparent');
      }
    });

  }
}


/* eslint-enable */
