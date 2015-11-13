(($) ->
  $.fn.editTable = (options) ->
    $table = @
    defaults =
      inputFormClass: 'form-control input-sm'
      groupBtnClass: 'btn-group btn-group-sm'
      inputClass: 'edittable-input'
      eventType: 'click'
      rowIdentifier: 'id'
      editButton: true
      deleteButton: true
      saveButton: true
      removeButton: true
      buttons:
        edit:
          class: 'btn btn-sm btn-default'
          html: '<span class="glyphicon glyphicon-pencil"></span>'
          action: 'edit'
        delete:
          class: 'btn btn-sm btn-default'
          html: '<span class="glyphicon glyphicon-trash"></span>'
          action: 'delete'
        save:
          class: 'btn btn-sm btn-success'
          html: 'Сохранить'
          action: 'save'
        remove:
          class: 'btn btn-sm btn-danger'
          html: '<span class="glyphicon glyphicon-remove"></span>'
          action: 'remove'
      onDraw: ()-> return

    settings = $.extend true, defaults, options

    Draw =
      columns:
        edittabledata: ()->
          $td = $table.find 'td[data-mode]'
#          console.log settings.columns.editable[0][1]
          $td.each ()->
            i = $(@).index()-1
            span = "<span>#{$(@).text()}</span>"
            input = "<input class='form-control input-sm hidden #{settings.inputClass}' type='text' name='#{settings.columns.editable[i][1]}' value='#{$(@).text()}' disabled/>"
            $(@).html span + input
#            $(@).parent 'tr'
#              .attr settings.rowIdentifier, $(@).text()

        toolbar: ()->
          editButton = '<button type="button" class="edittable-edit-button ' + settings.buttons.edit.class + '">' + settings.buttons.edit.html + '</button>'
          deleteButton = '<button type="button" class="edittable-delete-button ' + settings.buttons.delete.class + '">' + settings.buttons.delete.html + '</button>'
          saveButton = '<button type="button" class="edittable-save-button ' + settings.buttons.save.class + ' hidden">' + settings.buttons.save.html + '</button>'
          removeButton = '<button type="button" class="edittable-remove-button ' + settings.buttons.remove.class + ' hidden">' + settings.buttons.remove.html + '</button>'
          toolbar = "#{saveButton + removeButton}<div class='ml1 #{settings.groupBtnClass}'>#{editButton + deleteButton}</div>"

          headTable = $table.find 'th'

          if headTable.length isnt 0
            $table
              .find 'tr:first'
              .append "<th></th>"

          $tr = $table.find 'tbody tr'
          $tr.each ()->
            $(@).append "<td class='text-right'>#{toolbar}</td>"

    Mode =
      view: (td)->
        $tr = $(td).parent 'tr'

        $input = $(td).find 'input.'+settings.inputClass
        $input
          .blur()
          .addClass 'hidden'
          .prop 'disabled', true

        $(td).find('span').show()

        $(td).attr 'data-mode', 'view'

        if settings.editButton
          $tr.find('button.edittable-save-button').addClass('hidden')
          $tr.find('button.edittable-edit-button').removeClass('active').blur()

      edit: (td)->
        $tr = $(td).parent 'tr'

        $(td).find('span').hide()

        $input = $(td).find 'input.'+settings.inputClass
        $input
          .prop 'disabled', false
          .removeClass 'hidden'
          .focus()

        $(td).attr 'data-mode', 'edit'

        if settings.editButton
          $tr.find('button.edittable-edit-button').addClass('active')
          $tr.find('button.edittable-save-button').removeClass('hidden')

    Edit =
      reset: (td)->
        $(td).each ()->
          $input = $(@).find 'input.'+settings.inputClass
          text = $(@).find('span').text()
          $input.val text
          Mode.view(@)

      submit: (td)->
        serialize = $table.find('input.'+settings.inputClass).serializeArray()
        console.log serialize

        $(td).each ()->
          $input = $(@).find 'input.'+settings.inputClass
          Mode.view(@)



    Draw.columns.edittabledata()
    Draw.columns.toolbar()

    settings.onDraw()

    if settings.editButton
      $table.on 'click', 'button.edittable-edit-button', (event)->
        if event.handled isnt true
          event.preventDefault()

          $button = $(@)
          activated = $button.hasClass 'active'

          Edit.reset($table.find('td[data-mode = "edit"]'))

          if not activated
            $($button.parents('tr').find('td[data-mode]').get().reverse()).each ()->
              Mode.edit(@)
          event.handled = true

      $table.on 'click', 'button.edittable-save-button', (event)->
        if event.handled isnt true
          event.preventDefault()

          Edit.submit($(@).parents('tr').find('td[data-mode = "edit"]'))

          event.handled = true

    @
  false
) jQuery