initMap = ()->
  map = new google.maps.Map document.getElementById('map_canvas'),
    zoom : 16
    center :
      lat: 59.930348
      lng: 30.484946

  marker = new google.maps.Marker
    map: map
    place:
      location:
        lat: 59.930348
        lng: 30.484946
      query: 'Альфа-Гидро, Санкт-Петербург, Россия'
    attribution:
      source: 'Альфа-Гидро. Гидравлика'
      webUrl: 'http://www.alpha-hydro.com'

  infoWindow = new google.maps.InfoWindow
    content: 'Альфа-Гидро, Санкт-Петербург, ул. Кржижановского, д.12/1'

  marker.addListener 'click', ()->
    infoWindow.open map, marker



#  contentString = '<div style="color: #3e3e3e;"><b>«Альфа-Гидро»</b><br />г. Санкт-Петербург, ул. Кржижановского, д.12/1 </div>'
#  infowindow = new google.maps.InfoWindow content: contentString
#  marker = new google.maps.Marker position: myLatLng, map: map, title: 'Офис "Альфа-Гидро"'
#
#  google.maps.event.addListener  marker, 'click', ()->
#    infowindow.open(map, marker)

#  return map_init = true
#mapInit()
