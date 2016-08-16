import ImageLoader = require('./ImageLoader');
import Slugify = require('./Slugify');
import SelectCategory = require('./SelectCategory');
import SelectMediaSectionSite = require('./SelectMediaSectionSite');

//show save form button
const formItemEdit:HTMLElement = document.getElementById('itemEdit');
const saveFormItemEdit:HTMLElement = document.getElementById('saveItemEdit');

formItemEdit && formItemEdit.addEventListener('change', () => {
    saveFormItemEdit.classList.remove('hidden');
});

new ImageLoader('imageLoad', 'imageLoadFile', 'imageLoad');
new ImageLoader('imageDraftLoad', 'imageDraftLoadFile', 'imageDraftLoad');
new ImageLoader('imageTableLoadBtn', 'imageTableLoadFile', 'imageTable');
new Slugify('.slugify');
new SelectCategory('categoryId', 'path', 'fullPath');
new SelectMediaSectionSite('.select-feedback');
