

// setTimeout(() => {
//     console.log('Hola despues de 2 segundo');
// }, 2*1000);

// setInterval(() => {
//     console.log('Hola mundo depues de 1 seg');
// }, 1*1000);

// Ejercicio
// Ejecutar un hola mundo después de 3 segundo por 10 veces

let i = 0;
let timerId = setInterval(() => {
    console.log('Hola mundo cada 3 segundos');
    i++;
    if(i==10){
        clearInterval(timerId);
    }
}, 1 * 1000);
