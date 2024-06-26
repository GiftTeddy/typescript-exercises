class Person {
    constructor(name, age, ssn) {
        this.name = name;
        this.age = age;
        this._socialSecurityNumber = ssn; 
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

let person = new Person("Gift", 33, "023154485");

console.log("Name: " + person.getName());
console.log("Age: " + person.getAge());
