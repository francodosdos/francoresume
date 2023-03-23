function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 11.6978352, lng: 122.6217542};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Cebu, PH' // Title Location
    });
}