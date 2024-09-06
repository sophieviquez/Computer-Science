//1.- Crea una función que ordene de forma descendente un arreglo de números.
//Entrada -> [9,3,1,6,5,88,-1,2,7]
//Salida -> [88,9,7,6,5,3,1,-1]

function ordenamiento(numbers) {
  return numbers.sort((a, b) => b - a);
}

const number = [9, 3, 1, 6, 5, 88, -1, 2, 7];
const orden = ordenamiento(number);
console.log(orden);

//2.- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
//Entrada -> [‘b’,‘h’,‘w’,‘e’,‘a’]
//Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’]

function ordenLista(letra) {
  return letra.sort((a, b) => a.localeCompare(b));
}

const letras = ["b", "h", "w", "e", "a"];
const ordenLetras = ordenLista(letras);
console.log(ordenLetras);

//3.- Crear una clase Alumno con los siguientes datos:
//Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
//Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio.

//clase alumno

// Clase Alumno
class Alumno {
  constructor(nombre, calificaciones) {
    this.nombre = nombre;
    this.calificaciones = calificaciones;
  }

  // Método para obtener el promedio de calificaciones
  obtenerPromedio() {
    const suma = this.calificaciones.reduce((a, b) => a + b, 0);
    return suma / this.calificaciones.length;
  }
}

// Clase Salon
class Salon {
  constructor() {
    this.alumnos = [];
  }

  // Método para agregar un alumno al salón
  agregarAlumno(alumno) {
    this.alumnos.push(alumno);
  }

  // Método para ordenar alumnos de mayor a menor promedio
  ordenarPorPromedio() {
    return this.alumnos.sort(
      (a, b) => b.obtenerPromedio() - a.obtenerPromedio()
    );
  }
}

// Ejemplo de uso
const alumno1 = new Alumno("Ana", [90, 85, 88, 92, 87]);
const alumno2 = new Alumno("Luis", [70, 75, 78, 72, 74]);
const alumno3 = new Alumno("Carlos", [80, 85, 88, 82, 86]);

const salon = new Salon();
salon.agregarAlumno(alumno1);
salon.agregarAlumno(alumno2);
salon.agregarAlumno(alumno3);

// Ordenar alumnos por promedio
const alumnosOrdenados = salon.ordenarPorPromedio();
alumnosOrdenados.forEach((alumno) => {
  console.log(`${alumno.nombre}: ${alumno.obtenerPromedio()}`);
});

//4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.
//Entrada -> [“adios”,“hola”,“maximo”,“uno”,“despedida”]
//Salida -> [“uno”,“hola”,“adios”,“maximo”,“despedida”]

function ordenPalabras(palabras) {
  return palabras.sort((a, b) => a.length - b.length);
}

const palabras = ["adios", "hola", "maximo", "uno", "despedida"];
const palabrasOrdenadas = ordenPalabras(palabras);
console.log(palabrasOrdenadas);

//5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
//Entrada -> [[7,3],[2,2],[1,0],[4,3]]
//Salida -> [[1,0],[2,2],[4,3],[7,3]]

function ordenCoordenadas(coordenadas) {
  return coordenadas.sort(
    (a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2)
  );
}

const coordenadas = [
  [7, 3],
  [2, 2],
  [1, 0],
  [4, 3],
];
const coordenadasOrdenadas = ordenCoordenadas(coordenadas);
console.log(coordenadasOrdenadas);
