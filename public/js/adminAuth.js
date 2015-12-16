/// <reference path="jquery.d.ts" />
/// <reference path="bootstrap.d.ts" />
var AdminAuth = (function () {
    function AdminAuth(params) {
        var _this = this;
        if (params === void 0) { params = null; }
        this.params = params;
        this.handle = function (e) {
            var self = _this;
            console.log(e.type);
            if (e.altKey && e.keyCode == 120) {
                if (self.modalAuth) {
                    $(self.modalAuth).modal('show');
                }
                else {
                    window.location.href = '/admin/' + _this.params;
                }
            }
        };
        this.modalAuth = document.getElementById('modalAuth');
        this.init();
    }
    AdminAuth.prototype.init = function () {
        document.onkeydown = this.handle;
    };
    return AdminAuth;
})();
//var goAdmin = new AdminAuth();
//# sourceMappingURL=adminAuth.js.map