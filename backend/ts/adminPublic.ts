/// <reference path="../../public/typescript/jquery.d.ts" />

;(function($){
    $('form#itemEdit').change(() => {
        $('#saveItemEdit').removeClass('hidden').addClass('show');
    });
    $('#imageLoad').click(() => {
        $('#imageLoadFile').trigger('click');
        return false;
    });
    $('#imageLoadFile').change((event) => {
        return loadFile(event, 'imageLoad');
    });
    $('#imageDraftLoad').click(() => {
        $('#imageDraftLoadFile').trigger('click');
        return false;
    });
    $('#imageDraftLoadFile').change((event) => {
        return loadFile(event, 'imageDraftLoad');
    });
    $('#imageTableLoadBtn').click(() => {
        $('#imageTableLoadFile').trigger('click');
        return false;
    });
    $('#imageTableLoadFile').change((event) => {
        return loadFile(event, 'imageTable');
    });

    var height;
    height = 200;
    $('.categories-list-item').each(() => {
        var e;
        e = $(this);
        if (e.height() > height) {
            height = e.height();
        }
        return e.height(height);
    });

    $('.slugify').change((event) => {
        var dataSlug:string, slug:any, value:string;
        value = event.target.value;
        dataSlug = event.target.dataset.slugify;
        slug = $('#' + dataSlug);
        getSlugify('/admin/index/slugify', value, slug);
        $('#saveItemEdit').removeClass('hidden').addClass('show');
        return false;
    });
})(jQuery);

var loadFile = (event:any, id:any):any => {
    let reader: any;
    reader = new FileReader();
    reader.onload = () => {
        let output:any;
        output = document.getElementById(id);
        output.value = event.target.value;
        output.src = reader.result;
    };
    return reader.readAsDataURL(event.target.files[0]);
};

var getSlugify = (url:string, value:string, ajaxContent:any):any => {
    (($) => {
        return $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            cache: false,
            data: {
                'slugify' : value
            },
            error: (jqXHR, textStatus) => {
                return console.log("AJAX Error: " + textStatus);
            },
            success: (data) => {
                return ajaxContent.val(data);
            }
        }, false)
    })(jQuery);
};