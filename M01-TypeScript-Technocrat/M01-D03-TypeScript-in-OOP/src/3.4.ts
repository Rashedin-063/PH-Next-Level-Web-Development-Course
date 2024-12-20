{
  //

  // type guard in OOP --> instance of

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log('I am making sound');
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log(`${this.name} is barking`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log(`${this.name} is meawing`);
    }
  }

  // smart way

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  // const getAnimal = (animal: Animal) => {
  //   if (animal instanceof Dog) {
  //     console.log(animal.makeBark());
  //   } else if (animal instanceof Cat) {
  //     console.log(animal.makeMeaw());
  //   } else {
  //     animal.makeSound();
  //   }
  // };
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      console.log(animal.makeBark());
    } else if (isCat(animal)) {
      console.log(animal.makeMeaw());
    } else {
      animal.makeSound();
    }
  };

  const doggy = new Dog('Mr. DOG', 'dog');
  const billi = new Cat('Mr. Bilai', 'cat');

  // console.log(doggy.makeBark())
  // console.log(billi.makeMeaw())

  getAnimal(doggy);
  getAnimal(billi);

  //
}