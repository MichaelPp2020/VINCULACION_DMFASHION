const bolsa = new Carrito();
const tablaProductos = document.getElementById('lista-product');
const listaProductos = document.getElementById('tabla-list');

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', bolsa.leerDatosLS());

    bolsa.calcularTotales();

    listaProductos.addEventListener('click', (e)=>{bolsa.eliminarProduct(e)});
}