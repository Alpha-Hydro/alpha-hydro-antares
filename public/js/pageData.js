var PageData = (function () {
    function PageData(controllerAdmin, modelOptions) {
        var _this = this;
        this.controllerAdmin = controllerAdmin;
        this.modelOptions = modelOptions;
        this.dataPage = function () {
            return $.extend({ controller: _this.controllerAdmin }, _this.modelOptions);
        };
    }
    return PageData;
}());
//# sourceMappingURL=pageData.js.map