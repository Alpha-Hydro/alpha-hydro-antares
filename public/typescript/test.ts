/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />

class Table {
    constructor(public className: string){}
    table(){
        return document.querySelector(this.className);
    }
    tableTr(){
        return [].slice.call(this.table().querySelectorAll('tr'));
    }
    selectTr(classAlert: string = '.success'){
        return this.table().querySelector(classAlert);
    }
}

//document.body.innerHTML = greeter(person);
var table = new Table('.table');

table.tableTr().forEach(function(tr){
    tr.addEventListener('click', function(ev){
        ev.preventDefault();
        //if (table.selectTr()) table.selectTr().classList.remove('success');
        if (table.selectTr()) classie.remove(table.selectTr(),'success');
        //this.classList.add('success');
        classie.toggle(this, 'success');
    })
});

//console.log(tableTr);


