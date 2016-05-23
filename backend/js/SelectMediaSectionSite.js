define(["require", "exports"], function (require, exports) {
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
//# sourceMappingURL=SelectMediaSectionSite.js.map