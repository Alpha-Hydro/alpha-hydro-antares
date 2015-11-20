/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />

class PipelineEdit {
    table:any;
    itemId:number;
    row:any;
    rowAdd: any;
    current: number;
    constructor(public tableId: string){
        this.table = document.getElementById(this.tableId);
        this.itemId = this.table.dataset.itemid;
        this.row = [].slice.call(this.table.querySelector('tbody').querySelectorAll('tr'));
        this.rowAdd = this.table.querySelector('tfoot').querySelector('tr');
        this.current = 0;

        this._init();
    }

    _init(){
        var self = this,
            btn:any = [];
        this.row.forEach(function(tr){
            btn = [].slice.call(tr.querySelectorAll('button'));
            btn.forEach(function(btn){
                btn.addEventListener('click',function(ev){
                    ev.preventDefault();
                    self._initEvent(tr, this);
                    self.current = self.row.indexOf(tr);
                });
            });
        });

        this._initAdd();
    }

    _initAdd(){
        var self = this,
            tr:any = this.rowAdd,
            selectProp:any = tr.querySelector('select'),
            selectVal:number = selectProp.value,
            aInput:any = [].slice.call(tr.querySelectorAll('input')),
            btn:Element = tr.querySelector('button[data-event="add"]');


        this._addInputRead(selectVal, aInput, btn);

        selectProp.addEventListener('change', function(ev){
            ev.preventDefault();
            var val:number = this.value;
            self._addInputRead(val, aInput, btn);
        });

        aInput[0].addEventListener('input', function(ev){
            ev.preventDefault();
            classie.remove(btn, 'hidden');

            if(this.value === '') classie.add(btn, 'hidden');
        });

        btn.addEventListener('click', function(ev){
            ev.preventDefault();
            self._initEvent(tr, this);
        });
    }

    _addInputRead(selectVal: number, aInput:any, btn:any){
        aInput.forEach(function(el){
            if(selectVal == 0){
                el.blur();
                el.readOnly = true;
                classie.add(btn, 'hidden');
            }
            else{
                el.readOnly = false;
                aInput[0].focus();
                if(aInput[0].value != '')
                    classie.remove(btn, 'hidden');
            }
        });
    }

    _initEvent(tr, btn){
        var btnEvent = btn.dataset.event;
        console.log(tr);

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
        var serialise = $(tr).find('form').serializeArray();
        serialise.push({name: 'pipelineId', value: this.itemId});
        var data:any = sendAjax('/admin/pipeline-property-value/add-test', serialise);
        console.log(data);
    }

    _delete(tr){

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
}

var tableProperty = new PipelineEdit('pipelineProperty');

var sendAjax = (url, data) => {
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'html',
        data: data,
        error: function(jqXHR, textStatus, errorThrown) {
            return console.log("AJAX Error: " + textStatus);
        },
        success: function(data, textStatus, jqXHR) {
            return data;
        }
    });
};

