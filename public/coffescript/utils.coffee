(($) ->
  $('.ajax').on 'click', ->
    $this = $(this)
    src = $this.data('src')
    context = $this.data('context')
    loader = $('.loading').html()
    $ajaxContent = $('#'+context)

    console.log(loader)
    $.ajax
      url: src
      type: 'POST'
      dataType: "html"
#      data:
#        tableCol: context
      error: (jqXHR, textStatus, errorThrown) ->
        $ajaxContent.html "AJAX Error: #{textStatus}"
      beforeSend: ->
        $ajaxContent.html loader
      success: (data, textStatus, jqXHR) ->
        setTimeout ->
          $ajaxContent.html data
        , 1000
#      complete: ->
#        loader.hide()
      false

) jQuery