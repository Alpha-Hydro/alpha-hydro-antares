/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />

class TableEdit {
    //tableId:string;
    constructor(elementId: string){
       //this.tableId = elementId;
    }
    defaults:any = {
        btn: () => {
            var button: Element = document.createElement('button');
            button.setAttribute('type','button');
            button.classList.add('btn');
            button.classList.add('btn-sm');
            return button;
        },
        buttons: {
            edit: {
                classBtn: 'btn-sm btn-default',
                html: '<span class="glyphicon glyphicon-pencil"></span>',
                action: 'edit'
            },
            deleted: {
                classBtn: 'btn-default',
                html: '<span class="glyphicon glyphicon-trash"></span>',
                action: 'delete'
            },
            save: {
                classBtn: 'btn-success',
                html: 'Сохранить',
                action: 'save'
            },
            remove: {
                classBtn: 'btn-danger',
                html: '<span class="glyphicon glyphicon-remove"></span>',
                action: 'remove'
            }
        },
        onDraw: () =>{}
    };

    Draw = {}
}

var tableEdit = new TableEdit('table');

console.log(tableEdit.defaults.btn());