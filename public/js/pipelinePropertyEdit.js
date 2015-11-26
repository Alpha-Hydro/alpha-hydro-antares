/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
/// <reference path="bootstrap.d.ts" />
var PipelineEdit = (function () {
    function PipelineEdit(tableId) {
        var _this = this;
        this.tableId = tableId;
        this._sendAjax = function (url, data, callback) {
            if (callback === void 0) { callback = _this._callbackData; }
            console.log(data);
            /*$.ajax({
                     url: url,
                     type: 'POST',
                     dataType: 'json',
                     cache: false,
                     data: data,
                     error: function(jqXHR, textStatus, errorThrown) {
                         return console.log("AJAX Error: " + textStatus);
                     },
                     success: callback,
                 });*/
        };
        this._callbackData = function (data) {
            console.log(data);
        };
        this.table = document.getElementById(this.tableId);
        this.itemId = this.table.dataset.itemid;
        this.row = [].slice.call(this.table.querySelector('tbody').querySelectorAll('tr'));
        this.rowAdd = this.table.querySelector('tfoot').querySelector('tr');
        this.current = 0;
        this.response = null;
        this._init();
    }
    PipelineEdit.prototype._init = function () {
        var self = this;
        this.row.forEach(function (tr) {
            self._initRow(tr);
        });
        this._initAdd();
        this._newFormEvent();
    };
    PipelineEdit.prototype._initRow = function (tr) {
        var self = this, btn = [].slice.call(tr.querySelectorAll('button'));
        btn.forEach(function (btn) {
            btn.addEventListener('click', function (ev) {
                ev.preventDefault();
                self._initEvent(tr, this);
                self.current = self.row.indexOf(tr);
            });
        });
    };
    PipelineEdit.prototype._initAdd = function () {
        var self = this, tr = this.rowAdd, selectProp = tr.querySelector('select'), selectVal = selectProp.value, aInput = [].slice.call(tr.querySelectorAll('input')), modal = document.getElementById('propertyNewModal'), btn = tr.querySelector('button[data-event="add"]');
        this._addInputRead(selectVal, aInput, btn);
        selectProp.addEventListener('change', function (ev) {
            ev.preventDefault();
            var val = ev.target.value;
            if (val == 'new') {
                var select = this, modalForm = modal.querySelector('form');
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
        aInput[0].addEventListener('input', function (ev) {
            ev.preventDefault();
            classie.remove(btn, 'hidden');
            if (ev.target.value === '')
                classie.add(btn, 'hidden');
        });
        btn.addEventListener('click', function (ev) {
            ev.preventDefault();
            self._initEvent(tr, this);
        });
    };
    PipelineEdit.prototype._newRow = function (propertyId, propertyName, propertyValue) {
        if (propertyId === void 0) { propertyId = 'new'; }
        if (propertyName === void 0) { propertyName = 'test'; }
        if (propertyValue === void 0) { propertyValue = 'test'; }
        var tbody = this.table.tBodies.item('tbody'), newRow = document.createElement('tr'), input = document.createElement('input'), cellsTable = this.table.tHead.rows[0].cells, cellValue = this.table.tHead.querySelector('th[data-name="value"]'), buttons = {
            classBtnGroup: 'btn-group btn-group-sm mr1',
            edit: '<button class="btn btn-default" data-event="edit"><span class="glyphicon glyphicon-pencil"></span></button>',
            deleted: '<button class="btn btn-default" data-event="delete"><span class="glyphicon glyphicon-trash"></span></button>',
            saved: '<button type="button" class="btn btn-sm btn-success hidden" data-event="save">Сохранить</button>'
        }, btnGroup = document.createElement('div');
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
        btnGroup.insertAdjacentHTML('beforeend', buttons.edit);
        btnGroup.insertAdjacentHTML('beforeend', buttons.deleted);
        newRow.cells[newRow.cells.length - 1].appendChild(btnGroup);
        btnGroup.insertAdjacentHTML('afterEnd', buttons.saved);
        tbody.appendChild(newRow);
        this.row.push(newRow);
        this._initRow(newRow);
    };
    PipelineEdit.prototype._newFormEvent = function () {
        var self = this, form = document.getElementById('newPipelineProperty'), propertyName = form.elements.newPropertyName, propertyValue = form.elements.newPropertyValue, formBtnSubmit = form.elements.formBtnSubmit;
        propertyValue.readOnly = true;
        formBtnSubmit.disabled = true;
        propertyName.addEventListener('input', function (ev) {
            ev.preventDefault();
            propertyValue.readOnly = false;
            if (ev.target.value == '') {
                propertyValue.readOnly = true;
                formBtnSubmit.disabled = true;
            }
        });
        propertyValue.addEventListener('input', function (ev) {
            ev.preventDefault();
            formBtnSubmit.disabled = !ev.target.value;
        });
        formBtnSubmit.addEventListener('click', function (ev) {
            ev.preventDefault();
            var serialize = $(ev.target.form).serializeArray();
            serialize.push({ name: 'pipelineId', value: self.itemId });
            self._sendAjax('/admin/pipeline-property-value/add-new-property', serialize, callbackNew);
        });
    };
    PipelineEdit.prototype._addInputRead = function (selectVal, aInput, btn) {
        if (selectVal == 0 || selectVal == 'new') {
            aInput.forEach(function (el) {
                el.blur();
                el.readOnly = true;
                classie.add(btn, 'hidden');
            });
        }
        else {
            aInput.forEach(function (el) {
                el.readOnly = false;
                aInput[0].focus();
                if (aInput[0].value != '')
                    classie.remove(btn, 'hidden');
            });
        }
    };
    PipelineEdit.prototype._initEvent = function (tr, btn) {
        var btnEvent = btn.dataset.event;
        //console.log(tr);
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
        if (btnEvent == 'delete') {
            var data = { valueId: tr.id };
            this._sendAjax('/admin/pipeline-property-value/delete', data, callbackDel);
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
        var selectProperty = tr.querySelector('select#propertyId'), inputValue = tr.querySelector('input#value'), data = {
            propertyId: selectProperty.value,
            pipelineId: this.itemId,
            propertyValue: inputValue.value
        };
        //console.log(data);
        this._sendAjax('/admin/pipeline-property-value/add', data, callbackAdd);
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
var callbackNew = function (data) {
    if (data && typeof data.errorMessage != "undefined") {
        $('#propertyNewModal').find('#errorMessage').html(data.errorMessage);
    }
    if (data && typeof data.newProperty != 'undefined') {
        tableProperty._newRow(data.newProperty.propertyValueId, data.newProperty.propertyName, data.newProperty.propertyValue);
        $('#propertyNewModal').modal('hide');
    }
};
var callbackAdd = function (data) {
    console.log(data);
};
var callbackDel = function (data) {
    if (data && typeof data.rowDeleted != 'undefined') {
        console.log(data.rowDeleted.rowId);
        console.log(data.rowDeleted.message);
        var tr = document.getElementById(data.rowDeleted.rowId);
        tr.remove();
    }
};
//# sourceMappingURL=pipelinePropertyEdit.js.map