/// <reference path="../../public/typescript/jquery.d.ts" />
var DataPage = (function () {
    function DataPage() {
        this.pageData = {};
        this.href = window.location.href;
        this._init();
    }
    DataPage.prototype._init = function () {
        var self = this;
        $.ajax({
            url: self.href,
            data: { json: "" },
            dataType: 'json',
            cache: false,
            success: function (data) {
                self._setData(data);
            },
            error: function (xhr, status, err) {
                console.error(self.href, status, err.toString());
            }
        });
    };
    DataPage.prototype._setData = function (data) {
        this.pageData = data;
        return this;
    };
    DataPage.prototype.getData = function () {
        return this.pageData;
    };
    return DataPage;
})();
var dataPage = new DataPage();
//# sourceMappingURL=DataPage.js.map