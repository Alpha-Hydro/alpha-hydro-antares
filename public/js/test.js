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
        table = document.querySelector(className);
    }
    return Table;
})();
//document.body.innerHTML = greeter(person);
var t = new Table('.table');
console.log(t);
var table = document.querySelector('.table');
console.log(table);
var tableTr = [].slice.call(table.querySelectorAll('tr'));
var successTr = table.querySelector('.success');
tableTr.forEach(function (tr) {
    tr.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (successTr)
            successTr.classList.remove('success');
        this.classList.add('success');
    });
});
//console.log(tableTr);
//# sourceMappingURL=test.js.map