class Dog {
  constructor(public name: string) {}
  sayHello(): string {
    return `Dog ${this.name} says woof!`;
  }
}

class Fish {
  constructor(public name: string) {}
  dive(deep: number): string {
    return `Fish ${this.name} dives ${deep} meters!`;
  }
}
