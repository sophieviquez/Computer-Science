//1.- Hacer una función que reciba como parámetros una pila, y un número.
// La función debe retornar tantos elementos como diga el número (segundo parámetro).
//Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
//Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’].

function mifuncion(pila, numero) {
  const resultado = [];

  for (let i = 0; i < numero; i++) {
    resultado.push(pila[i]);
  }
  return resultado;
}

const pila = [
  "Manzana",
  "Cebolla",
  "Apio",
  "Naranja",
  "Papaya",
  "Sandía",
  "Melón",
];

const numero = 2;

const elemento = mifuncion(pila, numero);
console.log(elemento);

//2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number,
//y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún
// lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
//Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
//Salida: [3,2,3,4,6,8,1,7]

function reemplazar(pila, nuevo, viejo) {
  // Encontrar el índice de la primera aparición del valor viejo
  const index = pila.indexOf(viejo);

  // Si se encuentra el valor viejo, hacer el reemplazo
  if (index !== -1) {
    pila[index] = nuevo;
    pila.pop(); // Eliminar el último elemento para ajustar la longitud
  }

  return pila;
}

const pila2 = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
const nuevo = 7;
const viejo = 2;

const reemplazarElementos = reemplazar(pila2, nuevo, viejo);
console.log(reemplazarElementos);

//3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos.
// Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre
//el camino recorrido tanto de ida como de vuelta.
//Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
//Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

function mostrarRecorrido(pueblos) {
  // Verificar que el arreglo de pueblos no esté vacío
  if (pueblos.length === 0) {
    return "No hay pueblos en el recorrido.";
  }

  // Obtener el pueblo origen y el destino
  const puebloOrigen = pueblos[0];
  const destino = pueblos[pueblos.length - 1];

  // Crear el recorrido de ida
  const recorridoIda = pueblos.join(" → ");

  // Crear el recorrido de vuelta
  // Primero obtener la parte del regreso (sin el origen)
  const recorridoRegreso = [
    destino,
    ...pueblos.slice(1, -1).reverse(),
    puebloOrigen,
  ].join(" → ");

  // Mostrar los resultados
  console.log("Recorrido de ida:", recorridoIda);
  console.log("Recorrido de regreso:", recorridoRegreso);
}

const pueblos = ["Pueblo Origen", "pueblo 1", "pueblo 2", "destino"];
mostrarRecorrido(pueblos);

//4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación.
// Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él
//y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.

function retirarContenedor(almacen, idContenedor) {
  // Buscar el índice del contenedor específico
  const index = almacen.indexOf(idContenedor);

  if (index === -1) {
    console.log("Contenedor no encontrado.");
    return null;
  }

  // Extraer el contenedor específico y los que están encima de él
  const contenedorRetirado = almacen.splice(index, 1)[0];

  return contenedorRetirado;
}

// Ejemplo de uso
const almacen = [5, 8, 3, 1, 7, 6, 2];
const idContenedor = 1;

const resultado = retirarContenedor(almacen, idContenedor);
console.log("Contenedor retirado:", resultado);
console.log("Pila de almacen después del retiro:", almacen);
