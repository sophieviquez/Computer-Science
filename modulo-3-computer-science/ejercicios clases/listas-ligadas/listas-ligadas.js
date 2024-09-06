class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

const nodo1 = new Node(5);
const nodo2 = new Node(8);

/* 
nodo2 -> {} -> this
nodo2.value = 5
nodo2.next = null
 */

//console.log(nodo1);

class LinkedList {
  constructor(value) {
    //head, tail

    const nodo = new Node(value);
    this.head = nodo;
    this.tail = nodo;
    this.length = 1;
  }

  printList() {
    let temporal = this.head;
    while (temporal !== null) {
      console.log(temporal.value);
      temporal = temporal.next;
    }
  }

  getHead() {
    console.log("La cabeza de esta LL es: ", this.head);
  }

  getTail() {
    console.log("La cola de esta LL es: ", this.tail);
  }
  getLength() {
    console.log("La longitud de esta LL es de: ", this.length);
  }

  push(value) {
    //se esta  agregando un nuevo nodo
    const nodo = new Node(value);
    this.tail.next = nodo;
    this.tail = nodo;
    //console.log(this.tail);
    this.length += 1;

    return this.length;
  }
  pop() {
    if (this.length === 0) return "eh we ya no hay que quitar";

    let temp = this.head;
    let pre = this.head;
    while (temp.next !== null) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;

    this.length--; //esto es lo mismo que this.length = this.length -1 || this.legth =- 1
    if (this.legth === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    //1. creamos e nuevo nodo que vamos a insertar
    const nodo = new Node(value);
    //conectamos el nodo creado con  la lista que ya tenemos
    nodo.next = this.head;
    //Actualizamos que nodo es la cabeza
    this.head = nodo;
    this.length++;

    //Falta una validacion donde la lista este vacia
    if (this.head === null) {
      //this.length === 0
      thid.head = nodothis.tail = nodo;
    } else {
      nodo.next = this.head;
      this.head = nodo;
    }
    this.length++;

    return this.length;
  }

  shift() {
    if (this.length === 0) return undefined;

    let temp = this.head;
    this.head == this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    temp.next = null;

    return temp;
  }
  get(index) {
    if (typeof index !== "number") return undefined;
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}

const listaLigada = new LinkedList(11);

//TAREA
/* Implementar los siguientes métodos para una lista ligada:

- `unshift(value)`: Agrega un nuevo nodo con el valor `value` al inicio de la lista.
- `shift()`: Elimina y devuelve el primer nodo de la lista.
- `get(index)`: Devuelve el nodo en la posición `index` de la lista.
- `set(index, value)`: Cambia el valor del nodo en la posición `index` al valor `value`.
- `insert(index, value)`: Inserta un nuevo nodo con el valor `value` en la posición `index` de la lista. */

console.log(listaLigada);
listaLigada.push(3);
listaLigada.push(23);
listaLigada.push(7);
listaLigada.push(4);
listaLigada.printList();
console.log(listaLigada.length);

listaLigada.getHead();
listaLigada.getTail();
listaLigada.getLength();

listaLigada.pop();
listaLigada.printList();

listaLigada.pop(); //3
listaLigada.pop(); //23
listaLigada.pop(); //7
console.log("Metodo unshift -------");
listaLigada.unshift(0);

const lista = {
  head: "cabeza",
  tail: "cola",
  length: 5,
};

console.log(lista.head); //cabeza
