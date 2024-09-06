function constant(n) {
  console.log(n);
  console.log(n);
}

constant(2); //procesos: 1
constant(5); //procesos: 1
constant(10); //procesos: 1

//Big O notation: O (2) -> tiempo lineal o constante

function logger(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function lineal(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

console.log("================");
lineal(3); //procesos:3
console.log("================");
lineal(5); //procesos:5
console.log("================");
lineal(10); //procesos: 10

//Big O notation: (n) -> tiempo lineal

function logger(n) {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(`i: ${i}, j: ${j}`);
      counter++;
      console.log(`${counter} \n i: ${i}, j: ${j}`);
    }
  }
}

console.log("=====================");
//logger(3) //procesos:9 = 3*3 = 3^2
console.log("=====================");
logger(5); //procesos: 25 = 5*5 = 5^2
console.log("=====================");
logger(10); //procesos:100 = 10^2

//Big 0 notation: o(n^2)

function cubic(n) {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        counter++;
        console.log(`${counter} \n i: ${i}, j: ${j}, k: ${k}`);
      }
    }
  }
}

cubic(5); //procesos: 125 = 5*5*5 = 5^3
//O(n^3)

function lineall(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

lineall(3); //procesos:6
//O(n) + O(n) = O(n+n) = O(2n) ==> Drop constantes --> O(n)
