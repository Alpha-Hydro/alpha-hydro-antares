/// <reference path="../../public/typescript/jquery.d.ts" />

var imageLoad = document.getElementById('imageLoad');
var imageLoadFile = document.getElementById('imageLoadFile');

imageLoad.addEventListener('click', (ev) => {
    ev.preventDefault();
    imageLoadFile.addEventListener('change', (e) => {
        return loadFile(e, 'imageLoad');
    });
    imageLoadFile.click();
    return false;
})

;(function($){
    $('form#itemEdit').change(() => {
        $('#saveItemEdit').removeClass('hidden').addClass('show');
    });
    /*$('#imageLoad').click(() => {
        $('#imageLoadFile').trigger('click');
        return false;
    });
    $('#imageLoadFile').change((event) => {
        return loadFile(event, 'imageLoad');
    });*/
    
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

var selectCategory:any = document.getElementById('categoryId');
var pathInput:any = document.getElementById('path');
var fullPathInput:any = document.getElementById('fullPath');

if(selectCategory && typeof selectCategory !== 'undefined'){
    selectCategory.addEventListener('change', (e:any) => {
        var value:any = e.target.value;
        var controller:string = e.target.dataset.controller;
        if(value != 0){
            (($) => {
                return $.ajax({
                    url: '/api/'+controller+'/get/'+value+'/',
                    dataType: 'json',
                    cache: false,
                    error: (jqXHR, textStatus) => {
                        return console.log("AJAX Error: " + textStatus);
                    },
                    success: (data) => {
                        if(data.fullPath){
                            var fullPath:string = data.fullPath+'/'+pathInput.getAttribute('value');
                            return fullPathInput.setAttribute('value', fullPath);
                        }
                    }
                }, false)
            })(jQuery);
        }
    });
}
