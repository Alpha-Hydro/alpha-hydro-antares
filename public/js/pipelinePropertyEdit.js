/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
var PipelineEdit = (function () {
    function PipelineEdit(tableId) {
        this.tableId = tableId;
        this.table = document.getElementById(this.tableId);
        this.row = [].slice.call(this.table.querySelector('tbody').querySelectorAll('tr'));
        this.current = 0;
        this._init();
    }
    PipelineEdit.prototype._init = function () {
        var self = this, btn = [];
        this.row.forEach(function (tr) {
            btn = [].slice.call(tr.querySelectorAll('button'));
            btn.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    self._initEvent(tr, this);
                    self.current = self.row.indexOf(tr);
                });
            });
        });
    };
    PipelineEdit.prototype._initEvent = function (tr, btn) {
        var btnEvent = btn.dataset.event;
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
//# sourceMappingURL=pipelinePropertyEdit.js.map