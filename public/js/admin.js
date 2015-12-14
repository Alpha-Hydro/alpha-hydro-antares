// Generated by CoffeeScript 1.9.3
(function() {
  var loadFile;

  loadFile = function(event, id) {
    var reader;
    reader = new FileReader();
    reader.onload = function() {
      var output;
      output = document.getElementById(id);
      output.value = event.target.value;
      return output.src = reader.result;
    };
    return reader.readAsDataURL(event.target.files[0]);
  };

  (function($) {
    $('[data-toggle="tooltip"]').tooltip();
    $(document).one('change', 'form#itemEdit', function() {
      return $('#saveItemEdit').removeClass('hidden').addClass('show');
    });
    $('#imageLoad').click(function() {
      $('#imageLoadFile').trigger('click');
      return false;
    });
    $('#imageLoadFile').change(function(event) {
      return loadFile(event, 'imageLoad');
    });
    $('#imageDraftLoad').click(function() {
      $('#imageDraftLoadFile').trigger('click');
      return false;
    });
    $('#imageDraftLoadFile').change(function(event) {
      return loadFile(event, 'imageDraftLoad');
    });
    $('#imageTableLoadBtn').click(function() {
      $('#imageTableLoadFile').trigger('click');
      return false;
    });
    return $('#imageTableLoadFile').change(function(event) {
      return loadFile(event, 'imageTable');
    });
  })(jQuery);

}).call(this);

//# sourceMappingURL=admin.js.map
