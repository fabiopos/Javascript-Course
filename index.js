import "./aboutme.js";
console.log("Ej 1");

// Ejercicio 3

// for (let index = 1; index <= 100; index++) {
//   console.log(index);
// }


// Ejercicio 4
// for(var i = 0; i < 101; i++) {
//     // Solución
// }
// console.log(i); // 101


// for(let i = 0; i < 101; i++) {
//     // Solución
// }
// console.log(i); // undefined


// Ejercicio 6

/*
Crea un objeto llamado formatter con un atributo, que llamaremos “prefix”, que tendrá de valor “Hello “, 
y un método que llamaremos “append”, que imprimirá la concatenación entre el atributo “prefix” y la cadena que pasemos como argumento en el método.

formatter.append(“World”) // Result: Hello World

*/

const formatter = {
    prefix: "Hello",
    append: (value) => `${formatter.prefix} ${value}`
}
formatter.toLowerString = (value)=> {  return value.toLowerCase()}

const result = formatter.append("Lucas!")
console.log(result) // Hello Lucas!
console.log(formatter.toLowerString(result)) // hello lucas!