const myName = 'Jose';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(3, 2);

class Person {

  constructor(private age: number, public name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}`
  }
}

const nicolas = new Person(15, "Nicolas")
nicolas.getSummary();
