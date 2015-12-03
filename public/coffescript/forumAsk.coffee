(($) ->
  ajaxResponseForm = $('#ajaxResponseForm')
  modalResponseForm = $('#modalResponseForm')

  $(document).on 'submit', '#forum_ask', (e)->
    form = $(@)
    e.preventDefault()

    $.ajax
      url: form.attr('action')
      type: form.attr('method')
      dataType: 'html'
      data: form.serialize()
      error: (jqXHR, textStatus, errorThrown) ->
        ajaxResponseForm.html "AJAX Error: #{textStatus}"
      success: (data, textStatus, jqXHR) ->
        ajaxResponseForm.html data

    setTimeout ->
      modalResponseForm.modal 'show'
    , 300

  $(document).on 'click', '#resetForm', ()->
    $('#forum_ask').trigger 'reset'

  $(document).on 'click', '#toFormAsk', (event)->
    event.preventDefault()
    url = $(@).attr('href')
    target_offset = $(url).offset()
    target = target_offset.top
    $('html, body').animate
      scrollTop: target
      1000

    console.log(target)

  $(document).on 'click', '#refreshCaptcha', (event)->
    event.preventDefault()
    captchaImg = $('#captcha-form img')
    captchaKey = $('#captcha-id')
    console.log captchaKey
    $.ajax
      url: '/forum/index/refresh-captcha'
      dataType: 'html'
      error: (jqXHR, textStatus, errorThrown) ->
        console.log "AJAX Error: #{textStatus}"
      success: (data, textStatus, jqXHR) ->
        console.log data.src
        captchaImg.attr 'scr', data.src
        captchaKey.attr 'value', data.id

  false

) jQuery