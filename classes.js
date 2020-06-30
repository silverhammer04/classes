class animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;}
        
    speak() {
        console.log(`${this.name} says "${this.sound}".`);
    }
    sayName() {
        console.log(`${this.name} is an animal.`);
    }

        get repName() {return this.name;}
        
        set pupp(doggo) {this.name = doggo;} 
        

}
class dog extends animal{
    constructor(name, sound) {
        super(name, sound);
    }
}
const cujo = new dog("Cujo", "bark");
    

console.log(cujo)
cujo.speak();
cujo.sayName();
console.log(cujo.repName);
cujo.pupp = 'Doggo';
console.log(cujo.repName);