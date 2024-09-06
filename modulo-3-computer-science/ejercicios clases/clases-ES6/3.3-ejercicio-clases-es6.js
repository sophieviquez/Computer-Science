//EJERCICIO

class Car {
  constructor(velocidad, marca, modelo) {
    this.velocidad = velocidad;
    this.marca = marca;
    this.modelo = modelo;
  }
  frenar() {
    this.velocidad += 10;
    console.log(
      `ACELERAR \n La velocidad de este auto es de ${this.velocidad}km/h`
    );
  }

  acelerar() {
    this.velocidad -= 5;
    console.log(
      `FRENAR \n La velocidad de este auto es de ${this.velocidad}km/h`
    );
  }
}

//OPCION CON CONDICIONAL

/* class Car {
  constructor(velocidad, marca, modelo) {
    this.velocidad = velocidad;
    this.marca = marca;
    this.modelo = modelo;
  }

  acelerar() {
    this.velocidad -= 10;
    console.log(
      `Acelera \n La velocidad de este auto es de ${this.velocidad}km/h`
    );
  }

  frenar() {
    if (this.velocidad - 10 <= 0) {
      console.log(`Frena \n La velocidqad del ${this.marca} es de 0kms/h`);
      this.velocidad = 0;
    } else {
      this.velocidad -= 5;
      console.log(
        `Frena \n La velocidad del ${this.marca} es de ${this.velocidad} km/h`
      );
    }
  }
} */

const bmw = new Car(120, "BMW", 2005);
console.log(bmw);
bmw.frenar();
bmw.acelerar();
bmw.frenar();
bmw.frenar();
bmw.frenar();
