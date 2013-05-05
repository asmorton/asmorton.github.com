$(document).ready(function() {
	

$('#slideshow').cycle({ 
    fx:'turnRight',  
    fit:0,
    slideResize:1,
    timeout:0,
    next:'#arrow',
    prevNextEvent:'click.cycle',	   

});

function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(41.007884, 28.968887),
          zoom: 6,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
        var stylesArray = [
  {
    featureType: 'road',
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
      google.maps.event.addDomListener(window, 'load', initialize);
