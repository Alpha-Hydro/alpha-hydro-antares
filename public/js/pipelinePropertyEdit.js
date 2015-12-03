/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
/// <reference path="bootstrap.d.ts" />
var PipelineEdit = (function () {
    function PipelineEdit(tableId) {
        var _this = this;
        this.tableId = tableId;
        this._sendAjax = function (url, data, callback) {
            if (callback === void 0) { callback = _this._callbackData; }
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json',
                cache: false,
                data: data,
                error: function (jqXHR, textStatus, errorThrown) {
                    return console.log("AJAX Error: " + textStatus);
                },
                success: callback
            });
        };
        this._callbackData = function (data) {
            console.log(data);
        };
        this._selectOptions = function () {
            $.ajax({
                url: '/admin/pipeline/select-property-item-array',
                type: 'POST',
                dataType: 'html',
                cache: false,
                data: {
                    pipelineId: _this.itemId
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("AJAX Error: " + textStatus);
                },
                success: function (data, textStatus, jqXHR) {
                    $('select#propertyId').html(data);
                }
            });
        };
        this.table = document.getElementById(this.tableId);
        this.itemId = this.table.dataset.itemid;
        this.row = [].slice.call(this.table.querySelector('tbody').querySelectorAll('tr'));
        this.rowFooter = this.table.querySelector('tfoot').querySelector('tr');
        this.current = 0;
        this.response = null;
        this._init();
    }
    PipelineEdit.prototype._init = function () {
        var self = this;
        this.row.forEach(function (tr) {
            self._initRow(tr);
        });
        this._initSelect();
        this._modalFormEvent();
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
    PipelineEdit.prototype._initSelect = function () {
        var self = this, tr = this.rowFooter, selectProp = tr.querySelector('select'), selectVal = selectProp.value, aInput = [].slice.call(tr.querySelectorAll('input')), modal = document.getElementById('propertyNewModal'), btn = tr.querySelector('button[data-event="add"]');
        this._addInputRead(selectVal, aInput, btn);
        selectProp.addEventListener('change', function (ev) {
            ev.preventDefault();
            var val = ev.target.value;
            if (val == 'new') {
                var select = this, modalForm = modal.querySelector('form');
                $(modal)
                    .modal('show')
                    .on('shown.bs.modal', function () {
                    modalForm.elements.newPropertyName.focus();
                })
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
    PipelineEdit.prototype._resetSelect = function () {
        var row = this.rowFooter, select = row.querySelector('select'), inputs = [].slice.call(row.querySelectorAll('input')), btn = row.querySelector('button[data-event="add"]');
        select.value = '0';
        inputs.forEach(function (input) {
            input.value = '';
            input.readOnly = true;
        });
        btn.classList.add('hidden');
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
    PipelineEdit.prototype._rowDelete = function (rowId) {
        var row = document.getElementById(rowId);
        row.remove();
        return this;
    };
    PipelineEdit.prototype._modalFormEvent = function () {
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
        console.log(btnEvent);
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
            this._delete(tr);
        }
        if (btnEvent == 'save') {
            console.log(this.row[this.current]);
            this._save(tr);
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
            input.addEventListener('input', function (ev) {
                ev.preventDefault();
                btnSave.disabled = !ev.target.value;
            });
        });
        aInput[0].focus();
    };
    PipelineEdit.prototype._add = function (tr) {
        var selectProperty = tr.querySelector('select#propertyId'), inputValue = tr.querySelector('input#value'), data = {
            propertyId: selectProperty.value,
            pipelineId: this.itemId,
            propertyValue: inputValue.value
        };
        this._sendAjax('/admin/pipeline-property-value/add', data, callbackAdd);
    };
    PipelineEdit.prototype._delete = function (tr) {
        var data = { valueId: tr.id };
        this._sendAjax('/admin/pipeline-property-value/delete', data, callbackDel);
    };
    PipelineEdit.prototype._save = function (tr) {
        var valueId = tr.id, inputValue = tr.querySelector('input'), data = {
            valueId: valueId,
            value: inputValue.value
        };
        this._sendAjax('/admin/pipeline-property-value/save', data, callbackSave);
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
    if (data && typeof data.property != 'undefined') {
        tableProperty._newRow(data.property.propertyValueId, data.property.propertyName, data.property.propertyValue);
        $('#propertyNewModal').modal('hide');
    }
};
var callbackAdd = function (data) {
    if (data && typeof data.errorMessage != "undefined") {
        console.log(data.errorMessage);
    }
    if (data && typeof data.property != 'undefined') {
        tableProperty._newRow(data.property.propertyValueId, data.property.propertyName, data.property.propertyValue);
        tableProperty._selectOptions();
        tableProperty._resetSelect();
    }
};
var callbackDel = function (data) {
    if (data && typeof data.rowDeleted != 'undefined') {
        tableProperty._rowDelete(data.rowDeleted.rowId);
        tableProperty._selectOptions();
        tableProperty._resetSelect();
    }
};
var callbackSave = function (data) {
    console.log(data);
    if (data && typeof data.rowSaved != 'undefined') {
        console.log(data.rowSaved.message);
        tableProperty._reset(tableProperty.row[tableProperty.current]);
    }
};
//# sourceMappingURL=pipelinePropertyEdit.js.map