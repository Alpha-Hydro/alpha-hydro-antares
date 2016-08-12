define(["require", "exports"], function (require, exports) {
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
//# sourceMappingURL=ForumActions.js.map