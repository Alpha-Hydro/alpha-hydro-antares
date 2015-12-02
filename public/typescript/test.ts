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

function showBtnGroup(){
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

function insertInputTrEdit(tr:any[] = table.selectTd()){
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

function sendAjax(action, id, ajaxContent){
    $.ajax({
        url: '/utils/test/'+action,
        type: 'POST',
        dataType: 'html',
        data: {
            propertyId: id,
        },
        error: function(jqXHR, textStatus, errorThrown) {
            return console.log("AJAX Error: " + textStatus);
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
            return ajaxContent.html(data);
        }
    });
}

var eventRow = function(event: Event):any{
    event.preventDefault();

    if (table.selectTr() && !classie.has(this, 'success'))
        classie.remove(table.selectTr(),'success');
    classie.toggle(this, 'success');
    showBtnGroup();
    this.addEventListener('click', eventRow, false);
};


var modalForm = function(action:string):any{
    var form:Element = document.querySelector('form#pipelinePropertyValue');
    if(action == 'add'){
        return false
    }
    if(action == 'edit'){}
    if(action == 'delete'){}
};

function getInput(src, val, ajaxContent){
    $.ajax({
        url: src,
        type: 'POST',
        dataType: 'html',
        data: {
            'propertyId': val
        },
        error: function (jqXHR, textStatus, errorThrown) {
            return console.log("AJAX Error: " + textStatus);
        },
        success: function (data, textStatus, jqXHR) {
            return ajaxContent.html(data);
        }
    });
}

btnGroupDisabled(true);
var table = new Table('table[data-edit]');
table.tableTr().forEach(function(tr){
    tr.addEventListener('click', eventRow, false);
});

$('#propertyEditModal').on('show.bs.modal',function(event){
    var button:any = $(event.relatedTarget);
    var action:any = button.data('action');

    var form:any = $('#pipelinePropertyValue');
    if(action == 'edit'){
        form.find('#propertyId').prop('disabled', true);
    }
    if(action == 'delete'){

    }

    var modal = $(this);
    modal.find('.modal-title').text(action);

});


