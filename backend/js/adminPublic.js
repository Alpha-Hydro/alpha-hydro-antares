/// <reference path="../../public/typescript/jquery.d.ts" />
;
(function ($) {
    $('form#itemEdit').change(function () {
        $('#saveItemEdit').removeClass('hidden').addClass('show');
    });
    var height;
    height = 200;
    $('.categories-list-item').each(function () {
        var e;
        e = $(this);
        if (e.height() > height) {
            height = e.height();
        }
        return e.height(height);
    });
})(jQuery);
//# sourceMappingURL=adminPublic.js.map