var iss_now_URL = "http://api.open-notify.org/iss-now.json";
var issLocation;

fetch(iss_now_URL, {method: "GET"})
    .then(function(rep){
        return rep.json();
    })
    .then(function(data){
        var latitude = data.iss_position.latitude;
        var latitudeAsInteger = parseInt(latitude, 10);
        var longitude = data.iss_position.longitude;
        var longitudeAsInteger = parseInt(longitude, 10);
        issLocation = {lat: latitudeAsInteger, lng: longitudeAsInteger};
        return issLocation;
    })
    .then(function(issLocation){
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: issLocation
        });
        var marker = new google.maps.Marker({
          position: issLocation,
          map: map,
          icon: 'img/iss-icon-marker.png',
        });
      }
      initMap();
    })

