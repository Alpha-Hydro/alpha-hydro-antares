/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
/// <reference path="bootstrap.d.ts" />
var ForumActions = (function () {
    function ForumActions() {
        var _this = this;
        this.modalShow = function () {
            $(_this.modal).modal('show');
        };
        this.btnGroups = [].slice.call(document.querySelectorAll('.btn-group'));
        this.modal = document.getElementById('modalForumAdmin');
        this._init();
    }
    ForumActions.prototype._init = function () {
        var self = this;
        this.btnGroups.forEach(function (btnGroup) {
            self._initBtn(btnGroup);
        });
    };
    ForumActions.prototype._initBtn = function (btnGroup) {
        var self = this, idGroup = btnGroup.id, btn = [].slice.call(btnGroup.querySelectorAll('button'));
        btn.forEach(function (btn) {
            btn.addEventListener('click', function (ev) {
                ev.preventDefault();
                var el = ev.target, action = el.dataset.action;
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
        this.modalShow();
        console.log(this.itemId, this.action);
    };
    ForumActions.prototype._reply = function () {
        console.log(this.itemId, this.action);
    };
    ForumActions.prototype._edit = function () {
        console.log(this.itemId, this.action);
    };
    return ForumActions;
})();
var forum = new ForumActions();
//# sourceMappingURL=forumActions.js.map