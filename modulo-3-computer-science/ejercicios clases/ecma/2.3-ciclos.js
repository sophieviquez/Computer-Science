const arr1 = [0, 1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

for (let x of arr1) {
  console.log(x);
}

const precios = [18, 12.99, 28, 98, 27.6];
let total = 0;

for (let precio of precios) {
  console.log(`total: ${total}, precio: ${precio}`);
  total = total + precio;
  total += precio; // esto es lo mismo que el de la linea 16
}

console.log(`El total a pagar es de ${total}`);

let user = {
  id: 1,
  name: "Soph",
  isMillennial: true,
  noPets: 3,
  job: "developer",
  insta: "SophViquez",
};
console.log(user.id);
console.log(user.name);
console.log(user["name"]);

for (let prop in user) {
  console.log(prop);
  console.log(user[prop]);
}

const prop = prompt("Que quieres saber del usuario?");
alert(user[prop] || "intenta de nuevo");
