(($) ->
  ajaxResponseContent = $('#search-autocomplete')
  dropdoun            = $('.dropdown')

  $(document).on 'keyup', '#search-query', ()->
    value = $(@).val()
    console.log(value)
    $.ajax
      url: '/search/index/autocomplete/'
      type: 'post'
      dataType: 'html'
      data:
        query: value
      error: (jqXHR, textStatus, errorThrown) ->
        ajaxResponseContent.html "AJAX Error: #{textStatus}"
      success: (data, textStatus, jqXHR) ->
        console.log(data)
        ajaxResponseContent.html data
        if data isnt ''
          dropdoun.addClass 'open'
        else
          dropdoun.removeClass 'open'
) jQuery