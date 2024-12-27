class Dog {
  constructor(readonly name: string) {}
  sayHello(): string {
    return `Dog ${this.name} says woof!`;
  }
}

class Fish {
  constructor(readonly name: string) {}
  dive(deep: number): string {
    return `Fish ${this.name} dives by ${deep} meters in deep!`;
  }
}

// объединение пользовательских типов
type Pet = Dog | Fish;

function talkToPet(pet: Pet): string | null {
  // сужение типа, проверка на пользовательский тип
  if (pet instanceof Dog) {
    return pet.sayHello();
  }

  // сужение типа, проверка на пользовательский тип
  if (pet instanceof Fish) {
    return pet.dive(12);
  }

  return null;
}

console.log(talkToPet(new Dog('Fido')));
console.log(talkToPet(new Fish('Nemo')));
