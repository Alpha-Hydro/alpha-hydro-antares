/// <reference path="../../src/libs/jquery.d.ts" />
/// <reference path="../../src/libs/bootstrap.d.ts" />
class ForumActions {
    constructor() {
        this.modalShow = (title, body, button) => {
            var actionButton = this.modalForumForm.elements.action, modalBody = this.modalForumForm.children.item('modalBody');
            this.modalForumForm.action = this.action + '/' + this.itemId;
            this.modal.querySelector('#modalLabel').innerHTML = title;
            modalBody.innerHTML = '';
            modalBody.appendChild(body);
            actionButton.setAttribute('class', button.className);
            actionButton.innerText = button.text;
            $(this.modal).modal('show');
        };
        this.btnGroups = [].slice.call(document.querySelectorAll('.btn-group'));
        this.modal = document.getElementById('modalForumAdmin');
        this.modalTitle = document.getElementById('myModalLabel');
        this.modalForumForm = document.getElementById('modalForumForm');
        this._init();
    }
    _init() {
        var self = this;
        this.btnGroups.forEach((btnGroup) => {
            self._initBtn(btnGroup);
        });
    }
    _initBtn(btnGroup) {
        var self = this, idGroup = btnGroup.id, button = [].slice.call(btnGroup.querySelectorAll('button'));
        button.forEach(function (btn) {
            btn.addEventListener('click', (ev) => {
                ev.preventDefault();
                var el = ev.currentTarget, action = el.dataset.action;
                self._initAction(idGroup, action);
            });
        });
    }
    _initAction(id, theAction) {
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
    }
    _del() {
        var title = 'Удалить сообщение', body = document.createElement('p'), button = {
            className: 'btn btn-danger',
            text: 'Удалить'
        };
        body.textContent = 'Вы действительно хотите удалить сообщение ' + this.itemId + '!';
        this.modalShow(title, body, button);
    }
    _reply() {
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
        $(this.modal).on('shown.bs.modal', () => {
            $(textarea).focus();
        });
        this.modalShow(title, body, button);
    }
    _edit() {
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
        //console.log(context.textContent.trim());
        body.appendChild(textarea);
        this.modalShow(title, body, button);
    }
}
//# sourceMappingURL=ForumActions.js.map