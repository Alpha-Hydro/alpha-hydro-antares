//show save form button
const formItemEdit = document.getElementById('itemEdit');
const saveFormItemEdit = document.getElementById('saveItemEdit');
formItemEdit && formItemEdit.addEventListener('change', () => {
    saveFormItemEdit.classList.remove('hidden');
});
new ImageLoader('imageLoad', 'imageLoadFile', 'imageLoad');
new ImageLoader('imageDraftLoad', 'imageDraftLoadFile', 'imageDraftLoad');
new ImageLoader('imageTableLoadBtn', 'imageTableLoadFile', 'imageTable');
new SelectCategory('categoryId', 'path', 'fullPath');
new SelectMediaSectionSite('.select-feedback');
//# sourceMappingURL=adminPublic.js.map