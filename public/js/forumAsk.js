// Generated by CoffeeScript 1.9.3
(function() {
  (function($) {
    var ajaxResponseForm, modalResponseForm;
    ajaxResponseForm = $('#ajaxResponseForm');
    modalResponseForm = $('#modalResponseForm');
    $(document).on('submit', '#forum_ask', function(e) {
      var form;
      form = $(this);
      e.preventDefault();
      $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        dataType: 'html',
        data: form.serialize(),
        error: function(jqXHR, textStatus, errorThrown) {
          return ajaxResponseForm.html("AJAX Error: " + textStatus);
        },
        success: function(data, textStatus, jqXHR) {
          return ajaxResponseForm.html(data);
        }
      });
      return setTimeout(function() {
        return modalResponseForm.modal('show');
      }, 300);
    });
    return $(document).on('click', '#resetForm', function() {
      return $('#forum_ask').trigger('reset');
    });
  })(jQuery);

}).call(this);

//# sourceMappingURL=forumAsk.js.map
