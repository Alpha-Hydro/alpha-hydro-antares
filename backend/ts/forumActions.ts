/// <reference path="../../public/typescript/jquery.d.ts" />
/// <reference path="../../public/typescript/classie.d.ts" />
/// <reference path="../../public/typescript/bootstrap.d.ts" />

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
                var el:any = ev.currentTarget,
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
        var title:any = 'Удалить сообщение',
            body:any = document.createElement('p'),
            button = {
                className: 'btn btn-danger',
                text: 'Удалить'
            };

        body.textContent = 'Вы действительно хотите удалить сообщение '+this.itemId+'!';

        this.modalShow(title, body, button);
    }

    _reply(){
        var title:any = 'Ответить на сообщение',
            quest:any = document.getElementById('question'+this.itemId).querySelector('.panel-body'),
            body:any = document.createElement('div'),
            textarea:any = document.createElement('textarea'),
            button = {
                className: 'btn btn-success',
                text: 'Отправить'
            };

        body.appendChild(quest.cloneNode(true));

        textarea.name = "contentMarkdown";
        textarea.rows = "8";
        textarea.setAttribute('class', 'form-control');
        textarea.required = true;
        textarea.onfocus = true;

        body.appendChild(textarea);

        $(this.modal).on('shown.bs.modal', ()=>{
            $(textarea).focus();
        });

        this.modalShow(title, body, button);
    }

    _edit(){
        var title:any = 'Редактировать сообщение',
            context:any = document.getElementById('reply'+this.itemId).querySelector('.markdown-content'),
            body:any = document.createElement('div'),
            textarea:any = document.createElement('textarea'),
            button = {
                className: 'btn btn-success',
                text: 'Сохранить'
            };

        textarea.name = "contentMarkdown";
        textarea.rows = "8";
        textarea.setAttribute('class', 'form-control');
        textarea.required = true;
        textarea.onfocus = true;

        textarea.innerHTML = context.textContent.trim();

        //console.log(context.textContent.trim());

        body.appendChild(textarea);

        this.modalShow(title, body, button);
    }

    modalShow = (title:string, body:any, button:any)=>{

        var actionButton:any = this.modalForumForm.elements.action,
            modalBody:any = this.modalForumForm.children.item('modalBody');

        this.modalForumForm.action = this.action+'/'+this.itemId;
        this.modal.querySelector('#modalLabel').innerHTML = title;
        modalBody.innerHTML = '';
        modalBody.appendChild(body);

        actionButton.setAttribute('class', button.className);
        actionButton.innerText = button.text;

        $(this.modal).modal('show');
    }
}

var forum = new ForumActions();
