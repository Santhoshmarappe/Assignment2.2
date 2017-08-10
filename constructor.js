//Create a class and add a constructor
var animal = (function () {
    function animal(name, age) {
        this.name = name;
        this.age = age;
    }
    animal.prototype.animalInfo = function () {
        return "Animal name is " + this.name + " and " + this.age + " years of old";
    };
    return animal;
}());
var dog = new animal('Jimmy', 10);
document.write(dog.animalInfo());
//Output:"Animal name is Jimmy and 10 years of age" 
