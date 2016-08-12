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
define("Slugify", ["require", "exports"], function (require, exports) {
    "use strict";
    var Slugify = (function () {
        function Slugify(slugifyClass) {
            this.slugify = document.querySelector(slugifyClass);
            this.httpRequest = new XMLHttpRequest();
            this.slugify && this.init();
        }
        Slugify.prototype.init = function () {
            var _this = this;
            this.slugify.onchange = function (event) {
                _this.ajaxContent = document.getElementById(event.target.dataset.slugify);
                _this.makeRequest('/admin/index/slugify', event.target.value);
            };
        };
        Slugify.prototype.makeRequest = function (url, value) {
            var _this = this;
            if (!this.httpRequest) {
                alert('Giving up :( Cannot create an XMLHTTP instance');
                return false;
            }
            this.httpRequest.onreadystatechange = function () {
                if (_this.httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (_this.httpRequest.status === 200) {
                        _this.ajaxContent.value = JSON.parse(_this.httpRequest.responseText);
                    }
                    else {
                        console.log('There was a problem with the request.');
                        return;
                    }
                }
            };
            this.httpRequest.open('POST', url, true);
            this.httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            this.httpRequest.send('slugify=' + encodeURIComponent(value));
        };
        return Slugify;
    }());
    return Slugify;
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
            console.log(this.selectFeedback);
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
define("ForumActions", ["require", "exports"], function (require, exports) {
    "use strict";
    var ForumActions = (function () {
        function ForumActions() {
            var _this = this;
            this.modalShow = function (title, body, button) {
                var actionButton = _this.modalForumForm.elements.action, modalBody = _this.modalForumForm.children.item('modalBody');
                _this.modalForumForm.action = _this.action + '/' + _this.itemId;
                _this.modal.querySelector('#modalLabel').innerHTML = title;
                modalBody.innerHTML = '';
                modalBody.appendChild(body);
                actionButton.setAttribute('class', button.className);
                actionButton.innerText = button.text;
                $(_this.modal).modal('show');
            };
            this.btnGroups = [].slice.call(document.querySelectorAll('.btn-group'));
            this.modal = document.getElementById('modalForumAdmin');
            this.modalTitle = document.getElementById('myModalLabel');
            this.modalForumForm = document.getElementById('modalForumForm');
            this._init();
        }
        ForumActions.prototype._init = function () {
            var self = this;
            this.btnGroups.forEach(function (btnGroup) {
                self._initBtn(btnGroup);
            });
        };
        ForumActions.prototype._initBtn = function (btnGroup) {
            var self = this, idGroup = btnGroup.id, button = [].slice.call(btnGroup.querySelectorAll('button'));
            button.forEach(function (btn) {
                btn.addEventListener('click', function (ev) {
                    ev.preventDefault();
                    var el = ev.currentTarget, action = el.dataset.action;
                    self._initAction(idGroup, action);
                });
            });
        };
        ForumActions.prototype._initAction = function (id, theAction) {
            this.itemId = id;
            this.action = theAction;
            switch (this.action) {
                case 'delete':
                    this._del();
                    break;
                case 'reply':
                    this._reply();
                    break;
                case 'edit':
                    this._edit();
                    break;
                default:
                    return false;
            }
        };
        ForumActions.prototype._del = function () {
            var title = 'Удалить сообщение', body = document.createElement('p'), button = {
                className: 'btn btn-danger',
                text: 'Удалить'
            };
            body.textContent = 'Вы действительно хотите удалить сообщение ' + this.itemId + '!';
            this.modalShow(title, body, button);
        };
        ForumActions.prototype._reply = function () {
            var title = 'Ответить на сообщение', quest = document.getElementById('question' + this.itemId).querySelector('.panel-body'), body = document.createElement('div'), textarea = document.createElement('textarea'), button = {
                className: 'btn btn-success',
                text: 'Отправить'
            };
            body.appendChild(quest.cloneNode(true));
            textarea.name = "contentMarkdown";
            textarea.rows = "8";
            textarea.setAttribute('class', 'form-control');
            textarea.required = true;
            textarea.onfocus = true;
            body.appendChild(textarea);
            $(this.modal).on('shown.bs.modal', function () {
                $(textarea).focus();
            });
            this.modalShow(title, body, button);
        };
        ForumActions.prototype._edit = function () {
            var title = 'Редактировать сообщение', context = document.getElementById('reply' + this.itemId).querySelector('.markdown-content'), body = document.createElement('div'), textarea = document.createElement('textarea'), button = {
                className: 'btn btn-success',
                text: 'Сохранить'
            };
            textarea.name = "contentMarkdown";
            textarea.rows = "8";
            textarea.setAttribute('class', 'form-control');
            textarea.required = true;
            textarea.onfocus = true;
            textarea.innerHTML = context.textContent.trim();
            body.appendChild(textarea);
            this.modalShow(title, body, button);
        };
        return ForumActions;
    }());
    return ForumActions;
});
define("adminPublic", ["require", "exports", "ImageLoader", "Slugify", "SelectCategory", "SelectMediaSectionSite"], function (require, exports, ImageLoader, Slugify, SelectCategory, SelectMediaSectionSite) {
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
    new SelectMediaSectionSite('.select-feedback');
});
//# sourceMappingURL=adminPublic.js.map