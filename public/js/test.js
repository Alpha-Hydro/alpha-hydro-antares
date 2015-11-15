/// <reference path="jquery.d.ts" />
/// <reference path="classie.d.ts" />
var Table = (function () {
    function Table(className) {
        this.className = className;
    }
    Table.prototype.table = function () {
        return document.querySelector(this.className);
    };
    Table.prototype.tableTr = function () {
        return [].slice.call(this.table().querySelector('tbody').querySelectorAll('tr'));
    };
    Table.prototype.selectTr = function (classAlert) {
        if (classAlert === void 0) { classAlert = '.success'; }
        return this.table().querySelector(classAlert);
    };
    return Table;
})();
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
})();
function btnGroupDisabled(isDisable) {
    if (isDisable === void 0) { isDisable = false; }
    var btnGroup = new Button('.btn-group');
    btnGroup.buttons().forEach(function (el) {
        if (!classie.has(el, 'no-disabled'))
            el.disabled = isDisable;
        console.log(el.disabled);
    });
}
function selectedTr() {
    return btnGroupDisabled((table.selectTr()) ? false : true);
}
var table = new Table('.table');
table.tableTr().forEach(function (tr) {
    tr.addEventListener('click', function (ev) {
        ev.preventDefault();
        //if (table.selectTr()) table.selectTr().classList.remove('success');
        if (table.selectTr() && !classie.has(this, 'success'))
            classie.remove(table.selectTr(), 'success');
        //this.classList.add('success');
        classie.toggle(this, 'success');
        selectedTr();
    });
});
//btnGroupDisabled(false);
//# sourceMappingURL=test.js.map