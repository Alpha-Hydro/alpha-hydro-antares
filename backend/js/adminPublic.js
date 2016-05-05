/// <reference path="../../public/typescript/jquery.d.ts" />
;
(function ($) {
    var _this = this;
    $('form#itemEdit').change(function () {
        $('#saveItemEdit').removeClass('hidden').addClass('show');
    });
    $('#imageLoad').click(function () {
        $('#imageLoadFile').trigger('click');
        return false;
    });
    $('#imageLoadFile').change(function (event) {
        return loadFile(event, 'imageLoad');
    });
    $('#imageDraftLoad').click(function () {
        $('#imageDraftLoadFile').trigger('click');
        return false;
    });
    $('#imageDraftLoadFile').change(function (event) {
        return loadFile(event, 'imageDraftLoad');
    });
    $('#imageTableLoadBtn').click(function () {
        $('#imageTableLoadFile').trigger('click');
        return false;
    });
    $('#imageTableLoadFile').change(function (event) {
        return loadFile(event, 'imageTable');
    });
    var height;
    height = 200;
    $('.categories-list-item').each(function () {
        var e;
        e = $(_this);
        if (e.height() > height) {
            height = e.height();
        }
        return e.height(height);
    });
    $('.slugify').change(function (event) {
        var dataSlug, slug, value;
        value = event.target.value;
        dataSlug = event.target.dataset.slugify;
        slug = $('#' + dataSlug);
        getSlugify('/admin/index/slugify', value, slug);
        $('#saveItemEdit').removeClass('hidden').addClass('show');
        return false;
    });
})(jQuery);
var loadFile = function (event, id) {
    var reader;
    reader = new FileReader();
    reader.onload = function () {
        var output;
        output = document.getElementById(id);
        output.value = event.target.value;
        output.src = reader.result;
    };
    return reader.readAsDataURL(event.target.files[0]);
};
var getSlugify = function (url, value, ajaxContent) {
    (function ($) {
        return $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            cache: false,
            data: {
                'slugify': value
            },
            error: function (jqXHR, textStatus) {
                return console.log("AJAX Error: " + textStatus);
            },
            success: function (data) {
                return ajaxContent.val(data);
            }
        }, false);
    })(jQuery);
};
var selectCategory = document.getElementById('categoryId');
var pathInput = document.getElementById('path');
var fullPathInput = document.getElementById('fullPath');
selectCategory.addEventListener('change', function (e) {
    console.log(pathInput.getAttribute('value'));
    var value = e.target.value;
    var controller = e.target.dataset.controller;
    if (value != 0) {
        (function ($) {
            return $.ajax({
                url: '/api/' + controller + '/get/' + value + '/',
                dataType: 'json',
                cache: false,
                error: function (jqXHR, textStatus) {
                    return console.log("AJAX Error: " + textStatus);
                },
                success: function (data) {
                    if (data.fullPath) {
                        var fullPath = data.fullPath + '/' + pathInput.getAttribute('value');
                        console.log(fullPath);
                        return fullPathInput.setAttribute('value', fullPath);
                    }
                }
            }, false);
        })(jQuery);
    }
});
//# sourceMappingURL=adminPublic.js.map