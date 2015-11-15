//var classie = importScripts('/../js/classie/classie.js');
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
})();
function greeter(person) {
    return "hallo " + person.name;
}
var person = new Person("Vlad");
var Table = (function () {
    function Table(className) {
        this.className = className;
    }
    //public tbl = this.table();
    Table.prototype.table = function () {
        return document.querySelector(this.className);
    };
    Table.prototype.tableTr = function () {
        return [].slice.call(this.table().querySelectorAll('tr'));
    };
    Table.prototype.successTr = function (classAlert) {
        if (classAlert === void 0) { classAlert = 'success'; }
        return document.querySelector(classAlert);
    };
    return Table;
})();
//document.body.innerHTML = greeter(person);
var table = new Table('.table');
table.tableTr().forEach(function (tr) {
    tr.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (table.successTr())
            table.successTr().classList.remove('success');
        this.classList.add('success');
        console.log(table.successTr());
    });
});
//console.log(tableTr);
//# sourceMappingURL=test.js.map