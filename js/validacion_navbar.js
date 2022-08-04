const inputsRegister = document.querySelectorAll('.form_autent form input');

const expresionesRegulares = {
    solotext : /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    fecha: /([0-9]){0,2}[/]([0-9]){0,2}[/]([0-9]){4}/g,
    correo : /[a-z\d]+[@]+[a-z]+\.[a-z]{2,}/,
    numeros : /[0-9]{10}/,   
    contraseña: /([0-9\d\w\Sa-zA-Z]{4,16})/,
    espacios : /\s/g
}


inputsRegister.forEach(input =>{
    input.addEventListener('keyup', (e) =>{
        let valorCampo = e.target.value;

        switch(e.target.name){
            case 'firstPass':
                input.value = valorCampo.replace(expresionesRegulares.espacios, '');
            break;
            case 'secondPass':
                input.value = valorCampo.replace(expresionesRegulares.espacios, '');
                verificarContraseña(input.parentElement.parentElement);
            break;
        }
    });
    input.addEventListener('blur', (dato)=>{
        let alertaInput = dato.target.nextElementSibling;
        let valueCampo = dato.target.value;
        switch(dato.target.name){
            case 'name':
                if(valueCampo !== ''){
                    if(expresionesRegulares.solotext.test(dato.target.value)){
                        mostrarAlert(true, alertaInput);
                    }else{
                        mostrarAlert(false, alertaInput, 'Este campo no debe contener números ni caracteres especiales');
                    }
                }
            break;
            case 'apellido':
                if(valueCampo !== ''){
                    if(expresionesRegulares.solotext.test(dato.target.value)){
                        mostrarAlert(true, alertaInput);
                    }else{
                        mostrarAlert(false, alertaInput, 'Este campo no debe contener números ni caracteres especiales');
                    }
                }
            break;
            case 'dateNac':
                let fecha = new Date(valueCampo);
                let añoActual = new Date().getFullYear();

                if(valueCampo !== ''){
                    if(isNaN(fecha.getDay()) || isNaN(fecha.getMonth()) || isNaN(fecha.getFullYear()) ){
                        mostrarAlert(false, alertaInput, 'Fecha de Nacimiento es un campo requerido');
                    }else if(fecha.getFullYear() > (añoActual-12)){
                        mostrarAlert(false, alertaInput, 'Tu fecha de Nacimiento nos indica que no eres mayor 12 años, lo sentimos');
                    }else{
                        mostrarAlert(true, alertaInput);
                    }
                }
            break;
            case 'emailUser':
                if(valueCampo !== ''){
                    if(expresionesRegulares.correo.test(valueCampo)){
                        mostrarAlert(true, alertaInput);
                    }else{
                        mostrarAlert(false, alertaInput, 'El correo que ingresaste no es válido');
                    }
                }
            break;
            case 'telef':
                if(valueCampo !== ''){
                    if(expresionesRegulares.numeros.test(valueCampo)){
                        mostrarAlert(true, alertaInput);
                    }else{
                        mostrarAlert(false, alertaInput, 'El nuúmero de telefono no es correcto');
                    }
                }
            break;
            case 'firstPass':
                if(valueCampo !== ''){
                    if(expresionesRegulares.contraseña.test(valueCampo)){
                        mostrarAlert(true, alertaInput);
                    }else{
                        mostrarAlert(false, alertaInput, 'Su contraseña debe tener al menos 4 y máximo 16 caracteres ');
                    }
                    verificarContraseña(input.parentElement.parentElement);
                }
            break;            
        }
    })
})

const mostrarAlert = (respuesta, campo, mensaje)=>{
    const campoInput = campo;

    if(respuesta == false){
        campoInput.classList.add('active');
        campoInput.innerHTML = `<i class="fas fa-exclamation-circle"></i> <span>${mensaje}</span>`;
    }else{
        campoInput.classList.remove('active');
    }
}

function verificarContraseña(contenedor){
    const contraseña1 = contenedor.querySelector('.pass1');
    const contraseña2 = contenedor.querySelector('.pass2');
    
    if(contraseña2.value !== ''){
        if(contraseña1.value === contraseña2.value){
            mostrarAlert(true, contraseña2.nextElementSibling);
        }else{
            mostrarAlert(false, contraseña2.nextElementSibling, 'Las contraseñas no coinciden');
        }
    }
}




function ComprobarDatos(){
    const form = this.document.activeElement.form;
    const inputs = form.querySelectorAll('input');
    let camposllenos = true;
    
    inputs.forEach(input =>{
        if(!input.value){
            camposllenos = false;
        }
    })
    if(!camposllenos)return alert("Existen campos vacios, por favor rellenelos");
}