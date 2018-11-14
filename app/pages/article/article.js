/* eslint-disable */
//
// RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
// LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/


export default function Article() {

  var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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
      $(this).parent().css('margin-top', '24px');

      if (index === 0) {
        $(this).parent().css('margin-top', '50px');
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
    const scroll_offset = ($(window).scrollTop())  / ($(document).height() - $(window).height());
    // console.log(scroll_offset);
    $('.progress').show();
    $('.js-progress').css('transform', 'scaleX('+ scroll_offset +')');

    if (scroll_offset === 0) {
      $('.progress').hide();
    }
  });
  // $(window).scrollTop()

}


/* eslint-enable */
