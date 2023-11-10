var valorCarrito = [];
var total = 0;
var valorProducto = document.getElementById("precioProducto");
var carrito = document.getElementById("valorTotal");
function agregarProducto(nombreProducto,precio,inputId){
    const cantidad = parseInt(document.getElementById(inputId).value);
    if(cantidad > 0){
        const subTotal = precio * cantidad;
        valorCarrito.push({nombreProducto,precio,cantidad});
        total += subTotal;


        const carritoLista = document.getElementById("carritoLista");
        const carritoTotal = document.getElementById("carritoTotal");

        const listItem = document.createElement("li");
        listItem.textContent = `${nombreProducto} - $${precio} - Cantidad = ${cantidad} - Subtotal= $${subTotal}`;
        const botonEliminarProducto = document.createElement('button')
        botonEliminarProducto.textContent = "Eliminar"
        botonEliminarProducto.onclick = ()=> {
            const indice = valorCarrito.findIndex(item => item.nombreProducto === nombreProducto);
            if( indice ==! -1){
                const productoEliminado = valorCarrito.splice(indice,1)[0];
                total -= productoEliminado.precio * productoEliminado.cantidad;
                listItem.remove();
                carritoTotal.textContent = total;
            }
        };
        listItem.appendChild(botonEliminarProducto);
        carritoLista.appendChild(listItem);
        carritoTotal.textContent = total;
    }
}
