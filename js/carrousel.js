const btnMenu = document.getElementById('boxMenu-Select');
const mostrarCategorias = document.querySelector('.menu-container');
let estadoFuera = false;
const menuDesplegable = document.querySelector('.menu-container');


btnMenu.addEventListener('click', (boton)=>{
    boton.preventDefault();
    if(!btnMenu.classList.contains('down')){
        btnMenu.classList.add('down', 'active');
        mostrarCategorias.classList.add('active');  
    }else{
        btnMenu.classList.remove('down', 'active');
        mostrarCategorias.classList.remove('active');  
    }
})












const carrousel = document.getElementById('catMenuDesp');
const categoriaSize = document.querySelector('#catMenuDesp .item-categoria');
const botonAntes = document.getElementById('btnPrevious');
const botonSiguiente = document.getElementById('btnNext');

const car = document.getElementById('catMenuDes');
const catSize = document.querySelector('#catMenuDes .item-cat_menu');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-rigth');


botonSiguiente.addEventListener('click', ()=>{
    carrousel.scrollLeft += categoriaSize.offsetWidth; 
});
botonAntes.addEventListener('click', ()=>{
    carrousel.scrollLeft -= categoriaSize.offsetWidth; 
});

btnRight.addEventListener('click', ()=>{
    car.scrollLeft += catSize.offsetWidth; 
});
btnLeft.addEventListener('click', ()=>{
    car.scrollLeft -= catSize.offsetWidth; 
});


carrouselAutomat();
function carrouselAutomat(){
    const elements = document.querySelectorAll('#catMenuDes .item-cat_menu').length;
    let event=0;   
    
    setInterval(() => {
        if(event == elements-3 || event > elements-3){
            setTimeout(() => {
                car.scrollLeft=0; 
                event=0;
            }, 1000);
        }else{
            car.scrollLeft += catSize.offsetWidth; 
            event+=1;
        }
    }, 3000);
}