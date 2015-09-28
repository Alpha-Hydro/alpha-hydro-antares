map_init = false
mapInit = ()->
  return false if map_init

  myLatLng = new google.maps.LatLng(59.930348, 30.484946)
  myOptions =
    zoom : 16
    center : myLatLng
    mapTypeId : google.maps.MapTypeId.ROADMAP

  map = new google.maps.Map(document.getElementById('map_canvas'),myOptions)
  contentString = '<div style="color: #3e3e3e;"><b>«Альфа-Гидро»</b><br />г. Санкт-Петербург, ул. Кржижановского, д.12/1 </div>'
  infowindow = new google.maps.InfoWindow content: contentString
  marker = new google.maps.Marker position: myLatLng, map: map, title: 'Офис "Альфа-Гидро"'

  google.maps.event.addListener  marker, 'click', ()->
    infowindow.open(map, marker)

  return map_init = true

