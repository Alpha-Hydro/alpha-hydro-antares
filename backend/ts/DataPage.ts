/// <reference path="../../public/typescript/jquery.d.ts" />

class DataPage {
    pageData: any;
    href: any;

    constructor(){
        this.pageData = {};
        this.href = window.location.href;
        this._init();
    }

    _init(){
        var self = this;
        $.ajax({
            url: self.href,
            data: {json:""},
            dataType: 'json',
            cache: false,
            success: function(data) {
                self._setData(data);
            },
            error: function(xhr, status, err) {
                console.error(self.href, status, err.toString());
            }
        });
    }

    _setData(data){
        this.pageData = data;
        return this;
    }

    getData(){
        return this.pageData;
    }

}

var dataPage = new DataPage();

