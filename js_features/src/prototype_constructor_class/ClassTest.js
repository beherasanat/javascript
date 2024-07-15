export class ClassAnimal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} spoke`);
    }
}

export class Dog extends ClassAnimal {
    bark() {
        console.log("Dog barks.");
    }
}