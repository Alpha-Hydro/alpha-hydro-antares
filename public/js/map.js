function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat: 59.9306, lng: 30.484946}
    });

    var marker = new google.maps.Marker({
        map: map,
        // Define the place with a location, and a query string.
        place: {
            location: {lat: 59.930348, lng: 30.484946},
            query: 'Alpha-Hydro, Санкт-Петербург, Россия'

        },
        // Attributions help users find your site again.
        attribution: {
            source: 'Альфа Гидро. Гидравлика',
            webUrl: 'http://www.alpha-hydro.com'
        }
    });

    // Construct a new InfoWindow.
    var infoWindow = new google.maps.InfoWindow({
        content: '<h3>Альфа-Гидро</h3> Санкт-Петербург, ул. Кржижановского, д.12/1'
    });

    // Opens the InfoWindow when marker is clicked.
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}