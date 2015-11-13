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
//document.body.innerHTML = greeter(person);
console.log(greeter(person));
//# sourceMappingURL=test.js.map