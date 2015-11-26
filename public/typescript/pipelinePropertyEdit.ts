/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
/// <reference path="bootstrap.d.ts" />

class PipelineEdit {
    table:any;
    itemId:number;
    row:any;
    rowFooter: any;
    current: number;
    response: any;
    constructor(public tableId: string){
        this.table = document.getElementById(this.tableId);
        this.itemId = this.table.dataset.itemid;
        this.row = [].slice.call(this.table.querySelector('tbody').querySelectorAll('tr'));
        this.rowFooter = this.table.querySelector('tfoot').querySelector('tr');
        this.current = 0;
        this.response = null;

        this._init();
    }

    _init(){
        var self = this;
        this.row.forEach(function(tr){
            self._initRow(tr);
        });

        this._initSelect();
        this._newFormEvent();
    }

    _initRow(tr:HTMLTableRowElement){
        var self = this,
            btn:HTMLButtonElement[] = [].slice.call(tr.querySelectorAll('button'));

        btn.forEach(function(btn){
            btn.addEventListener('click',function(ev){
                ev.preventDefault();
                self._initEvent(tr, this);
                self.current = self.row.indexOf(tr);
            });
        });
    }

    _initSelect(){
        var self = this,
            tr:any = this.rowFooter,
            selectProp:any = tr.querySelector('select'),
            selectVal:number = selectProp.value,
            aInput:any[] = [].slice.call(tr.querySelectorAll('input')),
            modal:any = document.getElementById('propertyNewModal'),
            btn:Element = tr.querySelector('button[data-event="add"]');

        this._addInputRead(selectVal, aInput, btn);

        selectProp.addEventListener('change', function(ev){
            ev.preventDefault();
            var val:any = ev.target.value;

            if(val == 'new'){
                var select = this,
                    modalForm = modal.querySelector('form');
                $(modal)
                    .modal('show')
                    .on('hidden.bs.modal', function () {
                        select.value = 0;
                        modalForm.reset();
                        modalForm.elements.newPropertyValue.readOnly = true;
                        modalForm.elements.formBtnSubmit.disabled = true;
                    });
            }

            self._addInputRead(val, aInput, btn);
        });

        aInput[0].addEventListener('input', function(ev){
            ev.preventDefault();
            classie.remove(btn, 'hidden');

            if(ev.target.value === '') classie.add(btn, 'hidden');
        });

        btn.addEventListener('click', function(ev){
            ev.preventDefault();
            self._initEvent(tr, this);
        });
    }

    _newRow(propertyId:any = 'new', propertyName:string = 'test', propertyValue:string = 'test'){
        var tbody = this.table.tBodies.item('tbody'),
            newRow = document.createElement('tr'),
            input = document.createElement('input'),
            cellsTable = this.table.tHead.rows[0].cells,
            cellValue = this.table.tHead.querySelector('th[data-name="value"]'),
            buttons = {
                classBtnGroup: 'btn-group btn-group-sm mr1',
                edit: '<button class="btn btn-default" data-event="edit"><span class="glyphicon glyphicon-pencil"></span></button>',
                deleted: '<button class="btn btn-default" data-event="delete"><span class="glyphicon glyphicon-trash"></span></button>',
                saved: '<button type="button" class="btn btn-sm btn-success hidden" data-event="save">Сохранить</button>',
            },
            btnGroup = document.createElement('div');

        newRow.id = propertyId;

        for (var i = 0; i < cellsTable.length; i++) {
            var td = document.createElement('td');
            newRow.appendChild(td);
        }

        newRow.cells[0].textContent = propertyName;

        input.classList.add('input-hidden');
        input.type = 'text';
        input.readOnly = true;
        input.value = propertyValue;
        newRow.cells[cellValue.cellIndex].appendChild(input);

        btnGroup.className = buttons.classBtnGroup;
        btnGroup.insertAdjacentHTML('beforeend',buttons.edit);
        btnGroup.insertAdjacentHTML('beforeend',buttons.deleted);

        newRow.cells[newRow.cells.length-1].appendChild(btnGroup);
        btnGroup.insertAdjacentHTML('afterEnd',buttons.saved);

        tbody.appendChild(newRow);

        this.row.push(newRow);
        this._initRow(newRow);
    }

    _newFormEvent(){
        var self = this,
            form:any = document.getElementById('newPipelineProperty'),
            propertyName: any = form.elements.newPropertyName,
            propertyValue: any = form.elements.newPropertyValue,
            formBtnSubmit: any = form.elements.formBtnSubmit;

        propertyValue.readOnly = true;
        formBtnSubmit.disabled = true;

        propertyName.addEventListener('input', function(ev){
            ev.preventDefault();
            propertyValue.readOnly = false;
            if(ev.target.value == ''){
                propertyValue.readOnly = true;
                formBtnSubmit.disabled = true;
            }
        });
        propertyValue.addEventListener('input', function(ev){
            ev.preventDefault();
            formBtnSubmit.disabled = !ev.target.value;
        });
        formBtnSubmit.addEventListener('click', function(ev){
            ev.preventDefault();
            var serialize:any[] = $(ev.target.form).serializeArray();
            serialize.push({name: 'pipelineId', value: self.itemId});
            self._sendAjax('/admin/pipeline-property-value/add-new-property', serialize, callbackNew);
        });
    }

    _addInputRead(selectVal: any, aInput:any, btn:any){
            if(selectVal == 0 || selectVal == 'new'){
                aInput.forEach(function(el){
                    el.blur();
                    el.readOnly = true;
                    classie.add(btn, 'hidden');
                });
            }
            else{
                aInput.forEach(function(el){
                    el.readOnly = false;
                    aInput[0].focus();
                    if(aInput[0].value != '')
                        classie.remove(btn, 'hidden');
                });
            }
    }

    _initEvent(tr, btn){
        var btnEvent = btn.dataset.event;
        //console.log(tr);

        if(btnEvent == 'edit'){
            var tr_current = this.row[this.current];

            if(!classie.has(btn, 'active')){
                this._reset(tr_current);
                this._edit(tr, btn);
            }
            else {
                this._reset(tr);
            }
        }

        if(btnEvent == 'add'){
            this._add(tr);
        }

        if(btnEvent == 'delete'){
            this._delete(tr);
        }
    }

    _edit(tr, btn){
        var aInput:any[] = [].slice.call(tr.querySelectorAll('input')),
            btnSave = tr.querySelector('button[data-event="save"]');
        classie.add(btn,'active');
        classie.remove(btnSave,'hidden');
        aInput.forEach(function(input){
            classie.remove(input, 'input-hidden');
            classie.add(input, 'form-control');
            classie.add(input, 'input-sm');
            input.readOnly = false;
        });
        aInput[0].focus();
    }

    _add(tr){
        var selectProperty = tr.querySelector('select#propertyId'),
            inputValue = tr.querySelector('input#value'),
            data = {
                propertyId: selectProperty.value,
                pipelineId: this.itemId,
                propertyValue: inputValue.value
            };
        //console.log(data);
        this._sendAjax('/admin/pipeline-property-value/add', data, callbackAdd);
    }

    _delete(tr){
        var data = {valueId: tr.id};
        this._sendAjax('/admin/pipeline-property-value/delete', data, callbackDel);
    }

    _reset(tr){
        var aInput:any = [].slice.call(tr.querySelectorAll('input')),
            btn = tr.querySelector('button.active'),
            btnSave = tr.querySelector('button[data-event="save"]');

        if(btn){
            classie.add(btnSave,'hidden');
            classie.remove(btn, 'active');
            aInput.forEach(function(input){
                classie.add(input, 'input-hidden');
                classie.remove(input, 'form-control');
                classie.remove(input, 'input-sm');
                input.readOnly = true;
            });
            btn.blur();
        }
    }

    _sendAjax = (url:string, data:any, callback:any = this._callbackData) => {
        console.log(data);
        $.ajax({
                 url: url,
                 type: 'POST',
                 dataType: 'json',
                 cache: false,
                 data: data,
                 error: function(jqXHR, textStatus, errorThrown) {
                     return console.log("AJAX Error: " + textStatus);
                 },
                 success: callback,
             });
    };

    _callbackData = (data) => {
        console.log(data);
    };
}

var tableProperty = new PipelineEdit('pipelineProperty');

var callbackNew = (data) => {
    if(data && typeof data.errorMessage != "undefined"){
        $('#propertyNewModal').find('#errorMessage').html(data.errorMessage);
    }

    if(data && typeof data.property != 'undefined'){
        tableProperty._newRow(
            data.property.propertyValueId,
            data.property.propertyName,
            data.property.propertyValue
        );
        $('#propertyNewModal').modal('hide');
    }
};

var callbackAdd = (data) => {
    console.log(data);
    if(data && typeof data.errorMessage != "undefined"){
        console.log(data.errorMessage);
    }

    if(data && typeof data.property != 'undefined'){
        tableProperty._newRow(
            data.property.propertyValueId,
            data.property.propertyName,
            data.property.propertyValue
        );
        var select = tableProperty.rowFooter.querySelector('select'),
            selIdx = select.selectedIndex;
        select.options.remove(selIdx);
    }
};

var callbackDel = (data) => {
    if(data && typeof data.rowDeleted != 'undefined'){
        console.log(data.rowDeleted.rowId);
        console.log(data.rowDeleted.message);
        var tr = document.getElementById(data.rowDeleted.rowId);
        tr.remove();
    }
};



