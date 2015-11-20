/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
var PipelineEdit = (function () {
    function PipelineEdit(tableId) {
        this.tableId = tableId;
        this.table = document.getElementById(this.tableId);
        this.itemId = this.table.dataset.itemid;
        this.row = [].slice.call(this.table.querySelector('tbody').querySelectorAll('tr'));
        this.rowAdd = this.table.querySelector('tfoot').querySelector('tr');
        this.current = 0;
        this._init();
    }
    PipelineEdit.prototype._init = function () {
        var self = this, btn = [];
        this.row.forEach(function (tr) {
            btn = [].slice.call(tr.querySelectorAll('button'));
            btn.forEach(function (btn) {
                btn.addEventListener('click', function (ev) {
                    ev.preventDefault();
                    self._initEvent(tr, this);
                    self.current = self.row.indexOf(tr);
                });
            });
        });
        this._initAdd();
    };
    PipelineEdit.prototype._initAdd = function () {
        var self = this, tr = this.rowAdd, selectProp = tr.querySelector('select'), selectVal = selectProp.value, aInput = [].slice.call(tr.querySelectorAll('input')), btn = tr.querySelector('button[data-event="add"]');
        this._addInputRead(selectVal, aInput, btn);
        selectProp.addEventListener('change', function (ev) {
            ev.preventDefault();
            var val = this.value;
            self._addInputRead(val, aInput, btn);
        });
        aInput[0].addEventListener('input', function (ev) {
            ev.preventDefault();
            classie.remove(btn, 'hidden');
            if (this.value === '')
                classie.add(btn, 'hidden');
        });
        btn.addEventListener('click', function (ev) {
            ev.preventDefault();
            self._initEvent(tr, this);
        });
    };
    PipelineEdit.prototype._addInputRead = function (selectVal, aInput, btn) {
        aInput.forEach(function (el) {
            if (selectVal == 0) {
                el.blur();
                el.readOnly = true;
                classie.add(btn, 'hidden');
            }
            else {
                el.readOnly = false;
                aInput[0].focus();
                if (aInput[0].value != '')
                    classie.remove(btn, 'hidden');
            }
        });
    };
    PipelineEdit.prototype._initEvent = function (tr, btn) {
        var btnEvent = btn.dataset.event;
        console.log(tr);
        if (btnEvent == 'edit') {
            var tr_current = this.row[this.current];
            if (!classie.has(btn, 'active')) {
                this._reset(tr_current);
                this._edit(tr, btn);
            }
            else {
                this._reset(tr);
            }
        }
        if (btnEvent == 'add') {
            this._add(tr);
        }
    };
    PipelineEdit.prototype._edit = function (tr, btn) {
        var aInput = [].slice.call(tr.querySelectorAll('input')), btnSave = tr.querySelector('button[data-event="save"]');
        classie.add(btn, 'active');
        classie.remove(btnSave, 'hidden');
        aInput.forEach(function (input) {
            classie.remove(input, 'input-hidden');
            classie.add(input, 'form-control');
            classie.add(input, 'input-sm');
            input.readOnly = false;
        });
        aInput[0].focus();
    };
    PipelineEdit.prototype._add = function (tr) {
        var serialise = $(tr).find('form').serializeArray();
        serialise.push({ name: 'pipelineId', value: this.itemId });
        var data = sendAjax('/admin/pipeline-property-value/add-test', serialise);
        console.log(data);
    };
    PipelineEdit.prototype._delete = function (tr) {
    };
    PipelineEdit.prototype._reset = function (tr) {
        var aInput = [].slice.call(tr.querySelectorAll('input')), btn = tr.querySelector('button.active'), btnSave = tr.querySelector('button[data-event="save"]');
        if (btn) {
            classie.add(btnSave, 'hidden');
            classie.remove(btn, 'active');
            aInput.forEach(function (input) {
                classie.add(input, 'input-hidden');
                classie.remove(input, 'form-control');
                classie.remove(input, 'input-sm');
                input.readOnly = true;
            });
            btn.blur();
        }
    };
    return PipelineEdit;
})();
var tableProperty = new PipelineEdit('pipelineProperty');
var sendAjax = function (url, data) {
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'html',
        data: data,
        error: function (jqXHR, textStatus, errorThrown) {
            return console.log("AJAX Error: " + textStatus);
        },
        success: function (data, textStatus, jqXHR) {
            return data;
        }
    });
};
//# sourceMappingURL=pipelinePropertyEdit.js.map