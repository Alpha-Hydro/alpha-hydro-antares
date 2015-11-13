loadFile = (event, id)->
  reader = new FileReader()
  reader.onload = ()->
    output = document.getElementById id
    output.value = event.target.value
    output.src = reader.result
  reader.readAsDataURL event.target.files[0]


(($) ->
  $('[data-toggle="tooltip"]').tooltip()

  $(document).one 'change', 'form#itemEdit', ()->
    $('#saveItemEdit').removeClass 'hidden'
      .addClass 'show'
#    console.log 'OK'

  $('#image').click ()->
    $('#imageLoadFile').trigger 'click'
    false

  $('#imageLoadFile').change (event)->
    loadFile event,'image'

  $('#imageDraft').click ()->
    $('#imageDraftLoadFile').trigger 'click'
    false

  $('#imageDraftLoadFile').change (event)->
    loadFile event,'imageDraft'

  $('#imageTableLoadBtn').click ()->
    $('#imageTableLoadFile').trigger 'click'
    false

  $('#imageTableLoadFile').change (event)->
    loadFile event,'imageTable'

  $(document).on 'change', '#propertyId', ()->
    val = $(@).val()
    src = '/admin/pipeline/select-add-property'
    ajaxContent = $('#ajaxContent')
#    console.log val
    getInput(src, val, ajaxContent) if val isnt 0

  getInput = (src, val, ajaxContent)->
    $.ajax
      url: src
      type: 'POST'
      dataType: 'html'
      data:
        'propertyId': val
      error: (jqXHR, textStatus, errorThrown) ->
        console.log "AJAX Error: #{textStatus}"
      success: (data, textStatus, jqXHR)->
#        console.log data
        ajaxContent.html data
    false

  $('#pipelineProperties').editTable
    url: 'example.php'
    columns:
      editable: [
        [1, 'propertyValue'],
        [2, 'propertySorting']
      ]

) jQuery


