//var classie = importScripts('/../js/classie/classie.js');

class Person {

    constructor(name:string)
    {
        this.name=name;
    }
    name: string;
}

function greeter (person:Person){
    return "hallo "+person.name;
}

var person = new Person("Vlad");

class Table {
    constructor(className:string)
    {
        table= document.querySelector(className);
    }
    table: HTMLElement;
}

//document.body.innerHTML = greeter(person);
var t = new Table('.table');
console.log(t);

var table = document.querySelector('.table');
console.log(table);
var tableTr = [].slice.call(table.querySelectorAll('tr'));
var successTr = table.querySelector('.success');

tableTr.forEach(function(tr){
    tr.addEventListener('click', function(ev){
        ev.preventDefault();
        if (successTr) successTr.classList.remove('success');
        this.classList.add('success');
    })
});

//console.log(tableTr);


