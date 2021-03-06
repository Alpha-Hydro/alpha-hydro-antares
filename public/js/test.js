var Table = (function () {
    function Table(className) {
        this.className = className;
    }
    Table.prototype.table = function () {
        return document.querySelector(this.className);
    };
    Table.prototype.tableHead = function () {
        return [].slice.call(this.table().querySelector('thead').querySelectorAll('th'));
    };
    Table.prototype.tableEditCol = function () {
        return [].slice.call(this.table().querySelector('thead').querySelectorAll('th[data-name]'));
    };
    Table.prototype.tableTr = function () {
        return [].slice.call(this.table().querySelector('tbody').querySelectorAll('tr'));
    };
    Table.prototype.selectTr = function (classAlert) {
        if (classAlert === void 0) { classAlert = '.success'; }
        return this.table().querySelector(classAlert);
    };
    Table.prototype.inputSelectTr = function () {
        return [].slice.call(this.selectTr().querySelectorAll('input'));
    };
    Table.prototype.selectTd = function () {
        return [].slice.call(this.selectTr().querySelectorAll('td'));
    };
    return Table;
}());
var Button = (function () {
    function Button(className) {
        this.className = className;
    }
    Button.prototype.buttonGroup = function () {
        return document.querySelector(this.className);
    };
    Button.prototype.buttons = function (tagName) {
        if (tagName === void 0) { tagName = 'button'; }
        return [].slice.call(this.buttonGroup().querySelectorAll(tagName));
    };
    return Button;
}());
function btnGroupDisabled(isDisable) {
    if (isDisable === void 0) { isDisable = false; }
    var btnGroup = new Button('.btn-group');
    btnGroup.buttons().forEach(function (el) {
        if (!classie.has(el, 'no-disabled'))
            el.disabled = isDisable;
    });
}
function showBtnGroup() {
    return btnGroupDisabled((table.selectTr()) ? false : true);
}
function editColumns() {
    var columns = [];
    table.tableEditCol().forEach(function (col) {
        var column = [table.tableHead().indexOf(col), col.dataset.name];
        columns.push(column);
    });
    return columns;
}
function insertInputTrEdit(tr) {
    if (tr === void 0) { tr = table.selectTd(); }
    tr.forEach(function (td) {
        var val = td.innerHTML;
        var index = td.cellIndex;
        setInputTdEdit(td, index, val);
    });
    if (table.inputSelectTr())
        table.inputSelectTr()[0].focus();
}
function setInputTdEdit(td, index, val) {
    editColumns().forEach(function (column) {
        if (column[0] == index) {
            var input = document.createElement('input');
            input.value = val;
            input.name = column[1];
            classie.add(input, 'form-control');
            classie.add(input, 'input-sm');
            td.innerHTML = '';
            td.appendChild(input);
            input.addEventListener('focus', function (ev) {
                ev.preventDefault();
            });
        }
    });
}
function sendAjax(action, id, ajaxContent) {
    $.ajax({
        url: '/utils/test/' + action,
        type: 'POST',
        dataType: 'html',
        data: {
            propertyId: id
        },
        error: function (jqXHR, textStatus, errorThrown) {
            return console.log("AJAX Error: " + textStatus);
        },
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            return ajaxContent.html(data);
        }
    });
}
var eventRow = function (event) {
    event.preventDefault();
    if (table.selectTr() && !classie.has(this, 'success'))
        classie.remove(table.selectTr(), 'success');
    classie.toggle(this, 'success');
    showBtnGroup();
    this.addEventListener('click', eventRow, false);
};
var modalForm = function (action) {
    var form = document.querySelector('form#pipelinePropertyValue');
    if (action == 'add') {
        return false;
    }
    if (action == 'edit') { }
    if (action == 'delete') { }
};
function getInput(src, val, ajaxContent) {
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
table.tableTr().forEach(function (tr) {
    tr.addEventListener('click', eventRow, false);
});
$('#propertyEditModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var action = button.data('action');
    var form = $('#pipelinePropertyValue');
    if (action == 'edit') {
        form.find('#propertyId').prop('disabled', true);
    }
    if (action == 'delete') {
    }
    var modal = $(this);
    modal.find('.modal-title').text(action);
});
//# sourceMappingURL=test.js.map