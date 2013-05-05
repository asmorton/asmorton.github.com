function initialize() {
  var istanbul = new google.maps.LatLng(41.007884, 28.968887);
  var mapOptions = {
    zoom: 8,
    center: istanbul
    mapTypeId: google.maps.MapTypeId.TERRAIN
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var ctaLayer = new google.maps.KmlLayer({
    url: 'PlagueMap.kml'
  });
  ctaLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);