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
    constructor(public className: string){
    }
    //public tbl = this.table();
    table(){
        return document.querySelector(this.className);
    }
    tableTr(){
        return [].slice.call(this.table().querySelectorAll('tr'));
    }
    successTr(classAlert: string = 'success'){
        return document.querySelector(classAlert);
    }
}

//document.body.innerHTML = greeter(person);
var table = new Table('.table');

table.tableTr().forEach(function(tr){
    tr.addEventListener('click', function(ev){
        ev.preventDefault();
        if (table.successTr()) table.successTr().classList.remove('success');
        this.classList.add('success');
        console.log(table.successTr());
    })
});

//console.log(tableTr);


