/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
var PipelineEdit = (function () {
    function PipelineEdit(tableId) {
        this.tableId = tableId;
        this.table = document.getElementById(this.tableId);
        this.row = [].slice.call(this.table.querySelector('tbody').querySelectorAll('tr'));
        this.buttons = {
            edit: [].slice.call(this.table.querySelectorAll('button.btn-property-edit')),
            deleted: [].slice.call(this.table.querySelectorAll('button.btn-property-delete')),
            save: [].slice.call(this.table.querySelectorAll('button.btn-property-save')),
            add: this.table.querySelector('button.btn-property-add')
        };
        this._init();
    }
    PipelineEdit.prototype._init = function () {
        var table = this.table, btn = [];
        this.row.forEach(function (tr) {
            btn = [].slice.call(table.querySelectorAll('button'));
        });
        btn.forEach(function (btn) {
            btn.addEventListener('click', this._initEvent, false);
        });
        //this._initEvent(btn);
    };
    PipelineEdit.prototype._initEvent = function (event) {
        console.log(event);
    };
    return PipelineEdit;
})();
var tableProperty = new PipelineEdit('pipelineProperty');
//tableProperty.init();
//console.log(tableProperty.buttons.edit);
/*
tableProperty.buttons.edit.forEach(function(el){
    el.addEventListener('click', function(ev){
        var btn:Element = ev.target,
            rowTable = btn.parentElement.parentElement.parentElement,
            rowInput = [].slice.call(rowTable.querySelectorAll('input'));

        if(!classie.has(this, 'active')){
            classie.add(this, 'active');

            rowInput.forEach(function(el){
                classie.remove(el, 'input-hidden');
                classie.add(el, 'form-control');
                $(el).prop('readonly', false);
            });

            rowInput[0].focus()
        }



        console.log(rowInput);
    });
});*/
//# sourceMappingURL=pipelinePropertyEdit.js.map