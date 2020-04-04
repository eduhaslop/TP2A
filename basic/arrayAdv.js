const inventors = require('./data');

function printInventors(inventors){
    console.log("Nombre       Apellido    Año");
    console.log("-----------------------------");
    for (const inventor of inventors) {
        console.log(`${inventor.first.padEnd(12, ' ')}${inventor.last.padEnd(12, ' ')}${inventor.year}`);
    }
}

printInventors(inventors);


// // Ejercicio: 
// // 1.- filtrar los inventores nacidos antes del 1800
// console.log();
// console.log("Ejercicio 1.-");
// // printInventors(inventors.filter(
// //     function (inventor, index, inventors){
// //         return inventor.year > 1800;
// //     }
// // ));


// printInventors(inventors.filter(inventor => inventor.year > 1800));

// // Ejercio:
// // 2.- Convertir el apellido en mayusculas
// console.log();
// console.log("Ejercicio 2.-");

// printInventors(inventors.map(inventor => 
//   ({first: inventor.first, last: inventor.last.toLocaleUpperCase(), year: inventor.year})  
// ));


// // Ejercicio
// // 3.- aplicar ambas cosas
// console.log();
// console.log("Ejercicio 3.-");

// printInventors(
//     inventors
//     .filter(inventor => inventor.year > 1800)
//     .map(inventor => ({first: inventor.first, last: inventor.last.toLocaleUpperCase(), year: inventor.year}))
// );

//Ejercicio 
// 4.- buscar inventor Kepler y retornar el objeto
console.log();
console.log("Ejercicio 4.-");

// printInventors(
//     inventors.find(inventor => inventor.last == "Kepler")
// );
//let array = [];
//printInventors(array.push(inventors.find(inventor => inventor.last == "Kepler")));

//Ejercicio
// 5.- Alguno de los inventores nacio en 1858?
// console.log();
// console.log("Ejercicio 5.-");

//Ejercicio
// 6.- Todos los inventores nacieron despues de 1500?
// console.log();
// console.log("Ejercicio 6.-");

//Ejercicio
// 7.- Ordenar los inventores por fecha de nacimiento
console.log();
console.log("Ejercicio 7.-");

//Ejercicio
// 8.- Ordenar los inventores por apellido
// console.log();
// console.log("Ejercicio 8.-");
//console.log(inventors.sort((a,b) => (a.last > b.last)? 1 : -1));

//Ejercicio
// 9.- Convertir el array a un formato:
//[{name: {first: 'first name',}}]
/**
 * [{name: 
 *      {
 *          first: 'first name',
 *          last: 'last name'
 *      }
 * }, 
 * year: year
 * ]
 * 
 */
// console.log();
// console.log("Ejercicio 9.-");