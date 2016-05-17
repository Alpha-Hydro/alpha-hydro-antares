define(["require", "exports", './ImageLoader', './Slugify', './SelectCategory'], function (require, exports, ImageLoader, Slugify, SelectCategory) {
    "use strict";
    var formItemEdit = document.getElementById('itemEdit');
    var saveFormItemEdit = document.getElementById('saveItemEdit');
    formItemEdit && formItemEdit.addEventListener('change', function () {
        saveFormItemEdit.classList.remove('hidden');
    });
    new ImageLoader('imageLoad', 'imageLoadFile', 'imageLoad');
    new ImageLoader('imageDraftLoad', 'imageDraftLoadFile', 'imageDraftLoad');
    new ImageLoader('imageTableLoadBtn', 'imageTableLoadFile', 'imageTable');
    new Slugify('.slugify');
    new SelectCategory('categoryId', 'path', 'fullPath');
});
//# sourceMappingURL=adminPublic.js.map