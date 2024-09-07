/* 
1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. 
    Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la   
    lista no cambia.
2.- Escribir un programa para formar una lista que realice las siguientes tareas:
Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
Mostrar todos los Nodos que superen un valor determinado. 
*/

class Node {
  constructor(data) {
    this.data = data; //Datos del nodo
    this.next = null; //Referencia al siguiente nodo
  }
}

class LinkedList {
  constructor() {
    this.head = null; //Cabeza de la lista, inicialmente vacia
  }

  //Inserta un nuevo dato al final de la lista

  insertLast(data) {
    const newNode = new Node(data);

    //si la lista esta vacia, el nuevo nodo se conviernte en la cabeza
    if (this.head === null) {
      this.head = newNode;
    } else {
      // De lo contrario recorre la lista hasta el final y añade el nuevo nodo
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  //Muestra todos los nodos cuyo valor es mayor que un valor dado
  displayGreaterThan(value) {
    let current = this.head;
    const elements = [];
    while (current !== null) {
      if (current.data > value) {
        elements.push(current.data);
      }
      current = current.next;
    }
    console.log(elements.join("->")); // imprime los datos que son mayores que el valor dado
  }
}

const ll = new LinkedList();
ll.insertUnique(10); // Inserta 10
ll.insertUnique(20); // Inserta 20
ll.insertUnique(10); // No inserta 10 porque ya está en la lista
ll.display(); // Muestra la lista: 10 -> 20

//Funcion para crear una lista enlazada con numeros aleatorios
function createRandomList(size, maxValue) {
  const ll = new LinkedList();
  for (let i = 0; i < size; i++) {
    ll.insertLast(Math.floor(Math.random() * maxValue) + 1);
  }
  return ll;
}

// Crear dos listas enlazadas con números aleatorios
const list1 = createRandomList(10, 100);
const list2 = createRandomList(10, 100);

// Mostrar nodos que son mayores que 50 en la primera lista
console.log("Lista 1:");
list1.displayGreaterThan(50);

// Mostrar nodos que son mayores que 30 en la segunda lista
console.log("Lista 2:");
list2.displayGreaterThan(30);
