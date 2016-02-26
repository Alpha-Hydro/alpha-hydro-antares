/// <reference path="../../public/typescript/jquery.d.ts" />

;(function($){
    $('form#itemEdit').change(function(){
        $('#saveItemEdit').removeClass('hidden').addClass('show');
    })
})(jQuery);