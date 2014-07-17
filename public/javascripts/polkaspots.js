
scrollInit = function() {
  $window = $(window);
  $slide = $('.homeSlide');
  $slideTall = $('.homeSlideTall');
  $slideTall2 = $('.homeSlideTall2');
  $body = $('body');

  $body.imagesLoaded( function() {
    setTimeout(function() {
      adjustWindow();
      $body.removeClass('loading').addClass('loaded');
    }, 800);
  });
}

adjustWindow = function() {
  var s = skrollr.init({
    render: function(data) {}
  });

  winH = $window.height();

  if(winH <= 550) {
    winH = 550;
  }

  // Resize our slides
  $slide.height(winH);
  $slideTall.height(winH*2);
  $slideTall2.height(winH*3);

  // Refresh Skrollr after resizing our sections
  s.refresh($('.homeSlide'));

}

$(document).ready(scrollInit);
