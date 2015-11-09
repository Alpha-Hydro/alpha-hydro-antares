// Generated by CoffeeScript 1.9.3
(function() {
  var loadFile;

  loadFile = function(event) {
    var reader;
    reader = new FileReader();
    reader.onload = function() {
      var output;
      output = document.getElementById('image');
      return output.src = reader.result;
    };
    return reader.readAsDataURL(event.target.files[0]);
  };

  (function($) {
    $('[data-toggle="tooltip"]').tooltip();
    $('#image').click(function() {
      $('#imageLoadFile').trigger('click');
      return false;
    });
    $('#imageLoadFile').change(function(event) {
      return loadFile(event);
    });
    return $(document).on('change', '#propertyId', function() {
      var ajaxContent, src, val;
      val = $(this).val();
      src = '/admin/pipeline/select-add-property';
      ajaxContent = $('.ajax-content');
      console.log(val);
      return $.ajax({
        url: src,
        type: 'POST',
        dataType: 'html',
        data: {
          'propertyId': val
        },
        error: function(jqXHR, textStatus, errorThrown) {
          return console.log("AJAX Error: " + textStatus);
        },
        success: function(data, textStatus, jqXHR) {
          return ajaxContent.html(data);
        }
      }, false);
    });
  })(jQuery);

}).call(this);

//# sourceMappingURL=admin.js.map
