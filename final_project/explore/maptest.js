function initialize() {
var istanbul = new google.maps.LatLng(41.007884, 28.968887);
var mapOptions = {
  zoom: 5,
  center: istanbul,
  mapTypeId: google.maps.MapTypeId.TERRAIN
}

var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

var ctaLayer = new google.maps.KmlLayer('http://asmorton.github.io/PlagueMap.kml');
ctaLayer.setMap(map);

var stylesArray = [
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      {visibility: 'off'},
      // etc...
    ]
  },
  {
    featureType: '',
    // etc...
  }
]
}
google.maps.event.addDomListener(window, 'load', initialize);






