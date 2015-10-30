(($) ->
  ajaxResponseContent = $('#search-autocomplete')
  googleResponseContent = $('#google-search')
  dropdoun            = $('.dropdown')

  $(document).on 'keyup', '#search-query', (e)->
    value = $(@).val()
    console.log(e.keyCode)
    $.ajax
      url: '/search/index/autocomplete/'
      type: 'post'
      dataType: 'html'
      data:
        query: value
      error: (jqXHR, textStatus, errorThrown) ->
        ajaxResponseContent.html "AJAX Error: #{textStatus}"
      success: (data, textStatus, jqXHR) ->
#        console.log(data)
        ajaxResponseContent.html data
        if data isnt ''
          dropdoun.addClass 'open'
        else
          dropdoun.removeClass 'open'

  urlParam = (name)->
    result = new RegExp('[\?&]' + name + '=([^&#]*)').exec(document.location.search)
    result[1] or 0

  ###googleSearch = (q)->
    $.ajax
      url: 'https://www.googleapis.com/customsearch/v1'
      type: 'get'
      dataType: 'json'
      data:
        key: 'AIzaSyA4c9AkQoBRpYIgHNJSUqLs0MGb4v6c6Fc'
        cx: '002321161471768174809:g2hp7ihrj1u'
        q: q
      error: (jqXHR, textStatus, errorThrown) ->
        console.log "AJAX Error: #{textStatus}"
      success: (data, textStatus, jqXHR) ->
#        console.log data.searchInformation.totalResults
        searchResult data###

  ###searchResult = (data)->
#    console.log data
    items = data.items
    for item in items
      link = item.link
      title = item.title
      snippet = item.snippet

      html = '<div>'+title+'</div>'
      html += '<div>'+snippet+'</div>'
      html += '<div>'+link+'</div>'
      googleResponseContent.append html###


  ###query = urlParam 'query'
  console.log decodeURIComponent query

  googleSearch decodeURIComponent query if query?###

) jQuery