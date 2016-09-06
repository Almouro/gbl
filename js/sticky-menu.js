(function($) {
  var stickyElement = $('nav');
  var stickyElementInitialOffset = null;
  var stickyElementHeight = null;

  var anchor = $('<div class="sticky-anchor" />');
  anchor.css('display', 'none');
  anchor.insertAfter(stickyElement);

  function init() {
    stickyElementInitialOffset = $('.site-branding').outerHeight();
    stickyElementHeight = stickyElement.outerHeight();
    anchor.height(stickyElementHeight);
    checkStickiness();
  }

  function checkStickiness() {
    if ($(window).scrollTop() > stickyElementInitialOffset){
      stickyElement.addClass('sticky');
      anchor.css('display', 'block');
    } else {
      stickyElement.removeClass('sticky');
      anchor.css('display', 'none');
    }
  }

  setTimeout(init, 500);
  $(window).resize(init);
  $(window).scroll(checkStickiness);
})(jQuery);
