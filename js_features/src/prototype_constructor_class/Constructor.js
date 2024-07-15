export default function CAnimal(name) {
    this.name = name;
}

CAnimal.prototype.speak = function() {console.log(`${this.name} speaks.`);};
