const overlay = document.getElementById('overlay-add-producto');
const formulario = document.getElementById('form-add-prod');

const expRegular = {
    espacios: /\s/g,
    numeros: /([^0-9])/g,
    texto: /([a-zA-Z])/,
    price: /[^.,\d\s]/
}
validarCampos();
ventanaAdd();
function ventanaAdd(){
    document.getElementById('add-product-new').addEventListener('click', (e)=>{
        overlay.classList.add('active');
    });
    document.getElementById('btn-close-x').addEventListener('click', e =>{
        overlay.classList.remove('active');
        formulario.reset();
    });
    document.getElementById('btn-cancel-add').addEventListener('click', e =>{
        overlay.classList.remove('active');
        formulario.reset();
    });
    
}


function validarCampos(){
    const inputs = document.querySelectorAll('#form-add-prod input');

    inputs.forEach(input =>{
        input.addEventListener('keyup', e=>{
            switch(e.target.name){
                case 'price':
                    input.value = e.target.value.replace(expRegular.price, '');
                break;
                case 'quantify':
                    input.value = e.target.value.replace(expRegular.numeros, '');
                break;
            }
        })
    })
}
