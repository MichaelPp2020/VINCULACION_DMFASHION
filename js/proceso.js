const formulario =document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const container =document.getElementById('container');

nombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    //Eliminamos los numeros
	nombre.value = valorInput.replace(/[0-9]/g, '');
	nombre.textContent = valorInput;
});
apellidos.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    //Eliminamos los numeros
	apellidos.value = valorInput.replace(/[0-9]/g, '');
	apellidos.textContent = valorInput;
});
telefono.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    telefono.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');
} );
direccion.addEventListener('keyup', (e) =>{
    let valorInput=e.target.value;
    //Eliminamos los numeros
    direccion.value = valorInput.replace(/[0-9]/g, '');
    direccion.textContent = valorInput;
});
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(nombre.value && apellidos.value && telefono.value && direccion.value && correo.value && ref_dire.value !==''){
        formulario.reset();
        document.getElementById('form_enviado').classList.add('form_enviado-activo');
        setTimeout(() => {
			document.getElementById('form_enviado').classList.remove('form_enviado-activo');
    }, 5000);}
    else{document.getElementById('form_error').classList.add('form_error-activo');
    setTimeout(() => {
        document.getElementById('form_error').classList.remove('form_error-activo');
}, 500);}

});