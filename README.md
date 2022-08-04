## Clases para estilos en Administración


### Colocar contenido al main
- Para comenzar a colocar contenido al main, deberas agregar despues de la etiqueta ***aside*** el siguiente codigo:
    
    ``` 
        <main class="contenido-admin">
            <div class="theme-apart">
                <h2>Bienvenido, <span class="name-user">Nombre de usuario</span></h2>
            </div>
            <section class="container-main">

            </section>
        </main>
    ```

### Borde en un *Div*
- Agrega una clase adicional en tu **div** -> "bd__sect", ejemplo:
    ```<div class="mi-clase bd__sect">   </div>```
    - De esta manera se agregara el borde automaticamente
    - Ademas agregara el color de fondo automatico y una sombra al div
    
### Agregar un subtitulo en el div ya bordeado
- Para poner el subtitulo ya estilizado deberas:
    - Agregar una etiqueta **h2** y colocar una clase adicional llamada "title_card_cl"
    - Ejemplo: ```<h2 class="mi_clase title_card_cl">Soy un Subtitulo</h2>```
