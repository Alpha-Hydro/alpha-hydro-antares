/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
/// <reference path="bootstrap.d.ts" />

class ForumActions {
    modal:Element;
    itemId:number;
    action:string;

    btnGroups:any;

    constructor(){
        this.btnGroups = [].slice.call(document.querySelectorAll('.btn-group'));
        this.modal = document.getElementById('modalForumAdmin');
        this._init();
    }

    _init(){
        var self = this;
        this.btnGroups.forEach((btnGroup)=>{
            self._initBtn(btnGroup);
        });
    }

    _initBtn(btnGroup:HTMLElement){
        var self = this,
            idGroup:any = btnGroup.id,
            btn:HTMLButtonElement[] = [].slice.call(btnGroup.querySelectorAll('button'));

        btn.forEach(function(btn){
            btn.addEventListener('click',(ev)=>{
                ev.preventDefault();
                var el:any = ev.target,
                    action:string = el.dataset.action;
                self._initAction(idGroup, action);
            });
        });
    }

    _initAction(id:number, theAction:string){
        this.itemId = id;
        this.action = theAction;

        switch (this.action){
            case 'delete':
                this._del();
                break;

            case 'reply':
                this._reply();
                break;

            case 'edit':
                this._edit();
                break;

            default:
                return false;
        }
    }

    _del(){
        this.modalShow();
        console.log(this.itemId, this.action);
    }
    _reply(){
        console.log(this.itemId, this.action);
    }
    _edit(){
        console.log(this.itemId, this.action);
    }

    modalShow = ()=>{
        $(this.modal).modal('show');
    }
}

var forum = new ForumActions();
