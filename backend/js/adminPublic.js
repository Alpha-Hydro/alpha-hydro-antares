define("ImageLoader", ["require", "exports"], function (require, exports) {
    "use strict";
    var ImageLoader = (function () {
        function ImageLoader(elementEventId, inputFileId, inputImageId) {
            this.elementEvent = document.getElementById(elementEventId);
            this.inputFile = document.getElementById(inputFileId);
            this.inputImageId = inputImageId;
            this.elementEvent && this.init();
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
    return ImageLoader;
});
define("SelectCategory", ["require", "exports"], function (require, exports) {
    "use strict";
    var SelectCategory = (function () {
        function SelectCategory(selectElementId, pathInputId, fullPathInputId) {
            this.selectElement = document.getElementById(selectElementId);
            this.pathInput = document.getElementById(pathInputId);
            this.fullPathInput = document.getElementById(fullPathInputId);
            this.selectElement && this.fullPathInput && this.init();
        }
        SelectCategory.prototype.init = function () {
            var _this = this;
            this.selectElement.addEventListener('change', function (e) {
                var value = e.target.value;
                var controller = e.target.dataset.controller;
                if (value != 0) {
                    _this.makeRequest(value, controller);
                }
            });
        };
        SelectCategory.prototype.makeRequest = function (value, controller) {
            var _this = this;
            this.httpRequest = new XMLHttpRequest();
            if (!this.httpRequest) {
                alert('Giving up :( Cannot create an XMLHTTP instance');
                return false;
            }
            this.httpRequest.onreadystatechange = function () {
                if (_this.httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (_this.httpRequest.status === 200) {
                        var response = JSON.parse(_this.httpRequest.responseText);
                        if (response.fullPath)
                            _this.fullPathInput.value = response.fullPath + '/' + _this.pathInput.value;
                        console.log(_this.fullPathInput.value);
                    }
                    else {
                        console.log('There was a problem with the request.');
                        return;
                    }
                }
            };
            this.httpRequest.open('GET', '/api/' + controller + '/get/' + value + '/', true);
            this.httpRequest.send();
        };
        return SelectCategory;
    }());
    return SelectCategory;
});
define("SelectMediaSectionSite", ["require", "exports"], function (require, exports) {
    "use strict";
    var SelectMediaSectionSite = (function () {
        function SelectMediaSectionSite(selectElementClass) {
            this.selectFeedback = [].slice.call(document.querySelectorAll(selectElementClass));
            this.init();
        }
        SelectMediaSectionSite.prototype.init = function () {
            var _this = this;
            var self = this;
            this.selectFeedback.forEach(function (select) {
                self.selectElement = select.querySelector('select');
                self.selectElement.addEventListener('change', function (e) {
                    var sectionId = e.target.value;
                    var itemId = e.target.dataset.itemid;
                    _this.makeRequest(sectionId, itemId);
                });
            });
        };
        SelectMediaSectionSite.prototype.makeRequest = function (sectionId, itemId) {
            var _this = this;
            this.httpRequest = new XMLHttpRequest();
            if (!this.httpRequest) {
                alert('Giving up :( Cannot create an XMLHTTP instance');
                return false;
            }
            this.httpRequest.onreadystatechange = function () {
                if (_this.httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (_this.httpRequest.status === 200) {
                        var response = JSON.parse(_this.httpRequest.responseText);
                        console.log(response);
                        if (response.message) {
                            document.getElementById('sectionSite_' + itemId).parentElement.classList.add('success');
                        }
                    }
                    else {
                        console.log('There was a problem with the request.');
                        return;
                    }
                }
            };
            this.httpRequest.open('POST', '/admin/media/section/', true);
            this.httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            this.httpRequest.send('sectionId=' + sectionId + '&itemId=' + itemId);
        };
        return SelectMediaSectionSite;
    }());
    return SelectMediaSectionSite;
});
define("adminPublic", ["require", "exports", "ImageLoader", "SelectCategory", "SelectMediaSectionSite"], function (require, exports, ImageLoader, SelectCategory, SelectMediaSectionSite) {
    "use strict";
    var formItemEdit = document.getElementById('itemEdit');
    var saveFormItemEdit = document.getElementById('saveItemEdit');
    formItemEdit && formItemEdit.addEventListener('change', function () {
        saveFormItemEdit.classList.remove('hidden');
    });
    new ImageLoader('imageLoad', 'imageLoadFile', 'imageLoad');
    new ImageLoader('imageDraftLoad', 'imageDraftLoadFile', 'imageDraftLoad');
    new ImageLoader('imageTableLoadBtn', 'imageTableLoadFile', 'imageTable');
    new SelectCategory('categoryId', 'path', 'fullPath');
    new SelectMediaSectionSite('.select-feedback');
});
//# sourceMappingURL=adminPublic.js.map