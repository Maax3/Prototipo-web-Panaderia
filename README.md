# Presentación y descripción del proyecto

🔺[SITIO WEB](https://panaderia-amigas.000webhostapp.com/)🔻

El proyecto se ha realizado a partir de un prototipado en [FIGMA](https://www.figma.com/file/o76Z0dYVVTW6988sPYC4WL/Proyecto-interfaces-web?type=design&mode=design&t=4nzdjNg4mq1BoKJo-1). Se ha utilizado ``Sass`` como tecnología principal y como temática una panadería.

Como esqueleto se ha escogido el display ``GRID`` y cada parte se ha intentado hacer lo más modular posible mediante el uso de __mixins__ y __el paso por parámetros__. Además, las partes internas de la web como el ``header``,``main`` o ``footer`` se han maquetado con ``FLEX`` para controlar más fácil la disposición interna de los diferentes elementos.

``NOTA``: Recomiendo usar __las flechas del teclado__ 🡹🡻 para desplazarnos por las páginas de panadería y bollería.

# Estructura del Sass

| Archivos | Descripcion |
| ---------| ------------|
| Main.scss | Contiene la referencia a todas las páginas (index,panes,bollos) + las etiquetas globales |
| Grid.scss| Contiene los diferentes @mixin de grid. Se encargan de ajustar el esqueleto de la web, es decir, a los contenedores flex. |
| Header.scss | La cabecera que se utiliza para las 3 páginas. Se personaliza mediante parámetros. |
| Footer.scss | El pie que se utiliza para las 3 páginas. Se personaliza mediante parámetros. |
| Mixinns.scss | @mixins genéricos que se utilizan en las 3 páginas para botones, sombras etc... |
| Variables.scss | Archivo de variables genéricas |
| Content_panes.scss | Archivo que representa los estilos del contenido o main de la página panes.html |
| Content_bollos.scss | Archivo que representa los estilos del main de la página bollos.html |
| @Media_queries | Las queries vienen incluídas en el archivo main. |

Dentro del archivo __main__, cada página tiene ``@includes`` de diferentes "módulos". He intentado hacer esos ``@mixins`` lo más genéricos posible para poder reutilizarlos en las diferentes páginas pasándole diferentes variables por parámetro.



# JavaScript

Se ha usado un pequeño __script__ para poder ``abrir`` y ``cerrar`` la ventana modal (mapa del botón encuéntranos) que se ha hecho mediante la etiqueta HTML ``<Dialog>``. 

La etiqueta __Dialog__ es una etiqueta de HTML 5.1 que te abre una ventana predefinida y tiene pleno soporte desde el año 2022. [Mas info aqui](https://dev.to/adrianbenavente/la-espera-termino-el-elemento-alcanza-pleno-soporte-5de7)

![](img/readme1.png)

# Imágenes web

![](img/readme_img/1.jpg)
![](img/readme_img/2.png)
![](img/readme_img/3.png)
![](img/readme_img/4.png)
![](img/readme_img/5.png)
![](img/readme_img/6.png)

# Imágenes tablet
![](img/readme_img/7.png)


![](img/readme_img/8.png)


![](img/readme_img/9.png)

# Imágenes móvil

![](img/readme_img/10.png)


![](img/readme_img/11.png)


![](img/readme_img/12.png)



# Recursos
* [Movimiento del scroll](https://www.enmilocalfunciona.io/crear-un-carrusel-de-imagenes-solo-con-css/)
* [Animaciones de scroll](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline)
* [Box Shadow app](https://html-css-js.com/css/generator/box-shadow/)