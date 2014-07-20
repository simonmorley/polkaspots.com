$(".next").click(function(event) {
  next = $(".next").data("next")
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

contactMap = function() {
  if ($("#contact_map").length > 0) {
    var map;
    map = L.mapbox.map('contact_map', 'polkaspots.g8m4acg0', {
      tileLayer: {
        detectRetina: true
      }
    }).setView([51.522097,-0.104423], 15);

    var featureLayer = L.mapbox.featureLayer({
      type: 'FeatureCollection',
      features: [{
          type: 'Feature',
          properties: {
              'from': 'Duke Point',
              'to': 'Tsawwassen',
              'marker-color': '#548cba',
              'marker-size': 'large',
              'marker-symbol': 'star'
          },
          geometry: {
              type: 'Point',
              coordinates: [-0.104423, 51.522097]
          }
      }]
    }).addTo(map);

    featureLayer.eachLayer(function(layer) {
      var content = '<h3 class="contact_map">PolkaSpots Supafly Wi-Fi<h3><p><b>Drop by for some tea: </b><br><br>62 Britton Street<br>London EC1M 5UY</p><p>You can send presents here too</p>'
      layer.bindPopup(content);
    });
  }
};

$(document).ready(scrollInit);
$(document).ready(contactMap);
