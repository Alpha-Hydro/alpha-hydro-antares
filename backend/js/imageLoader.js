"use strict";
var ImageLoader = (function () {
    function ImageLoader(elementEventId, inputFileId, inputImageId) {
        this.elementEvent = document.getElementById(elementEventId);
        this.inputFile = document.getElementById(inputFileId);
        this.inputImageId = inputImageId;
        console.log('ok');
    }
    ImageLoader.prototype.init = function () {
        var _this = this;
        this.elementEvent.addEventListener('click', function (ev) {
            ev.preventDefault();
            _this.inputFile.addEventListener('change', function (e) {
                return _this._loadFile(e, _this.inputImageId);
            });
        });
    };
    ImageLoader.prototype._loadFile = function (event, id) {
        var reader;
        reader = new FileReader();
        reader.onload = function () {
            var output;
            output = document.getElementById(id);
            output.value = event.target.value;
            output.src = reader.result;
        };
        return reader.readAsDataURL(event.target.files[0]);
    };
    return ImageLoader;
}());
module.exports = ImageLoader;
//# sourceMappingURL=imageLoader.js.map