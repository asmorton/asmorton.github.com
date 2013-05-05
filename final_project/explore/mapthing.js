      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(41.007884, 28.968887),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
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
      google.maps.event.addDomListener(window, 'load', initialize);
