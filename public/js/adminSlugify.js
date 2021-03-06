// Generated by CoffeeScript 1.10.0
(function() {
  (function($) {
    var getSlugify;
    $('.slugify').change(function() {
      var dataSlug, slug, value;
      value = $(this).val();
      dataSlug = $(this).data('slugify');
      slug = $('#' + dataSlug);
      getSlugify('/admin/index/slugify', value, slug);
      $('#saveItemEdit').removeClass('hidden').addClass('show');
      return false;
    });
    return getSlugify = function(url, value, ajaxContent) {
      return $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        cache: false,
        data: {
          'slugify': value
        },
        error: function(jqXHR, textStatus, errorThrown) {
          return console.log("AJAX Error: " + textStatus);
        },
        success: function(data, textStatus, jqXHR) {
          return ajaxContent.val(data);
        }
      }, false);
    };
  })(jQuery);

}).call(this);

//# sourceMappingURL=adminSlugify.js.map
