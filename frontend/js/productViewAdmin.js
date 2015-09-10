// Generated by CoffeeScript 1.9.3
(function() {
  (function($) {
    var ajaxContent, setDataAjax, window, windowClose, wrap;
    window = $('#window');
    wrap = $('#bg-grey');
    ajaxContent = $('#window .content');
    windowClose = $("#window .close");
    $(document).on('click', '.ajax-view', function() {
      var e, productId, src;
      e = $(this);
      src = e.data('href');
      productId = e.data('product');
      console.log(src);
      setDataAjax(src, productId, e);
      window.css('position', 'absolute');
      wrap.show();
      window.show();
      return false;
    });
    $(document).on('click', '.window', function() {
      var e;
      e = $(this);
      ajaxContent.html('<div class="text-center"><img src="' + e.attr('href') + '" width="600"/></div>');
      window.css('position', 'fixed');
      wrap.show();
      window.show();
      return false;
    });
    $(document).on('click', '.checkAll', function() {
      return $(':checkbox').prop('checked', this.checked);
    });
    windowClose.click(function() {
      window.hide();
      wrap.hide();
      return false;
    });
    return setDataAjax = function(src, productId, e) {
      return $.ajax({
        url: src,
        type: 'POST',
        dataType: "html",
        data: {
          'id': productId
        },
        error: function(jqXHR, textStatus, errorThrown) {
          return ajaxContent.html("AJAX Error: " + textStatus);
        },
        success: function(data, textStatus, jqXHR) {
          if (data) {
            return ajaxContent.html(data);
          } else {
            if (e !== null && e !== void 0) {
              return $(e).parent().html($(e).text());
            }
          }
        }
      }, false);
    };
  })(jQuery);

}).call(this);

//# sourceMappingURL=productViewAdmin.js.map