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

) jQuery