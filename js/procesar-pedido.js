const formulario =document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

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

direccion.addEventListener('keyup', (e) =>{
    let valorInput=e.target.value;
    //Eliminamos los numeros
    direccion.value = valorInput.replace(/[0-9]/g, '');
    direccion.textContent = valorInput;
});