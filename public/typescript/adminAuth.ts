/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
/// <reference path="bootstrap.d.ts" />

class AdminAuth {
    modalAuth:Element;
    constructor(){
        this.modalAuth = document.getElementById('modalAuth');
        this.init();
    }
    init(){
        document.onkeypress = this.handle;
    }

    handle = (e) => {
        var self = this;
        if(e.altKey && e.keyCode == 120){
            if(self.modalAuth){
                $(self.modalAuth).modal('show');
            }
            else{
                window.location.href = '/admin/';
            }
        }
    }
}

var goAdmin = new AdminAuth();

