define(["require", "exports"], function (require, exports) {
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
//# sourceMappingURL=SelectCategory.js.map