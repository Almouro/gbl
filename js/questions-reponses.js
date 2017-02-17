(function($) {
  if (window.location.pathname !== '/questions-reponses/') return;

  var images = $('.entry-content img')
  images.each(function(index) {
    var image = $(images[index]);
    var nextImage = $(images[index + 1]);
    var associatedText = image.parent().first().nextUntil(nextImage.parent());

    associatedText.hide();
    image.click(function() {
      image.parent().first().nextUntil(nextImage.parent()).fadeToggle();
    });
  });
})(jQuery);
