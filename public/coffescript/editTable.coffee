(($) ->
  $.fn.editTable = (options) ->
    $table = @
    defaults =
      inputFormClass: 'form-control input-sm'
      groupBtnClass: 'btn-group btn-group-sm'
      eventType: 'click'
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
          html: '<span class="glyphicon glyphicon-save"></span>'
          action: 'save'
        remove:
          class: 'btn btn-sm btn-danger'
          html: '<span class="glyphicon glyphicon-remove"></span>'
          action: 'remove'
      onDraw: ()-> return
    settings = $.extend true, defaults, options
    Draw =
      columns:
        identifier: ()->
          $td = $table.find('td').data('table')
          console.log $td
        toolbar: ()->
          editButton = '<button type="button" class="' + settings.buttons.edit.class + '">' + settings.buttons.edit.html + '</button>'
          deleteButton = '<button type="button" class="' + settings.buttons.delete.class + '">' + settings.buttons.delete.html + '</button>'
          saveButton = '<button type="button" class="' + settings.buttons.save.class + ' hidden">' + settings.buttons.save.html + '</button>'
          removeButton = '<button type="button" class="' + settings.buttons.remove.class + ' hidden">' + settings.buttons.remove.html + '</button>'
          toolbar = '<div class="' + settings.groupBtnClass + '">' + editButton + deleteButton + '</div>\n\
            ' + saveButton + '\n\
            ' + removeButton

          headTable = $table.find 'th'

          if headTable.length isnt 0
            $table
              .find 'tr:first'
              .append "<th></th>"

          $tr = $table.find 'tbody tr'
          $tr.each ()->
            $(@).append "<td>#{toolbar}</td>"

    Draw.columns.identifier()
    Draw.columns.toolbar()

    settings.onDraw()
    @
  false
) jQuery