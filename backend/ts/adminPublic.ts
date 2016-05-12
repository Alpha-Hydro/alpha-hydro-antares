/// <reference path="../../public/typescript/jquery.d.ts" />

class ImageLoader {
    elementEvent: HTMLElement;
    inputFile: HTMLElement;
    inputImageId: string;

    constructor(elementEventId:string, inputFileId:string, inputImageId:string){
        this.elementEvent = document.getElementById(elementEventId);
        this.inputFile = document.getElementById(inputFileId);
        this.inputImageId = inputImageId;
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

let imgLoad = new ImageLoader('imageLoad', 'imageLoadFile', 'imageLoad');
imgLoad.init();


/*(function($){

    $('#imageDraftLoad').click(() => {
        $('#imageDraftLoadFile').trigger('click');
        return false;
    });
    $('#imageDraftLoadFile').change((event) => {
        return loadFile(event, 'imageDraftLoad');
    });

    $('#imageTableLoadBtn').click(() => {
        $('#imageTableLoadFile').trigger('click');
        return false;
    });
    $('#imageTableLoadFile').change((event) => {
        return loadFile(event, 'imageTable');
    });

})(jQuery);*/

//show save form button
const formItemEdit:HTMLElement = document.getElementById('itemEdit');
const saveFormItemEdit:HTMLElement = document.getElementById('saveItemEdit');

formItemEdit && formItemEdit.addEventListener('change', () => {
    saveFormItemEdit.classList.remove('hidden');
});


// ImageLoad
/*const imageLoad:HTMLElement = document.getElementById('imageLoad');
const imageLoadFile:HTMLElement = document.getElementById('imageLoadFile');

imageLoad && imageLoad.addEventListener('click', (ev) => {
    ev.preventDefault();
    imageLoadFile.addEventListener('change', (e) => {
        return loadFile(e, 'imageLoad');
    });
    imageLoadFile.click();
    return false;
});

var loadFile = (event:any, id:any):any => {
    let reader: any;
    reader = new FileReader();
    reader.onload = () => {
        let output:any;
        output = document.getElementById(id);
        output.value = event.target.value;
        output.src = reader.result;
    };
    return reader.readAsDataURL(event.target.files[0]);
};*/

// Slugify
let httpRequest:XMLHttpRequest;
const slugify:any = document.querySelector('.slugify');
let ajaxContent:any;

if(slugify){
    slugify.onchange = (event) => {
        ajaxContent = document.getElementById(event.target.dataset.slugify);
        makeRequestSlugify(
            '/admin/index/slugify',
            event.target.value
        );
    };
}

var makeRequestSlugify = (url:string, value:string):any => {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    httpRequest.onreadystatechange = setSlugify;
    httpRequest.open('POST', url, true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('slugify=' + encodeURIComponent(value));
};

var setSlugify = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            ajaxContent.value = JSON.parse(httpRequest.responseText);
        } else {
            console.log('There was a problem with the request.');
            return;
        }
    }
};

//set fullPath change selectCategory
const selectCategory:any = document.getElementById('categoryId');
const pathInput:any = document.getElementById('path');
const fullPathInput:any = document.getElementById('fullPath');

if(selectCategory && fullPathInput){
    selectCategory.addEventListener('change', (e:any) => {
        var value:any = e.target.value;
        var controller:string = e.target.dataset.controller;
        if(value != 0){
            httpRequest = new XMLHttpRequest();

            if (!httpRequest) {
                alert('Giving up :( Cannot create an XMLHTTP instance');
                return false;
            }

            httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        var response:any = JSON.parse(httpRequest.responseText);
                        if(response.fullPath)
                            fullPathInput.value = response.fullPath+'/'+pathInput.value;
                        console.log(fullPathInput.value);
                    } else {
                        console.log('There was a problem with the request.');
                        return;
                    }
                }
            };

            httpRequest.open('GET', '/api/'+controller+'/get/'+value+'/', true);
            httpRequest.send();
        }
    });
}
