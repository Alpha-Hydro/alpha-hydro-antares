/// <reference path="jquery.d.ts" />
/// <reference path="bootstrap.d.ts" />

class AdminAuth {
    modalAuth:Element;
    constructor(public params:any = null){
        this.modalAuth = document.getElementById('modalAuth');
        this.init();
    }
    init(){
        document.onkeydown = this.handle;
    }

    handle = (e) => {
        var self = this;
        console.log(e.type);
        if(e.altKey && e.keyCode == 120){
            if(self.modalAuth){
                $(self.modalAuth).modal('show');
            }
            else{
                window.location.href = '/admin/'+this.params;
                //console.log(this.params);
            }
        }
    }
}

//var goAdmin = new AdminAuth();

