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
        return [].slice.call(this.table().querySelectorAll('tr'));
    };
    Table.prototype.selectTr = function (classAlert) {
        if (classAlert === void 0) { classAlert = '.success'; }
        return this.table().querySelector(classAlert);
    };
    return Table;
})();
//document.body.innerHTML = greeter(person);
var table = new Table('.table');
table.tableTr().forEach(function (tr) {
    tr.addEventListener('click', function (ev) {
        ev.preventDefault();
        //if (table.selectTr()) table.selectTr().classList.remove('success');
        if (table.selectTr())
            classie.remove(table.selectTr(), 'success');
        //this.classList.add('success');
        classie.toggle(this, 'success');
    });
});
//console.log(tableTr);
//# sourceMappingURL=test.js.map