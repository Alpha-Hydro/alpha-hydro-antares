loadFile = (event, id)->
  reader = new FileReader()
  reader.onload = ()->
    output = document.getElementById id
    output.value = event.target.value
    output.src = reader.result
  reader.readAsDataURL event.target.files[0]


(($) ->
  $('[data-toggle="tooltip"]').tooltip()

#  $(document).one 'change', 'form#itemEdit', ()->
#    $('#saveItemEdit').removeClass 'hidden'
#      .addClass 'show'
#    console.log 'OK'

  $('form#itemEdit').change ->
    $('#saveItemEdit').removeClass 'hidden'
      .addClass 'show'

  $('#imageLoad').click ()->
    $('#imageLoadFile').trigger 'click'
    false

  $('#imageLoadFile').change (event)->
    loadFile event,'imageLoad'

  $('#imageDraftLoad').click ()->
    $('#imageDraftLoadFile').trigger 'click'
    false

  $('#imageDraftLoadFile').change (event)->
    loadFile event,'imageDraftLoad'

  $('#imageTableLoadBtn').click ()->
    $('#imageTableLoadFile').trigger 'click'
    false

  $('#imageTableLoadFile').change (event)->
    loadFile event,'imageTable'

) jQuery


