(($) ->
  $('.slugify').change ->
    value = $(@).val()
    dataSlug = $(@).data('slugify')
    slug = $('#'+dataSlug)
#    console.log(slug)
    getSlugify('/admin/index/slugify',value, slug)
    $('#saveItemEdit').removeClass 'hidden'
      .addClass 'show'
    false

  getSlugify = (url, value, ajaxContent) ->
    $.ajax
      url: url
      type: 'POST'
      dataType: 'json'
      cache: false
      data: {
        'slugify' : value
      }
      error: (jqXHR, textStatus, errorThrown) ->
        console.log("AJAX Error: #{textStatus}")
      success: (data, textStatus, jqXHR) ->
#        console.log(data)
        ajaxContent.val(data)
      false

) jQuery