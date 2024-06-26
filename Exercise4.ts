class Person {
    name: string;
    age: number;
    private socialSecurityNumber: string;

    constructor(name: string, age: number, ssn: string) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = ssn;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

let person = new Person("Gift", 33, "023154485");

// Access the name and age using the class methods

console.log("Name: " + person.getName());
console.log("Age: " + person.getAge());
