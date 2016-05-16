class ImageLoader {
    elementEvent: HTMLElement;
    inputFile: HTMLElement;
    inputImageId: string;

    constructor(elementEventId:string, inputFileId:string, inputImageId:string){
        this.elementEvent = document.getElementById(elementEventId);
        this.inputFile = document.getElementById(inputFileId);
        this.inputImageId = inputImageId;

        this.elementEvent && this.init();
    }

    init(){
        this.elementEvent.addEventListener('click', (ev) => {
            ev.preventDefault();
            this.inputFile.addEventListener('change', (e) => {
                return this._loadFile(e, this.inputImageId);
            });
            this.inputFile.click();
            return false;
        });
    }

    _loadFile(event:any, id:any){
        let reader: any;
        reader = new FileReader();
        reader.onload = () => {
            let output:any;
            output = document.getElementById(id);
            output.value = event.target.value;
            output.src = reader.result;
        };
        return reader.readAsDataURL(event.target.files[0]);
    }
}
export = ImageLoader;