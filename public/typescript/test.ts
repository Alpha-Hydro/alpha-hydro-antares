/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />

class Table {
    constructor(public className: string){}
    table(){
        return document.querySelector(this.className);
    }
    tableHead(){
        return [].slice.call(this.table().querySelector('thead').querySelectorAll('th'));
    }
    tableEditCol(){
        return [].slice.call(this.table().querySelector('thead').querySelectorAll('th[data-name]'));
    }
    tableTr(){
        return [].slice.call(this.table().querySelector('tbody').querySelectorAll('tr'));
    }
    selectTr(classAlert: string = '.success'){
        return this.table().querySelector(classAlert);
    }
    inputSelectTr(){
        return [].slice.call(this.selectTr().querySelectorAll('input'));
    }
    selectTd(){
        return [].slice.call(this.selectTr().querySelectorAll('td'));
    }
}

class Button {
    constructor(public className: string){}
    buttonGroup(){
        return document.querySelector(this.className);
    }
    buttons(tagName: string = 'button'){
        return [].slice.call(this.buttonGroup().querySelectorAll(tagName))
    }
}

function btnGroupDisabled(isDisable: boolean = false){
    var btnGroup = new Button('.btn-group');
    btnGroup.buttons().forEach(function(el){
        if(!classie.has(el,'no-disabled'))
            el.disabled = isDisable;
    });
}

function selectedTr(){
    return btnGroupDisabled((table.selectTr())?false:true);
}

function editColumns(){
    var columns:any[] = [];
    table.tableEditCol().forEach(function(col){
        var column:any[] = [table.tableHead().indexOf(col), col.dataset.name];
        columns.push(column);
    });
    return columns;
}

function selectedTrEdit(tr:any[] = table.selectTd()){
    tr.forEach(function(td){
        var val: string = td.innerHTML;
        var index: number = td.cellIndex;
        setInputTdEdit(td, index, val);
    });
    if(table.inputSelectTr())
        table.inputSelectTr()[0].focus();
}

function setInputTdEdit(td: HTMLElement, index: number, val: string){
    editColumns().forEach(function(column){
        if(column[0] == index){
            var input = document.createElement('input');
            input.value = val;
            input.name = column[1];
            classie.add(input, 'form-control');
            classie.add(input, 'input-sm');
            td.innerHTML = '';
            td.appendChild(input);
            input.addEventListener('focus',function(ev){
               ev.preventDefault();
            });
        }
    });
}

var eventRow = function(event: Event):any{
    event.preventDefault();
    console.log(classie.has(this, 'success'));
    //if (table.selectTr()) table.selectTr().classList.remove('success');
    if (table.selectTr() && !classie.has(this, 'success'))
        classie.remove(table.selectTr(),'success');
    //this.classList.add('success');
    classie.toggle(this, 'success');
    selectedTr();
    selectedTrEdit();
};

btnGroupDisabled(true);
var table = new Table('table[data-edit]');
table.tableTr().forEach(function(tr){
    tr.addEventListener('click', eventRow, false);
});
