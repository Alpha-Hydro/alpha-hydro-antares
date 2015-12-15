/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
/// <reference path="bootstrap.d.ts" />
var AdminAuth = (function () {
    function AdminAuth() {
        var _this = this;
        this.handle = function (e) {
            var self = _this;
            if (e.altKey && e.keyCode == 120) {
                if (self.modalAuth) {
                    $(self.modalAuth).modal('show');
                }
                else {
                    window.location.href = '/admin/';
                }
            }
        };
        this.modalAuth = document.getElementById('modalAuth');
        this.init();
    }
    AdminAuth.prototype.init = function () {
        document.onkeypress = this.handle;
    };
    return AdminAuth;
})();
var goAdmin = new AdminAuth();
//# sourceMappingURL=adminAuth.js.map