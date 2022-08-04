const bolsa = new Carrito();
const productos = document.getElementById('grid-product');
const ventanaAdd = document.getElementById('ventanaDetalle');

cargarEventos();
function cargarEventos(){
    productos.addEventListener('click', (e)=>{bolsa.obtenerProducto(e)});

    ventanaAdd.addEventListener('click', (e) => {bolsa.obtenerDatosFinales(e)});

    document.addEventListener('DOMContentLoaded', bolsa.leerDatosLS());
}