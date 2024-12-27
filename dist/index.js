"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `Dog ${this.name} says woof!`;
    }
}
class Fish {
    constructor(name) {
        this.name = name;
    }
    dive(deep) {
        return `Fish ${this.name} dives ${deep} meters!`;
    }
}
