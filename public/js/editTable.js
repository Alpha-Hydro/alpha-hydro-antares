// Generated by CoffeeScript 1.9.3
(function() {
  (function($) {
    $.fn.editTable = function(options) {
      var $table, Draw, defaults, settings;
      $table = this;
      defaults = {
        inputFormClass: 'form-control input-sm',
        groupBtnClass: 'btn-group btn-group-sm',
        eventType: 'click',
        rowIdentifier: 'id',
        buttons: {
          edit: {
            "class": 'btn btn-sm btn-default',
            html: '<span class="glyphicon glyphicon-pencil"></span>',
            action: 'edit'
          },
          "delete": {
            "class": 'btn btn-sm btn-default',
            html: '<span class="glyphicon glyphicon-trash"></span>',
            action: 'delete'
          },
          save: {
            "class": 'btn btn-sm btn-success',
            html: '<span class="glyphicon glyphicon-save"></span>',
            action: 'save'
          },
          remove: {
            "class": 'btn btn-sm btn-danger',
            html: '<span class="glyphicon glyphicon-remove"></span>',
            action: 'remove'
          }
        },
        onDraw: function() {}
      };
      settings = $.extend(true, defaults, options);
      Draw = {
        columns: {
          identifier: function() {
            var $td;
            $td = $table.find('td[data-table = "edit"]');
            console.log($td);
            return $td.each(function() {
              var input, span;
              span = "<span>" + ($(this).text()) + "</span>";
              input = "<input type='hidden' name='" + ($(this).data('table')) + "_" + ($(this).parent('tr').attr(settings.rowIdentifier)) + "' value='" + ($(this).text()) + "' disabled='disabled'/>";
              return $(this).html(span + input);
            });
          },
          toolbar: function() {
            var $tr, deleteButton, editButton, headTable, removeButton, saveButton, toolbar;
            editButton = '<button type="button" class="' + settings.buttons.edit["class"] + '">' + settings.buttons.edit.html + '</button>';
            deleteButton = '<button type="button" class="' + settings.buttons["delete"]["class"] + '">' + settings.buttons["delete"].html + '</button>';
            saveButton = '<button type="button" class="' + settings.buttons.save["class"] + ' hidden">' + settings.buttons.save.html + '</button>';
            removeButton = '<button type="button" class="' + settings.buttons.remove["class"] + ' hidden">' + settings.buttons.remove.html + '</button>';
            toolbar = "<div class='" + settings.groupBtnClass + "'>" + (editButton + deleteButton) + "</div>" + (saveButton + removeButton);
            headTable = $table.find('th');
            if (headTable.length !== 0) {
              $table.find('tr:first').append("<th></th>");
            }
            $tr = $table.find('tbody tr');
            return $tr.each(function() {
              return $(this).append("<td>" + toolbar + "</td>");
            });
          }
        }
      };
      Draw.columns.identifier();
      Draw.columns.toolbar();
      settings.onDraw();
      return this;
    };
    return false;
  })(jQuery);

}).call(this);

//# sourceMappingURL=editTable.js.map
