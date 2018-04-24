function initMap() {
  var uluru = {lat: 0, lng: 0};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: uluru
  });
};

initMap();

var iss_now_URL = "http://api.open-notify.org/iss-now.json";

function getISSLocation() {
  fetch(iss_now_URL, {method: "GET"})
    .then(function(rep){
        return rep.json();
    })
    .then(function(data){
        var currentLatitude = data.iss_position.latitude;
        var currentLatitudeAsInteger = parseInt(currentLatitude,10);
        var currentLongitude = data.iss_position.longitude;
        var currentLongitudeAsInteger = parseInt(currentLongitude, 10);
        issLocationNow = {lat: currentLatitudeAsInteger, lng: currentLongitudeAsInteger};
        return issLocationNow
        var marker = new google.maps.Marker({
          position: issLocationNow,
          map: map,
          icon: 'img/iss-icon-marker.png',
        });
    })
}

getISSLocation();


