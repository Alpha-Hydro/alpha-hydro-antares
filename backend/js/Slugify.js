define(["require", "exports"], function (require, exports) {
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
//# sourceMappingURL=Slugify.js.map