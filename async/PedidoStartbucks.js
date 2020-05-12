
let pedido1 = {
    nombre: 'Caffe Vanilla',
    tipo: 'bebida caliente',
    tamaño: 'grande',
    cliente: 'Roberto'
}

let pedido2 = {
    nombre: 'Cold Brew',
    tipo: 'bebida fria',
    tamaño: 'grande',
    cliente: 'Pablo'
}

// definicion de callback: es un parámetro (que es una función) que pasa a otra funcion
function pedidoStarbuck(pedido, callbackCliente){
    switch (pedido.nombre) {
        case 'Caffe Vanilla':
            setTimeout(() => {
                callbackCliente(null, pedido);
            }, 4 * 1000);
            break;
        case 'Cold Brew':
            setTimeout(() => {
                callbackCliente(null, pedido);
            }, 2 * 1000);
        default:
            break;
    }
}

pedidoStarbuck(pedido1, function(error, result) {
    if(!error){
        console.log('Pedido 1 finalizado llamar a:', result.cliente);
    }

} 
);
pedidoStarbuck(pedido2, (error, result)=> {
    if(!error) {
        console.log('Pedido 2 finalizado llamar a:', result.cliente);
    }
});




