/// <reference path="jquery.d.ts" />
/// <reference path="bootstrap.d.ts" />

class AdminAuth {
    modalAuth:Element;
    constructor(){
        this.modalAuth = document.getElementById('modalAuth');
        this.init();
    }
    init(){
        document.onkeydown = this.handle;
    }

    handle = (e) => {
        var self = this;
        //console.log(e.type);
        //console.log(window.location.hostname+window.location.pathname+window.location.search);
        if(e.altKey && e.keyCode == 120){
            window.location.href = 'http://admin.'+window.location.hostname+window.location.pathname+window.location.search;
            //if(self.modalAuth){
            //    $(self.modalAuth).modal('show');
            //}
            //else{
            //    window.location.href = '/admin/'+this.params;
            //    console.log(window.location.href);
            //}
        }
    }
}
var goAdmin = new AdminAuth();
goAdmin.init();

