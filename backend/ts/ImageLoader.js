class ImageLoader {
    constructor(elementEventId, inputFileId, inputImageId) {
        this.elementEvent = document.getElementById(elementEventId);
        this.inputFile = document.getElementById(inputFileId);
        this.inputImageId = inputImageId;
        this.elementEvent && this.init();
    }
    init() {
        this.elementEvent.addEventListener('click', (ev) => {
            ev.preventDefault();
            this.inputFile.addEventListener('change', (e) => {
                return this._loadFile(e, this.inputImageId);
            });
            this.inputFile.click();
            return false;
        });
    }
    _loadFile(event, id) {
        let reader;
        reader = new FileReader();
        reader.onload = () => {
            let output;
            output = document.getElementById(id);
            output.value = event.target.value;
            output.src = reader.result;
        };
        return reader.readAsDataURL(event.target.files[0]);
    }
}
//# sourceMappingURL=ImageLoader.js.map