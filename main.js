// ****************
// LOGO HAMBURGUESA
// ****************
document.querySelector('.hamburger').addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('is-active');
  navbarCollapse.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  const hamburger = document.querySelector('.hamburger');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const targetElement = e.target;
  
  if (!hamburger.contains(targetElement) && !navbarCollapse.contains(targetElement)) {
    hamburger.classList.remove('is-active');
    navbarCollapse.classList.remove('show');
  }
});



// ***********
// BOTON SUBIR
// ***********
function subirArriba() {
  // Desplazarse suavemente hacia arriba con velocidad más lenta
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
    duration: 2000
  });
}



// **************************
// EFECTO MAQUINA DE ESCRIBIR
// **************************
// Definir las palabras a mostrar y los colores disponibles
const WORDS = ['DESARROLLADOR Y DISEÑADOR WEB'];
const WORDS_EN = ['WEB DESIGNER AND DEVELOPER'];
const coloresDisponibles = ['rgb(255, 199, 88);', '#ec1839', '#fa5b0f', '#37b182', 'rgb(229, 233, 0)', '#2564ca', '#f021b2'];
const COLORS = [coloresDisponibles[0]];

// Establecer los tiempos de espera y animación
const WORD_CHANGE_DELAY_MS = 1000;
const ANIMATION_SPEED_MS = 120;
const UNDERSCORE_BLINK_INTERVAL_MS = 400;

// Inicializar el índice del color actual
let currentColorIndex = coloresDisponibles.indexOf(COLORS[0]);

// Variable para almacenar el intervalo de animación
let animationInterval;
let underscoreInterval;

// Función para cambiar el color de texto y borde de los elementos seleccionados
function cambiarColores(color) {
  const elementos = document.querySelectorAll('.color-cambiar');
  elementos.forEach(elemento => {
    elemento.style.color = color;
    elemento.style.borderColor = color;
  });

  // Actualizar el valor de currentColorIndex si es un color disponible
  const index = coloresDisponibles.indexOf(color);
  if (index !== -1) {
    currentColorIndex = index;
  }
}

// Función para manejar el cambio de color del selector de color
function handleColorChange() {
  const color = document.getElementById('selector-color').value;
  COLORS[0] = color; // actualizar COLORS con el valor del color seleccionado
  cambiarColores(color);
}

// Cambiar el color al primer color disponible al cargar la página
cambiarColores(coloresDisponibles[0]);

// Función para animar la aparición de texto en la consola
function consoleText(words, id, color) {
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);

  // Establecer el color de texto
  target.style.color = color || COLORS[0];

  // Limpiar los intervalos de animación existentes
  clearInterval(animationInterval);
  clearInterval(underscoreInterval);

  // Animar la aparición de letras
  animationInterval = setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      setTimeout(function() {
        var usedColor = color || COLORS[0];
        x = 1;
        target.style.color = usedColor;
        letterCount += x;
        waiting = false;
      }, WORD_CHANGE_DELAY_MS);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, WORD_CHANGE_DELAY_MS);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, ANIMATION_SPEED_MS);

  // Parpadeo del guión bajo
  underscoreInterval = setInterval(function() {
    if (visible === true) {
      con.classList.add('hidden');
      visible = false;
    } else {
      con.classList.remove('hidden');
      visible = true;
    }
  }, UNDERSCORE_BLINK_INTERVAL_MS);
}
// Llamar a la función consoleText con las palabras y el ID del elemento donde se mostrará el texto
consoleText(WORDS, 'text');



// ****************************************
// CAMBIAR COLORES DEL H1, H2, UL, LI, ETC.
// ****************************************
function handleColorChange(event) {
  event.preventDefault();
  const colorSeleccionado = event.target.parentNode.getAttribute('data-color');
  cambiarColores(colorSeleccionado);
}
function closeDropdown() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  dropdownToggle.classList.remove('show');
}
function cambiarColores(colorSeleccionado) {
  // Resto del código para cambiar los colores utilizando el colorSeleccionado

  const descargarCV = document.querySelectorAll('.descargarCV');
  const span = document.querySelectorAll('span');
  const titulos = document.querySelectorAll('h1');
  const bordes = document.querySelectorAll('.contenedor-imagen');
  const bordes2 = document.querySelectorAll('.contenedor-imagen2');
  const sobreMi = document.querySelectorAll('.sobre-mi');
  const parrafoLogo = document.querySelectorAll('.parrafo-logo p');
  const logoImagenes = document.querySelectorAll('.logos-imagen a');
const tituloProyecto = document.querySelectorAll('.titulo-proyectos i');
const tecnologiasyhabilidades = document.querySelectorAll('.tecnologíasyhabilidades');
const lineaProyecto = document.querySelectorAll('.linea-proyecto');
const portfolio = document.querySelectorAll('.info p');
const portfolioImagenes = document.querySelectorAll('.proyecto');
const hamburger = document.querySelectorAll('.hamburger');
const hamburgerHidden = document.querySelectorAll('.hamburger__hidden');
const hamburgerInner = document.querySelectorAll('.hamburger__inner');

// Resto del código para cambiar los estilos de los elementos con el colorSeleccionado
// ...

descargarCV.forEach((descargar) => {
descargar.style.backgroundColor = colorSeleccionado;
});

titulos.forEach((titulo) => {
titulo.style.color = colorSeleccionado;
});

bordes.forEach((borde) => {
borde.style.borderColor = colorSeleccionado;
});

bordes2.forEach((borde) => {
  borde.style.borderColor = colorSeleccionado;
  });

span.forEach((span) => {
span.style.color = colorSeleccionado;
});

sobreMi.forEach((sobreMi) => {
sobreMi.style.color = 'white !important';
});

parrafoLogo.forEach((parrafoLogo) => {
parrafoLogo.style.color = colorSeleccionado;
});

tecnologiasyhabilidades.forEach((tecnologiasyhabilidades) => {
tecnologiasyhabilidades.style.color = colorSeleccionado;
});

tituloProyecto.forEach((tituloProyecto) => {
tituloProyecto.style.color = colorSeleccionado;
tituloProyecto.style.borderColor = colorSeleccionado;
});

logoImagenes.forEach((logoImagen) => {
logoImagen.style.backgroundColor = colorSeleccionado;
logoImagen.style.borderRadius = '10%';
logoImagen.style.transition = '0.5s';
});

lineaProyecto.forEach((lineaProyecto) => {
  lineaProyecto.style.backgroundColor = colorSeleccionado;
  });

  portfolio.forEach((portfolio) => {
    portfolio.style.color = colorSeleccionado;
    });

    hamburgerHidden.forEach((hamburgerHidden) => {
      hamburgerHidden.style.backgroundColor = colorSeleccionado;
      });

      hamburgerInner.forEach((hamburgerInner) => {
        hamburgerInner.style.backgroundColor = colorSeleccionado;
        });

        hamburger.forEach((hamburger) => {
          hamburger.style.borderColor = colorSeleccionado;
          });

       
    // SOMBRA DE LAS IMAGENES DE PROYECTOS
    if (colorSeleccionado === '') {
      // Removemos la sombra en las imágenes
      portfolioImagenes.forEach((portfolioImagen) => {
        portfolioImagen.style.boxShadow = ''; /* poner none si quieres quitar la sombra */
      });
    } else {
      portfolioImagenes.forEach((portfolioImagen) => {
        portfolioImagen.style.boxShadow = `10px 10px 10px 5px ${colorSeleccionado}`;
      });
    }
}
const colorList = document.getElementById('color-list');
const colorItems = colorList.querySelectorAll('a');
colorItems.forEach((item) => {
item.addEventListener('click', handleColorChange);
});



// **************************
// CAMBIAR EL FONDO DEL BODY
// **************************
// nuevo del viejo
function cambiarFondo() {
  const body = document.body;
  const icono = document.getElementById('modo-icono');
  const contenedorImagen1 = document.querySelector('.contenedor-imagen');
  const contenedorImagen2 = document.querySelector('.contenedor-imagen2');
  const imagen1 = contenedorImagen1.querySelector('img');
  const imagen2 = contenedorImagen2.querySelector('img');

  // ... Código existente ...

  // Cambia la imagen de fondo del contenedor-imagen1
  if (body.classList.contains('modo-oscuro')) {
    imagen1.src = './imagenes/imagen-personal/responsive-1.png';
    imagen1.alt = 'Descripción de la imagen en modo oscuro';
  } else {
    imagen1.src = './imagenes/imagen-personal/responsive-2.png';
    imagen1.alt = 'Descripción de la imagen en modo claro';
  }

  // Cambia la imagen de fondo del contenedor-imagen2
  if (body.classList.contains('modo-oscuro')) {
    imagen2.src = './imagenes/imagen-personal/responsive-1.png';
    imagen2.alt = 'Descripción de la imagen en modo oscuro';
  } else {
    imagen2.src = './imagenes/imagen-personal/responsive-2.png';
    imagen2.alt = 'Descripción de la imagen en modo claro';
  }

  // CAMBIA EL LOGO DEL SOL A LA LUNA
  // Verifica si el cuerpo tiene la clase 'modo-oscuro'
  if (body.classList.contains('modo-oscuro')) {
    // Cambia el ícono al sol y remueve la clase 'modo-oscuro' del cuerpo
    icono.className = 'fa-regular fa-sun';
    body.classList.remove('modo-oscuro');
  } else {
    // Cambia el ícono a la luna y agrega la clase 'modo-oscuro' al cuerpo
    icono.className = 'fa-regular fa-moon';
    body.classList.add('modo-oscuro');
  }
  // Integración de tu código
  const diseñoOla = document.querySelector('.shapedividers_com-6525');
  const acercaDeTitulo = document.querySelector('.acerca-de-Titulo');
  const fondoContacto = document.querySelector('.fondo-contacto');
  const tituloProyecto = document.querySelector('.titulo-proyectos');
  const span = document.querySelector('span');
  const acercaDe = document.querySelector('.acerca-de-fondo');
  const fondoNav = document.querySelector('.sobre-mi');
  const parrafos = document.querySelector('.parrafos');
  const tituloSeccion = document.querySelector('.titulo-seccion');
  const tecnologiasYHabilidades = document.querySelector('.tecnologias-y-habilidades');
  const consoleContainer = document.querySelector('.console-container');
  const consoleUnderscore = document.querySelector('.console-underscore');
  const navbarBg = document.querySelector('navbar');
  const parrafoLogo = document.querySelector('.parrafo-logo');
  const logosColores = document.querySelector('.logo-navBar-colores');
  const eligeUnColor = document.querySelector('.elige-un-color');
  const btnSubirArriba = document.querySelector('#btnSubirArriba');
  
  // Agrega o remueve la clase 'modo-oscuro' a los elementos
  diseñoOla.classList.toggle('modo-oscuro');
  acercaDeTitulo.classList.toggle('modo-oscuro');
  tituloProyecto.classList.toggle('modo-oscuro');
  span.classList.toggle('modo-oscuro');
  acercaDe.classList.toggle('modo-oscuro');
  fondoNav.classList.toggle('modo-oscuro');
  parrafos.classList.toggle('modo-oscuro');
  tituloSeccion.classList.toggle('modo-oscuro');
  tecnologiasYHabilidades.classList.toggle('modo-oscuro');
  consoleContainer.classList.toggle('modo-oscuro');
  consoleUnderscore.classList.toggle('modo-oscuro');
  navbarBg.classList.toggle('modo-oscuro');
  parrafoLogo.classList.toggle('modo-oscuro');
  logosColores.classList.toggle('modo-oscuro');
  fondoContacto.classList.toggle('modo-oscuro');
  eligeUnColor.classList.toggle('modo-oscuro');
  btnSubirArriba.classList.toggle('modo-oscuro');
}



// ***********************
// CAMBIAR IDIOMA A INGLES
// ***********************
// querySelector es para las clases
// getElementById es para los id
var idiomaActual = "es";

function toggleIdioma() {
  if (idiomaActual === "es") {
    cambiarAIngles();
  } else {
    cambiarAEspanol();
  }
}

function cambiarAIngles() {
  // Cambiar el idioma a inglés
  document.getElementById("acerca-de-mi-ing").innerText = "about me";
  document.getElementById("proyectos-ing").innerText = "PROJECTS";
  document.getElementById("mis-intereses-ing").innerText = "MY INTERESTS";
  document.getElementById("contactar-ing").innerText = "CONTACT";
  document.getElementById("elige-un-color-ing").innerText = "Theme Colors";
  // INICIO
  document.getElementById("Hola-mi-nombre-es-Gonzalo-ing").innerText = "HELLO, MY NAME IS";
   document.getElementById("soy").innerText = "am";
  document.getElementById("parrafos-1-ing").innerText = "Turning visions into reality through web design.";
  document.getElementById("descargarCV").innerText = "download CV";
  // ACERCA-DE
  document.getElementById("acerca-de-titulo-ing").innerText = "ABOUT";
  document.getElementById("sobre-mi-titulo-ing").innerText = "ABOUT ME";
  document.getElementById("hola-soy-ing").innerText = "Hi, I am";
  document.getElementById("parrafo-2-ing").innerText = "Always look to dedicate myself to a career that has to do with design. I went through architecture school, I learned to draw to improve my creativity and imagination, even winning drawing contests at school, I even designed 3D houses for my friends. Now I create and design functional and attractive web pages so that people can use them.";
  document.getElementById("tecnologíasYhabilidades-ing").innerText = "Technologies and skills";
  document.getElementById("herramientasDeDiseño-ing").innerText = "Design Tools";
  // PROYECTOS
  document.getElementById("proyecto-titulo-ing").innerText = "PROJECTS";
  document.getElementById("misProyectos-ing").innerText = "MY PROJECTS";
  // gnc-luro
  document.getElementById("lenguajesUtilizados-gncLuro-ing").innerText = "Languages used: Html, Css and Bootstrap.";
  document.getElementById("ver-ing").innerText = "SEE";
  document.getElementById("repositorio-ing").innerText = "REPOSITORY";
  // verduleria-natural
  document.getElementById("ver2-ing").innerText = "SEE";
document.getElementById("repositorio2-ing").innerText = "REPOSITORY";
document.getElementById("verduleria-titulo-ing").innerText = "ORGANIC-GREENHOUSE";
document.getElementById("lenguajesUtilizados-verduleria-ing").innerText = "Languages used: Html, Css, Bootstrap and Js.";
// transporte-escolar
document.getElementById("ver3-ing").innerText = "SEE";
document.getElementById("repositorio3-ing").innerText = "REPOSITORY";
document.getElementById("transporte-raul-titulo-ing").innerText = "TRANSPORTATION RAUL-SCHOOL COMPANY";
document.getElementById("lenguajesUtilizados-Transporte-ing").innerText = "Languages used: Html, Css, Bootstrap and Js.";
// FIGMA
document.getElementById("figma-ing").innerText = "Design with Figma";
document.getElementById("herramienta-figma-ing").innerText = "Design Tool: Figma";
 document.getElementById("ver4-ing").innerText = "SEE";
 document.getElementById("repositorio4-ing").innerText = "REPOSITORY";
  // INTERESES
  document.getElementById("intereses-titulo-ing").innerText = "INTERESTS";
  document.getElementById("misDibujos-ing").innerText = "MY DRAWINGS";
  document.getElementById("parrafoDibujos-ing").innerText = "I USUALLY DRAW TO PUT MY MIND BLANK, RELAX, REGULATE STRESS AND IMPROVE CONCENTRATION. IT IS THE WAY I HAVE TO IMPROVE CREATIVITY AND MENTAL HEALTH.";
//  CONTACTO
document.getElementById("contacto-ing").innerText = "CONTACT";
document.getElementById("creatividad-ing").innerText = "CREATIVITY IS INTELLIGENCE HAVING FUN.";
  // FOOTER
  document.getElementById("footer-ing").innerText = "© Copyright Portfolio 2023. Gonzalo Matias Robledo - Web page developer. 🏆🏆🏆";
  consoleText(WORDS_EN, 'text');

  // Cambiar otros elementos a inglés
  idiomaActual = "en";
}

function cambiarAEspanol() {
  // Cambiar el idioma a español
  document.getElementById("acerca-de-mi-ing").innerText = "ACERCA DE";
  document.getElementById("proyectos-ing").innerText = "PROYECTOS";
  document.getElementById("mis-intereses-ing").innerText = "MIS INTERESES";
  document.getElementById("contactar-ing").innerText = "CONTACTAR";
  document.getElementById("elige-un-color-ing").innerText = "Colores del Tema";
  // INICIO 
  document.getElementById("Hola-mi-nombre-es-Gonzalo-ing").innerText = "HOLA, MI NOMBRE ES";
   document.getElementById("soy").innerText = "SOY";
  document.getElementById("parrafos-1-ing").innerText = "Convirtiendo visiones en realidad a través del diseño web.";
  document.getElementById("descargarCV").innerText = "descargarCV";
  // ACERCA-DE
  document.getElementById("acerca-de-titulo-ing").innerText = "ACERCA DE";
  document.getElementById("sobre-mi-titulo-ing").innerText = "SOBRE MÍ";
  document.getElementById("hola-soy-ing").innerText = "Hola, Soy";
  document.getElementById("parrafo-2-ing").innerText = "Siempre busque dedicarme a alguna carrera que tenga que ver con el diseño.  Pase por la facultad de arquitectura, aprendi a dibujar para mejorar mi creatividad e imaginacion, ganando hasta concursos de dibujo en el colegio, incluso diseñe en 3D casas para mis amigos. Ahora creo y diseño páginas web funcionales y atractivas para que las personas puedan utilizarlas.";
  document.getElementById("tecnologíasYhabilidades-ing").innerText = "Tecnologías y habilidades";
  document.getElementById("herramientasDeDiseño-ing").innerText = "Herramientas de diseño";
 // PROYECTOS
 document.getElementById("proyecto-titulo-ing").innerText = "PROYECTOS";
 document.getElementById("misProyectos-ing").innerText = "MIS PROYECTOS";
// gnc-luro
 document.getElementById("lenguajesUtilizados-gncLuro-ing").innerText = "Lenguajes utilizados: Html, Css y Bootstrap.";
document.getElementById("ver-ing").innerText = "VER";
document.getElementById("repositorio-ing").innerText = "REPOSITORIO";
// verduleria-natural
document.getElementById("ver2-ing").innerText = "VER";
document.getElementById("repositorio2-ing").innerText = "REPOSITORIO";
document.getElementById("verduleria-titulo-ing").innerText = "VERDULERIA-ORGANICA";
document.getElementById("lenguajesUtilizados-verduleria-ing").innerText = "lenguajes utilizados: Html, Css, Bootstrap y Js.";
// transporte-escolar
document.getElementById("ver3-ing").innerText = "VER";
document.getElementById("repositorio3-ing").innerText = "REPOSITORIO";
document.getElementById("transporte-raul-titulo-ing").innerText = "TRANSPORTE RAUL-EMPRESA ESCOLAR";
document.getElementById("lenguajesUtilizados-Transporte-ing").innerText = "lenguajes utilizados: Html, Css, Bootstrap y Js.";
// FIGMA
document.getElementById("figma-ing").innerText = "Diseño con Figma";
document.getElementById("herramienta-figma-ing").innerText = "Herramienta de diseño: Figma";
document.getElementById("ver4-ing").innerText = "VER";
document.getElementById("repositorio4-ing").innerText = "REPOSITORIO";
// INTERESES
 document.getElementById("intereses-titulo-ing").innerText = "INTERESES";
 document.getElementById("misDibujos-ing").innerText = "MIS DIBUJOS";
 document.getElementById("parrafoDibujos-ing").innerText = "SUELO DIBUJAR PARA PONER MI MENTE EN BLANCO, RELAJARME, REGULAR EL ESTRÉS Y MEJORAR LA CONCENTRACIÓN. ES LA FORMA QUE TENGO DE MEJORAR LA CREATIVIDAD Y SALUD MENTAL.";
//  CONTACTO
document.getElementById("contacto-ing").innerText = "CONTACTO";
document.getElementById("creatividad-ing").innerText = "LA CREATIVIDAD ES LA INTELIGENCIA DIVIRTIÉNDOSE.";
  consoleText(WORDS, 'text');
  // FOOTER
  document.getElementById("footer-ing").innerText = "© Copyright Portafolio 2023. Gonzalo Matias Robledo - Desarrollador de páginas web. 🏆🏆🏆";

  // Cambiar otros elementos a español
  idiomaActual = "es";
}

