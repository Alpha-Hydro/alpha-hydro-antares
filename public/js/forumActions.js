/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
/// <reference path="bootstrap.d.ts" />
var ForumActions = (function () {
    function ForumActions() {
        var _this = this;
        this.modalShow = function (title, body, button) {
            var actionButton = _this.modalForumForm.elements.action, modalBody = _this.modalForumForm.children.item('modalBody');
            _this.modalForumForm.action = _this.action + '/' + _this.itemId;
            _this.modal.querySelector('#modalLabel').innerText = title;
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
                var el = ev.target, action = el.dataset.action;
                //console.log(btn.dataset.action);
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
        console.log(this.itemId, this.action);
        /* var title:any = 'Удалить сообщение',
             body:any = document.createElement('p'),
             button = {
                 className: 'btn btn-danger',
                 text: 'Удалить'
             };
 
         body.textContent = 'Вы действительно хотите удалить сообщение '+this.itemId+'!';
 
         this.modalShow(title, body, button);*/
    };
    ForumActions.prototype._reply = function () {
        console.log(this.itemId, this.action);
        /*var title:any = 'Ответить на сообщение',
            body:any = document.createElement('textarea'),
            button = {
                className: 'btn btn-success',
                text: 'Отправить'
            };

        body.name = "contentMarkdown";
        body.rows = "8";
        body.setAttribute('class', 'form-control');
        body.autofocus = true;

        console.log(body);

        this.modalShow(title, body, button);*/
    };
    ForumActions.prototype._edit = function () {
        console.log(this.itemId, this.action);
    };
    return ForumActions;
})();
var forum = new ForumActions();
//# sourceMappingURL=forumActions.js.map