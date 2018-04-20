var iss_now_URL = "http://api.open-notify.org/iss-now.json";
var issLocationNow;

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
    })
    .then(function(issLocationNow){
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: issLocationNow
        });
        var marker = new google.maps.Marker({
          position: issLocationNow,
          map: map,
          icon: 'img/iss-icon-marker.png',
        });

        // how to set polylines
          // var issCoordinates = [
          //   issLocation1,
          //   issLocation2,
          //   issLocation3
          // ];
          // var issPath = new google.maps.Polyline({
          //   path: issCoordinates,
          //   geodesic: true,
          //   strokeColor: '#16161d',
          //   strokeOpacity: 0.5,
          //   strokeWeight: 3,
          // });
          // issPath.setMap(map);
      }
      initMap();
    })

