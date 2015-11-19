/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />

class PipelineEdit {
    table:any;
    row:any;
    buttons: any;
    current: number;
    constructor(public tableId: string){
        this.table = document.getElementById(this.tableId);
        this.row = [].slice.call(this.table.querySelector('tbody').querySelectorAll('tr'));
        this.current = 0;

        this._init();
    }

    _init(){
        var self = this,
            btn:any = [];
        this.row.forEach(function(tr){
            btn = [].slice.call(tr.querySelectorAll('button'));
            btn.forEach(function(btn){
                btn.addEventListener('click',function(){
                    self._initEvent(tr, this);
                    self.current = self.row.indexOf(tr);
                });
            });
        });
    }

    _initEvent(tr, btn){
        var btnEvent = btn.dataset.event;

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
    }

    _edit(tr, btn){
        var aInput:any = [].slice.call(tr.querySelectorAll('input')),
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

