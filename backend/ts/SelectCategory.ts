class SelectCategory {
    selectElement:HTMLElement;
    pathInput:any;
    fullPathInput:any;
    httpRequest:XMLHttpRequest;

    constructor(selectElementId:string, pathInputId:string, fullPathInputId:string){
        this.selectElement = document.getElementById(selectElementId);
        this.pathInput = document.getElementById(pathInputId);
        this.fullPathInput = document.getElementById(fullPathInputId);

        this.selectElement && this.fullPathInput && this.init();
    }

    init(){
        this.selectElement.addEventListener('change', (e:any) => {
            var value:any = e.target.value;
            var controller:string = e.target.dataset.controller;
            if(value != 0){
                this.makeRequest(value, controller);
            }
        });
    }

    makeRequest(value:any, controller:string){
        this.httpRequest = new XMLHttpRequest();

        if (!this.httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }

        this.httpRequest.onreadystatechange = () => {
            if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
                if (this.httpRequest.status === 200) {
                    var response:any = JSON.parse(this.httpRequest.responseText);
                    if(response.fullPath)
                        this.fullPathInput.value = response.fullPath+'/'+this.pathInput.value;
                    console.log(this.fullPathInput.value);
                } else {
                    console.log('There was a problem with the request.');
                    return;
                }
            }
        };

        this.httpRequest.open('GET', '/api/'+controller+'/get/'+value+'/', true);
        this.httpRequest.send();
    }
}
export = SelectCategory;