let data = require('./data');
//console.log(data);

//genero un array de strings tomando cada linea como un string 
let lista = data.split("\n");
//console.log(lista);

//genero un nuevo array, sin los registros Redux Videos;
let listaFiltrada = [];
lista.forEach(element => {
    if(!element.includes("Redux")){
        listaFiltrada.push(element);
    } 
});
//console.log(listaFiltrada);

//funcion para devolver la suma de los segundos de cada registro
function calcularSegundos(datos){
    let minutos = 0;
    let segundos = 0;
    for(i = 0; i < datos.length; i++){
        let datoMin = datos[i].match((/\d\d|\d/)); 
        let datoSeg = datos[i].match(/\d\d"/);
        if(datoMin != undefined){    
            let min = parseInt(datoMin[0]);
            minutos+= min;
        }
        if(datoSeg != undefined){
            let seg = parseInt(datoSeg[0]);
            segundos += seg;
        }
    }
    return segundos + minutos*60;
}

console.log("Total de segundos: " + calcularSegundos(listaFiltrada));

//solo para poder ver los valores parciales
let minutos1 = 0;
let segundos1 = 0;
let arrayMin1 = [];
let arraySeg1 = [];
for(i = 0; i < listaFiltrada.length; i++){
    let datoMin = listaFiltrada[i].match((/\d\d|\d/)); 
    let datoSeg = listaFiltrada[i].match(/\d\d"/);
    if(datoMin != undefined){    
        let min = parseInt(datoMin[0]);
        minutos1 += min;
        arrayMin1.push(min);
    }
    if(datoSeg != undefined){
        let seg = parseInt(datoSeg[0]);
        segundos1 += seg;
        arraySeg1.push(seg);
    }
}
console.log("Array con los minutos: " + arrayMin1);
console.log("Array con los segundos: " + arraySeg1);
console.log("Total de minutos: " + minutos1);
console.log("Total de segundos: " + segundos1);




