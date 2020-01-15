//Funcion normal
// function sumar(a, b) {
//     return a + b;
// }

//Funcion de flecha
let sumar = (a, b) => a + b;
console.log(sumar(10, 20));

//Funcion de flecha
let saludar = () => "Hola mundo";

console.log(saludar());

/*La funcion del siguiente ejemplo no podria pasarse a flecha, porque el 'this'
hace referencia a variables fuera del objeto, lo cual daria: undefined*/
// let deadpool = {
//     nombre: 'Wade',
//     apellido: 'Winston',
//     poder: 'Regeneración',
//     getNombre: () =>{ `${this.nombre} ${this.apellido} - poder: ${this.poder}`
//     }
// };