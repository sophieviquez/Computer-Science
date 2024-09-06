let username = "Sophia";

function sayHi(user = "usuario generico") {
  console.log(`Hi, ${user}`);
}

sayHi();
sayHi("Fulano");
sayHi(username);

//Destructuring de objetos  ext(better commets)

let user = {
  fullName: "Sophia Acosta",
  email: "sophieviquez@gmail,com",
  googleAccount: "2135FS-6325FDAS-HSGD7",
};

console.log(`Hola ${user.fullName}`);

//Hola Sophia Acosta

const { fullName: userName, email, googleAccount } = user;

/* console.log(fullName);*/
console.log(email);
console.log(googleAccount);

//Desctructuring de Arreglos

let users = [
  {
    fullName: "Sophia Acosta",
    email: "sophieviquez@gmail.com",
    googleAccount: "2135FS-6325FDAS-HSGD7",
  },
  {
    fullName: "Helena Acosta",
    email: "helenaviquez@gmail.com",
    googleAccount: "2135FS-6325FSSD-FGHD7",
  },
];

console.log(users);

let [user1, user2] = users;

//console.log(user1)
user1.isPremium = true;
console.log(user1);

//Funciones como declaracion
function myfunction() {
  //body de la funcion
}

myfunction();

//funciones como expresiones
const myFunction = function () {
  //body de la funcion
};

myFunction();

//funciones flecha
const arrowFunction = () => {
  //body de la funcion
};

const sayHi = function (user) {
  console.log(`Hi, ${user}`);
};

// Diferencia: This
const sayHi2 = (user) => {
  console.log(`Hi, ${user}`);
};

const sayHi3 = (user) => console.log(`hi ${user}`);

// Funcion en forma de declaracion
function calcAge() {
  console.log(`Tienes ${2024 - birthYear}`);
}

calcAge(1993);

//Funcion como expresion
const calcAge2 = function (birthYear) {
  console.log(`Tienes ${2024 - birthYear} años`);
};

//Funcion flecha
const calcAge3 = (birthYear) => {
  console.log(`Tienes ${2024 - birthYear}`);
};

calcAge3();

// Parentesis: Expresiones vs declaraciones
// Statements vs expressions

/* 8
7*5

let number = 10;
6>2

if(6 > 2) {
  console.log('shbd')
}

console.log(8*6)
console.log('hola')
console.log(users)

`${8*6} mi nombre es ${nombre}` */
