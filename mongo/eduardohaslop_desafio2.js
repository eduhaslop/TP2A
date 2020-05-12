const mongoclient = require('mongodb').MongoClient;
const chalk = require('chalk');

const uri = "mongodb+srv://admin:betp2@cluster0-zdy6w.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongoclient(uri, {useNewUrlParser:true, useUnifiedTopology:true});
//creo el objeto a insertar
const nuevoInventor = {
    first: "Alan",
    last: "Turing",
    year: 1912
}
let collection;

const promConnect = new Promise((resolve, reject) => { 
    resolve(client.connect());  
    reject('Error en la conexión!');
});

promConnect
.then((result) => {
    console.log(chalk.blue('Cliente conectado'));
    collection = result.db("sample_betp2").collection("inventors");
    let promDatos = new Promise((resolve, reject) => {
        resolve(collection.find().limit(20).toArray());
        reject('Error en la descarga de datos');
    });
    return promDatos;  
})
.then((result) => {
    console.log(result);
    let promInsert = new Promise((resolve, reject) => {
        resolve(collection.insertOne(nuevoInventor));
        reject('Error al insertar datos');
    })
    return promInsert;    
    })
.then((result) => {
    console.log(chalk.yellow("Inventor insertado correctamente"));
    let promUpdate = new Promise((resolve, reject) => {
        resolve(collection.updateOne({last: "Turing"}, {$set: {year: 1910}}));
        reject('Error al actualizar datos');
    })
    return promUpdate;
})
.then((result) => {
    console.log(chalk.yellow("Inventor actualizado correctamente"));
    let promDelete = new Promise((resolve, reject) => {
        resolve(collection.deleteOne({last: "Turing"}));
        reject('Error al eliminar datos');
    })
    return promDelete;
})
.then((result) => {
    console.log(chalk.yellow("Inventor eliminado correctamente"));
})
.catch((reject) => {
    console.log(chalk.red(reject));
});







