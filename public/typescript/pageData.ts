/// <reference path="jquery.d.ts" />

class PageData{

    constructor (public controllerAdmin:string,public modelOptions:any){}
    dataPage = () => {
        return $.extend({controller: this.controllerAdmin}, this.modelOptions);
    }
}
