class Carrito{

    //seleccionar producto
    obtenerProducto(e){
        if(e.target.classList.contains('btn-agregar')){
            const producto = e.target.parentElement.parentElement;
            this.guardarDatosProducto(producto);
        }
    }

    //guardar datos de producto seleccionado
    guardarDatosProducto(producto){
        const datos = {
            id: producto.querySelector('.card input').value,
            descripcion: producto.querySelector('.descrip-product').textContent,
            precio: producto.querySelector('.price-product').textContent,
            imagen: producto.querySelector('.img-product img').src,
            cantidad: 1
        }
        console.log(datos);
        this.insertarProducto(datos);
    }


    insertarProducto(datos){
        const etiqueta = document.createElement('div');
        etiqueta.classList.add('popup');
        etiqueta.innerHTML = `
            <input type="hidden" value="${datos.id}">
            <div class="iz">
                <div class="ret">
                    <a href="#" class="btn_regresar" ><i class="fas fa-chevron-left"></i>Regresar</a>
                </div>
                <div class="photo_comida">
                    <h2 class="titulo">${datos.descripcion}</h2>
                    <img class="food_img" src="${datos.imagen}"/>
                </div>                    
            </div>
            <div class="der">
                <div class="primer">
                    <p class="precio">$<span>${datos.precio}</span></p>
                    <div class="cant">
                        <p>Cantidad: </p>
                        <button class="btn_can" >-</button>
                        <input type="text" class="num_can" value="${datos.cantidad}">
                        <button class="btn_can">+</button>
                    </div>
                </div>
                <div class="des">
                    <h3>Descripcion:</h3>
                    <p>Ninguna descripción</p>
                </div>
                <div class="adicional">
                    <h3>Agrege una información adicional o complementos a su pedido:</h3>
                    <textarea name="complemento" class="input-adicional" rows="1" placeholder="Ejemplo: Talla 38"></textarea>
                </div>
                <button id="btnAddCar" class="btn_añadir"> Añadir a la Bolsa</button>
            </div>
        `;
        ventanaAdd.appendChild(etiqueta);
    }



    // GUARDAR DATOS EN LA LOCAL STORAGE CUANDO ACEPTEMOS GUARDAR AL CARRITO
    obtenerDatosFinales(datosProduct){
        if(datosProduct.target.classList.contains('btn_añadir')){
            const detalleProducto = datosProduct.target.parentElement.parentElement;
            this.guardarDatosLS(detalleProducto);
        }
    }

    obtenerDatosLS(){
        let bolsaLS;

        if(localStorage.getItem('bolsa')===null){
            bolsaLS = [];
        }else{
            bolsaLS=JSON.parse(localStorage.getItem('bolsa'));
        }
        return bolsaLS;
    }

    //guardar datos del producto a la Base de datos del usuario
    guardarDatosLS(detalle){
        let producto;

        const datos = {
            id: detalle.querySelector('.popup input').value,
            imagen: detalle.querySelector('.photo_comida .food_img').src,
            nombre: detalle.querySelector('.photo_comida .titulo').textContent,
            inf_adicional: detalle.querySelector('.adicional .input-adicional').value,
            precio: detalle.querySelector('.precio span').textContent,
            cantidad: detalle.querySelector('.num_can').value
        }

        producto=this.obtenerDatosLS();
        producto.push(datos);
        localStorage.setItem('bolsa', JSON.stringify(producto));
    }

    eliminarProduct(e){
        e.preventDefault();
        let producto, productoID;

        if(e.target.classList.contains('button-delete')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('.inputid').value;
        }
      //  this.eliminarProductLS(productoID);
        this.calcularTotales();
    }




    leerDatosLS(){
        let productosLS, subtotal=0;
        productosLS = this.obtenerDatosLS();

        productosLS.forEach(e => {
            subtotal = parseFloat(e.precio * e.cantidad);
            const etiqueta = document.createElement('tr');
            etiqueta.innerHTML = `
                <input class="inputid" type="hidden" value="${e.id}">
                <td class="dt descrip-dttlle producto-table" data-label="prod">
                    <div class="image">
                        <img src="${e.imagen}" alt="text" class="img1">
                    </div>
                    <div>
                        <h2 class="tittle-pd">${e.nombre}</h2>
                        <p class="infor-adicion">${e.inf_adicional}</p>
                    </div>
                </td>

                <td class="dt precio-tabla precio-table price_unit" data-label="precio">$<span>${e.precio}</span></td>
                <td class="dtcantidad cantidad-table" data-label="cantidad">
                    <div class="container-cantidad">
                        <button class="btn_cantdd">-</button>
                        <input type="text" class="can_num" value="${e.cantidad}">
                        <button class="btn_cantdd">+</button>
                    </div>
                </td>

                <td class="dt precio-tabla precio-table" id="subtotales">$<span>${parseFloat(subtotal).toFixed(2)}</span></td>
                <td class="dt acciones-table" data-label="action" class="acti">
                    <a href="#" class="button-delete fas fa-trash-alt"></a>
                </td>
            `;
            tablaProductos.appendChild(etiqueta);
        });
    }
   

    calcularTotales(){
        let productLS;
        let totalProduct = 0, delivery=3.00;

        productLS = this.obtenerDatosLS();
        for(let i=0; i<productLS.length; i++){
            let element = Number(productLS[i].precio * productLS[i].cantidad);
            totalProduct += element;
        }
        document.getElementById('price_total_pago').innerHTML = `$${parseFloat(totalProduct + delivery).toFixed(2)}`;
    }
}