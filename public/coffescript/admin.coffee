loadFile = (event)->
  reader = new FileReader()
  reader.onload = ()->
    output = document.getElementById 'image'
    output.src = reader.result
  reader.readAsDataURL event.target.files[0]

(($) ->
  $('[data-toggle="tooltip"]').tooltip()

  $('#image').click ()->
    $('#imageLoadFile').trigger 'click'
    false

  $('#imageLoadFile').change (event)->
    loadFile event

  $(document).on 'change', '#propertyId', ()->
    val = $(@).val()
    src = '/admin/pipeline/select-add-property'
    ajaxContent = $('.ajax-content')
    console.log val


    $.ajax
      url: src
      type: 'POST'
      dataType: 'html'
      data:
        'propertyId': val
      error: (jqXHR, textStatus, errorThrown) ->
        console.log "AJAX Error: #{textStatus}"
      success: (data, textStatus, jqXHR)->
        ajaxContent.html data
      false


) jQuery


