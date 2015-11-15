/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />

class Table {
    constructor(public className: string){}
    table(){
        return document.querySelector(this.className);
    }
    tableTr(){
        return [].slice.call(this.table().querySelector('tbody').querySelectorAll('tr'));
    }
    selectTr(classAlert: string = '.success'){
        return this.table().querySelector(classAlert);
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
        console.log(el.disabled);
    });
}

function selectedTr(){
    return btnGroupDisabled((table.selectTr())?false:true);
}

var table = new Table('.table');

table.tableTr().forEach(function(tr){
    tr.addEventListener('click', function(ev){
        ev.preventDefault();
        //if (table.selectTr()) table.selectTr().classList.remove('success');
        if (table.selectTr() && !classie.has(this, 'success'))
            classie.remove(table.selectTr(),'success');
        //this.classList.add('success');
        classie.toggle(this, 'success');
        selectedTr();
    })
});
//btnGroupDisabled(false);


