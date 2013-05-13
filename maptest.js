var map;
var src = 'PlagueMap.kml';

/**
 * Initializes the map and calls the function that creates polylines.
 */
function initialize() {
  map = new google.maps.Map(document.getElementById('map_canvas'), {
    center: new google.maps.LatLng(41.007884, 28.968887),
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });
  loadKmlLayer(src, map);
}

/**
 * Adds a KMLLayer based on the URL passed. Clicking on a marker
 * results in the balloon content being loaded into the right-hand div.
 * @param {string} src A URL for a KML file.
 */
function loadKmlLayer(src, map) {
  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
  google.maps.event.addListener(kmlLayer, 'click', function(event) {
    var content = event.featureData.infoWindowHtml;
    var testimonial = document.getElementById('capture');
    testimonial.innerHTML = content;
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

/*function initialize() {

var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

// Resize stuff...
google.maps.event.addDomListener(window, "resize", function() {
var center = map.getCenter();
google.maps.event.trigger(map, "resize");
map.setCenter(center); 
}*/
