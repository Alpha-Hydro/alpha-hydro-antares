var AdminAuth = (function () {
    function AdminAuth() {
        var _this = this;
        this.handle = function (e) {
            var self = _this;
            if (e.altKey && e.keyCode == 120) {
                window.location.href = 'http://admin.' + window.location.hostname + window.location.pathname + window.location.search;
            }
        };
        this.modalAuth = document.getElementById('modalAuth');
        this.init();
    }
    AdminAuth.prototype.init = function () {
        document.onkeydown = this.handle;
    };
    return AdminAuth;
}());
var goAdmin = new AdminAuth();
goAdmin.init();
//# sourceMappingURL=adminAuth.js.map