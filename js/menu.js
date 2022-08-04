const btnMenuClick = document.querySelector('.btn-menu_nav');       //boton de menu cuando este en tamaño movil

function AbrirFormulario(){
    const button = this.document.activeElement;

    if(button.classList.contains('register')){
        const window = document.querySelector('.registerForm');

        if(window.classList.contains('active')){
            window.classList.remove('active');
            window.querySelector('form').reset();
        }else{
            window.classList.add('active');
        }
    }else if(button.classList.contains('login')){
        const window = document.querySelector('.loginForm');

        if(window.classList.contains('active')){
            window.classList.remove('active');
            window.querySelector('form').reset();
        }else{
            window.classList.add('active');
        }
    }
};

btnMenuClick.addEventListener('click', ()=>{
    const accionMenu = document.querySelector('.container-items-nav');

    if(btnMenuClick.classList.contains('active')){
        btnMenuClick.classList.remove('active');
        accionMenu.classList.remove('active');

    }else{
        btnMenuClick.classList.add('active');
        accionMenu.classList.add('active');
    }
})



