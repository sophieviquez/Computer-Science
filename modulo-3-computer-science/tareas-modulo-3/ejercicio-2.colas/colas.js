//1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
//Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
//Cola 1: [ amarillo, rojo, azul, morado]
//Cola 2: [rosa, verde, negro, blanco]

function dividirColas(colaOriginal) {
  let cola1 = [];
  let cola2 = [];

  for (let i = 0; i < colaOriginal.length; i++) {
    if (i % 2 === 0) {
      cola1.push(colaOriginal[i]);
    } else {
      cola2.push(colaOriginal[i]);
    }
  }
  return { cola1, cola2 };
}

const colaOriginal = [
  "amarillo",
  "rosa",
  "rojo",
  "verde",
  "azul",
  "negro",
  "morado",
  "blanco",
];
const colasDivididas = dividirColas(colaOriginal);
console.log(colasDivididas);

//2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo,
// llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a
//todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y
//la cola final.
//Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.

function filtrarCola(cola) {
  const colaReal = []; // guarda los usuarios con ticket (true)
  const colaColados = []; //guarda los usuarios que no tienen ticket (false)

  for (let i = 0; i < cola.length; i++) {
    const user = cola[i];

    if (user.ticket === true) {
      // si el ticket es true lo guarda en el arreglo de colaReal
      colaReal.push(user);
    } else {
      // si el ticket es false lo guarda en el arreglo de colaColados
      colaColados.push(user);
    }
  }
  return { colaReal, colaColados };
}

const cola = [
  { user: "User1", ticket: true },
  { user: "User2", ticket: true },
  { user: "User3", ticket: false },
  { user: "User4", ticket: true },
  { user: "User5", ticket: false },
  { user: "User6", ticket: false },
  { user: "User7", ticket: true },
  { user: "User8", ticket: true },
  { user: "User9", ticket: true },
  { user: "User10", ticket: false },
  { user: "User11", ticket: true },
];

const colaFiltrada = filtrarCola(cola);
console.log(colaFiltrada);
