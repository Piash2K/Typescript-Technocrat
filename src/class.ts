// oop - class- object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} is making sound ${this.sound}`);
//   }
// }

//parameter properties
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`${this.name} is making sound ${this.sound}`);
  }
}

const dog = new Animal("Ddogesh vai", "dog", "ghew ghew");
const cat = new Animal("Cat vai", "cat", "Mew Mew");
// console.log(dog.sound)
// cat.makeSound();
dog.makeSound();

// function add(num1: number, num2: number) {
//   return num1 * num2;
// }
// add(2, 3);
