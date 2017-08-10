
//Create a class and add a constructor
class animal {
    name: string;
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    animalInfo () {
        return `Animal name is ${this.name} and ${this.age} years of old`;
    }
}

var dog = new animal('Jimmy', 10);
document.write(dog.animalInfo());

//Output:"Animal name is Jimmy and 10 years of age"