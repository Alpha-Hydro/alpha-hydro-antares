(($) ->
  height = 200
  $('.categories-list-item').each ->
    e = $(this)
    height = e.height() if e.height() > height
    e.height(height)
) jQuery