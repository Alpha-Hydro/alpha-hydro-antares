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

//document.body.innerHTML = greeter(person);
console.log(greeter(person));