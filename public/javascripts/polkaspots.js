$(".chevron").click(function(event) {
  console.log(event.target.getAttribute('data-name'))
  next = "slide-2"
  $('html, body').animate({
    scrollTop: $("#" + next).offset().top
  }, 2000);
});

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
