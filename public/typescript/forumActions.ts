/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
/// <reference path="bootstrap.d.ts" />

class ForumActions{
    itemId:number;
    action:string;

    btnGroups:any;

    modal:any;
    modalTitle:any;
    modalForumForm:any;


    constructor(){
        this.btnGroups = [].slice.call(document.querySelectorAll('.btn-group'));
        this.modal = document.getElementById('modalForumAdmin');
        this.modalTitle = document.getElementById('myModalLabel');
        this.modalForumForm = document.getElementById('modalForumForm');

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
            button:HTMLButtonElement[] = [].slice.call(btnGroup.querySelectorAll('button'));

        button.forEach(function(btn){
            btn.addEventListener('click',(ev)=>{
                ev.preventDefault();
                var el:any = ev.target,
                    action:string = el.dataset.action;
                //console.log(btn.dataset.action);
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
        console.log(this.itemId, this.action);
       /* var title:any = 'Удалить сообщение',
            body:any = document.createElement('p'),
            button = {
                className: 'btn btn-danger',
                text: 'Удалить'
            };

        body.textContent = 'Вы действительно хотите удалить сообщение '+this.itemId+'!';

        this.modalShow(title, body, button);*/
    }
    _reply(){
        console.log(this.itemId, this.action);
        /*var title:any = 'Ответить на сообщение',
            body:any = document.createElement('textarea'),
            button = {
                className: 'btn btn-success',
                text: 'Отправить'
            };

        body.name = "contentMarkdown";
        body.rows = "8";
        body.setAttribute('class', 'form-control');
        body.autofocus = true;

        console.log(body);

        this.modalShow(title, body, button);*/
    }
    _edit(){
        console.log(this.itemId, this.action);
    }

    modalShow = (title:string, body:any, button:any)=>{

        var actionButton:any = this.modalForumForm.elements.action,
            modalBody:any = this.modalForumForm.children.item('modalBody');

        this.modalForumForm.action = this.action+'/'+this.itemId;
        this.modal.querySelector('#modalLabel').innerText = title;
        modalBody.innerHTML = '';
        modalBody.appendChild(body);

        actionButton.setAttribute('class', button.className);
        actionButton.innerText = button.text;

        $(this.modal).modal('show');
    }
}

var forum = new ForumActions();
