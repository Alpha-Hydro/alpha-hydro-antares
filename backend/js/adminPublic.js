/// <reference path="../../public/typescript/jquery.d.ts" />
var ImageLoader = (function () {
    function ImageLoader(elementEventId, inputFileId, inputImageId) {
        this.elementEvent = document.getElementById(elementEventId);
        this.inputFile = document.getElementById(inputFileId);
        this.inputImageId = inputImageId;
    }
    ImageLoader.prototype.init = function () {
        var _this = this;
        this.elementEvent.addEventListener('click', function (ev) {
            ev.preventDefault();
            _this.inputFile.addEventListener('change', function (e) {
                return _this._loadFile(e, _this.inputImageId);
            });
            _this.inputFile.click();
            return false;
        });
    };
    ImageLoader.prototype._loadFile = function (event, id) {
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
    return ImageLoader;
}());
var imgLoad = new ImageLoader('imageLoad', 'imageLoadFile', 'imageLoad');
imgLoad.init();
/*(function($){

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

})(jQuery);*/
//show save form button
var formItemEdit = document.getElementById('itemEdit');
var saveFormItemEdit = document.getElementById('saveItemEdit');
formItemEdit && formItemEdit.addEventListener('change', function () {
    saveFormItemEdit.classList.remove('hidden');
});
// ImageLoad
/*const imageLoad:HTMLElement = document.getElementById('imageLoad');
const imageLoadFile:HTMLElement = document.getElementById('imageLoadFile');

imageLoad && imageLoad.addEventListener('click', (ev) => {
    ev.preventDefault();
    imageLoadFile.addEventListener('change', (e) => {
        return loadFile(e, 'imageLoad');
    });
    imageLoadFile.click();
    return false;
});

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
};*/
// Slugify
var httpRequest;
var slugify = document.querySelector('.slugify');
var ajaxContent;
if (slugify) {
    slugify.onchange = function (event) {
        ajaxContent = document.getElementById(event.target.dataset.slugify);
        makeRequestSlugify('/admin/index/slugify', event.target.value);
    };
}
var makeRequestSlugify = function (url, value) {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }
    httpRequest.onreadystatechange = setSlugify;
    httpRequest.open('POST', url, true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('slugify=' + encodeURIComponent(value));
};
var setSlugify = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            ajaxContent.value = JSON.parse(httpRequest.responseText);
        }
        else {
            console.log('There was a problem with the request.');
            return;
        }
    }
};
//set fullPath change selectCategory
var selectCategory = document.getElementById('categoryId');
var pathInput = document.getElementById('path');
var fullPathInput = document.getElementById('fullPath');
if (selectCategory && fullPathInput) {
    selectCategory.addEventListener('change', function (e) {
        var value = e.target.value;
        var controller = e.target.dataset.controller;
        if (value != 0) {
            httpRequest = new XMLHttpRequest();
            if (!httpRequest) {
                alert('Giving up :( Cannot create an XMLHTTP instance');
                return false;
            }
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        var response = JSON.parse(httpRequest.responseText);
                        if (response.fullPath)
                            fullPathInput.value = response.fullPath + '/' + pathInput.value;
                        console.log(fullPathInput.value);
                    }
                    else {
                        console.log('There was a problem with the request.');
                        return;
                    }
                }
            };
            httpRequest.open('GET', '/api/' + controller + '/get/' + value + '/', true);
            httpRequest.send();
        }
    });
}
//# sourceMappingURL=adminPublic.js.map