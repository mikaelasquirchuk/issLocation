var currentLocation;
var map = new google.maps.Map(document.getElementById('map-canvas'), {
  zoom: 5,
  center: currentLocation,
  mapTypeId: google.maps.MapTypeId.HYBRID
});
var marker = new google.maps.Marker({
  position: currentLocation, 
  map: map,
  icon: "img/iss-icon-marker.png"
});

marker.setMap(map);

function getISSLocation () {
  fetch("http://api.open-notify.org/iss-now.json", {method: "GET"})
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      var currentLatitude = parseInt(data.iss_position.latitude,10);
      var currentLongitude = parseInt(data.iss_position.longitude, 10);
      currentLocation = {lat: currentLatitude, lng: currentLongitude};
      return currentLocation; 
    })
    .then(function(){
      marker.setPosition(currentLocation);
      map.panTo(currentLocation)
      setTimeout(getISSLocation,1000);
    })
}

getISSLocation();
