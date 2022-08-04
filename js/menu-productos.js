const gridProductos = document.getElementById('grid-product');              //contiene cada card de producto
const ventanaCarrito = document.getElementById('ventanaDetalle');           //ventana detalle de productos


gridProductos.addEventListener('click', (e)=>{e.preventDefault(); ventanaAddCar(e)});
ventanaCarrito.addEventListener('click', (e)=>{e.preventDefault(); ventanaAddCar(e), AddCarrito(e)});



//funcion para abrir y cerrar ventana de detalle de productos, cada vez que se haga clic en los botones indicados
function ventanaAddCar(contenedor){
    const ventana = document.getElementById('ventanaDetalle');

    const validar = ()=>{           //valida si contiene la clase, sino la tiene cierra la ventana
        if(ventana.classList.contains('active')){            
            ventana.classList.remove('active');
        }else{
            ventana.classList.add('active');
        }
    }

    if(contenedor.target.classList.contains('btn-agregar')){
        validar();
    }else if(contenedor.target.classList.contains('btn_regresar')){
        const contenido = contenedor.target.parentElement.parentElement.parentElement;
        ventana.removeChild(contenido);
        validar();
    }
}

//funcion para cerrar ventana detalle y mostrar mensaje al usuario
function AddCarrito(e){
    if(e.target.classList.contains('btn_añadir')){
        const ventana = document.getElementById('ventanaDetalle');
        const alerta = document.getElementById('alertCar');

        ventana.classList.remove('active');
        const mensaje = document.createElement('div');
        mensaje.innerHTML = `
            <div class="txt-sms aprobado">Agregado <i class="fas fa-check-circle"></i></div>
            <div class="lay"></div>
        `;
        alerta.classList.add('active');
        setTimeout(function(){
            alerta.classList.remove('active');
        }, 3000);
    }
}