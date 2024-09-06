class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(`La edad de ${this.firstName} es ${2024 - this.birthYear}`);
  }
  introduce() {
    console.log(`Hola mi nombre es ${this.firstName}`);
  }
}

const yaxche = new Person("Yaxche", 1993);
console.log(yaxche);
yaxche.calcAge();
yaxche.introduce();

const mariano = new Person("Mariano", 2005);
console.log(mariano.firstName);
mariano.introduce();
