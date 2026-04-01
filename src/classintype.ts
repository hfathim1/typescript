class Person {
  name: string;
  age1: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age1 = age;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const p1 = new Person("Fathima", 25);
p1.greet();