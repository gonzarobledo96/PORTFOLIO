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
const WORDS = ['DISEÑADOR WEB Y  DESARROLLADOR FRONTEND'];
const WORDS_EN = ['WEB DESIGNER AND FRONT END DEVELOPER'];
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




  document.documentElement.style.setProperty('--color-hover', colorSeleccionado);
  
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
  idiomaActual = "en";
  actualizarTextos();
}
function cambiarAEspanol() {
  idiomaActual = "es";
  actualizarTextos();
}
function actualizarTextos() {
  // Asegúrate de que estas variables estén definidas correctamente
  var textosEn = {
    acercaDeMi: "< about me >",
    proyectosNav: "< PROJECTS >",
    misIntereses: "< MY INTERESTS >",
    contactar: "< CONTACT >",
    eligeColor: "Theme Colors",
    // INICIO
    holaMiNombreEsGonzalo: "HELLO, MY NAME IS",
    soy: "am",
    parrafo1: "Turning visions into reality through web design.",
    descargarCV: "download CV",

    // ACERCA-DE
    acercaDeTitulo: "ABOUT",
    sobreMiTitulo: "ABOUT ME",
    holaSoy: "Hi, I am",
    parrafo2: "Always look to dedicate myself to a career that has to do with design. I went through architecture school, I learned to draw to improve my creativity and imagination, even winning drawing contests at school, I even designed 3D houses for my friends. Now I create and design functional and attractive web pages so that people can use them.",
    tecnologiasYhabilidades: "Technologies and skills",
    herramientasDeDiseño: "Design Tools",
    
 // PROYECTOS
 proyectos: "PROJECTS",
 misProyectos: "MY PROJECTS",
 // Buffet Stentor
ver: "SEE",
repositorio: "REPOSITORY",
BuffetStentor: "BUFFET STENTOR",
lenguajesUtilizadosBuffet: "Languages used: Html, Css, Bootstrap, React, js and Figma",
// transporte-escolar
ver2: "SEE",
repositorio2: "REPOSITORY",
transporteRaulTitulo: "TRANSPORTATION RAUL-SCHOOL COMPANY",
lenguajesUtilizadosTransporte: "Languages used: Html, Css, Bootstrap, React, js and Figma.",
 // verduleria-natural
 ver3: "SEE",
 repositorio3: "REPOSITORY",
 verduleriatitulo: "ORGANIC-GREENHOUSE",
 lenguajesUtilizadosVerduleria: "Languages used: Html, Css, Bootstrap and Js.",
 // GNC-LURO
 LengujesUtilizadosGncLuro: "Languages used: Html, Css and Bootstrap.",
 verGnc: "SEE",
 repositorio4: "REPOSITORY",
// FIGMA 1
ver5: "SEE",
repositorio5: "REPOSITORY",
figmaTitulo: "Design with Figma",
herramientaFigma: "Design Tool: Figma",
// FIGMA 2
ver6: "SEE",
repositorio6: "REPOSITORY",
// PizerriaDonRemoleo: "Pizerria Don Remoleo",
herramientaFigma2: "Design Tool: Figma",
// INTERESES
interesesTitulo: "INTERESTS",
misDibujos: "MY DRAWINGS",
parrafoDibujos: "I USUALLY DRAW TO PUT MY MIND BLANK, RELAX, REGULATE STRESS AND IMPROVE CONCENTRATION. IT IS THE WAY I HAVE TO IMPROVE CREATIVITY AND MENTAL HEALTH.",
// CONTACTO
contacto: "CONTACT",
creatividad: "CREATIVITY IS INTELLIGENCE HAVING FUN.",
// FOOTER
footer: "Copyright Portfolio 2024. Gonzalo Matias Robledo - Web designer. 🏆🏆🏆",



    // ... otros textos en inglés
  };
  var textosEs = {
    acercaDeMi: "< ACERCA DE >",
    proyectosNav: "< PROYECTOS >",
    misIntereses: "< MIS INTERESES >",
    contactar: "< CONTACTAR >",
    eligeColor: " Colores del Tema",
    // INICIO
    holaMiNombreEsGonzalo: "HOLA, MI NOMBRE ES",
    soy: "SOY",
    parrafo1: "Convirtiendo visiones en realidad a través del diseño web.",
    descargarCV: "descargarCV",

    // ACERCA-DE
    acercaDeTitulo: "ACERCA DE",
    sobreMiTitulo: "SOBRE MÍ",
    holaSoy: "Hola, Soy",
    parrafo2: "Siempre busque dedicarme a alguna carrera que tenga que ver con el diseño. Pase por la facultad de arquitectura, aprendi a dibujar para mejorar mi creatividad e imaginacion, ganando hasta concursos de dibujo en el colegio, incluso diseñe en 3D casas para mis amigos. Ahora creo y diseño páginas web funcionales y atractivas para que las personas puedan utilizarlas.",
    tecnologiasYhabilidades: "Tecnologías y habilidades",
    herramientasDeDiseño: "Herramientas de diseño",

// PROYECTOS
proyectos: "PROYECTOS",
misProyectos: "MIS PROYECTOS",
// Buffet Stentor
ver: "VER",
repositorio: "REPOSITORIO",
BuffetStentor: "BUFFET STENTOR",
lenguajesUtilizadosBuffet: "Lenguajes utilizados: Html, Css, Bootstrap, React, js y Figma",
// transporte-escola
ver2: "VER",
repositorio2: "REPOSITORIO",
transporteRaulTitulo: "TRANSPORTE RAUL-EMPRESA ESCOLAR",
lenguajesUtilizadosTransporte: "lenguajes utilizados: Html, Css, Bootstrap y Js.",
// verduleria-natural
ver3: "VER",
repositorio3: "REPOSITORIO",
verduleriatitulo: "VERDULERIA-ORGANICA",
lenguajesUtilizadosVerduleria: "Lenguajes utilizados: Html, Css, Bootstrap y Js.",
// GNC-LURO
LengujesUtilizadosGncLuro: "lenguajesUtilizados-gncLuro-ing",
verGnc: "VER",
repositorio4: "REPOSITORIO",
// FIGMA
ver5: "VER",
repositorio5: "REPOSITORIO",
figmaTitulo: "Diseño con Figma",
herramientaFigma: "Herramienta de diseño: Figma",
// FIGMA 2
ver6: "VER",
repositorio6: "REPOSITORIO",
// PizerriaDonRemoleo: "Pizerria Don Remoleo",
herramientaFigma2: "Herramienta de diseño: Figma",

// INTERESES
interesesTitulo: "INTERESES",
misDibujos: "MIS DIBUJOS",
parrafoDibujos: "SUELO DIBUJAR PARA PONER MI MENTE EN BLANCO, RELAJARME, REGULAR EL ESTRÉS Y MEJORAR LA CONCENTRACIÓN. ES LA FORMA QUE TENGO DE MEJORAR LA CREATIVIDAD Y SALUD MENTAL.",
// CONTACTO
contacto: "CONTACTO",
creatividad: "LA CREATIVIDAD ES LA INTELIGENCIA DIVIRTIÉNDOSE.",
// FOOTER
footer: "© Copyright Portafolio 2024. Gonzalo Matias Robledo - Diseñador de páginas web. 🏆🏆🏆",
    // ... otros textos en español
  };



  var textos = (idiomaActual === "es") ? textosEs : textosEn;
  // Actualiza los textos en el DOM
  document.getElementById("acerca-de-mi-ing").innerText = textos.acercaDeMi;
  document.getElementById("proyectos-ing").innerText = textos.proyectosNav;
  document.getElementById("mis-intereses-ing").innerText = textos.misIntereses;
  document.getElementById("contactar-ing").innerText = textos.contactar;
  document.getElementById("elige-un-color-ing").innerText = textos.eligeColor;

  // INICIO
  document.getElementById("Hola-mi-nombre-es-Gonzalo-ing").innerText = textos.holaMiNombreEsGonzalo;
  document.getElementById("soy").innerText = textos.soy;
  document.getElementById("parrafos-1-ing").innerText = textos.parrafo1;
  document.getElementById("descargarCV").innerText = textos.descargarCV;

  // ACERCA-DE
  document.getElementById("acerca-de-titulo-ing").innerText = textos.acercaDeTitulo;
  document.getElementById("sobre-mi-titulo-ing").innerText = textos.sobreMiTitulo;
  document.getElementById("hola-soy-ing").innerText = textos.holaSoy;
  document.getElementById("parrafo-2-ing").innerText = textos.parrafo2;
  document.getElementById("tecnologíasYhabilidades-ing").innerText = textos.tecnologiasYhabilidades;
  document.getElementById("herramientasDeDiseño-ing").innerText = textos.herramientasDeDiseño;

  // PROYECTOS
  document.getElementById("proyecto-titulo-ing").innerText = textos.proyectos;
  document.getElementById("misProyectos-ing").innerText = textos.misProyectos;
  //BUFFET STENTOR
  document.getElementById("ver-ing").innerText = textos.ver;
  document.getElementById("repositorio-ing").innerText = textos.repositorio;
  //  document.getElementById("BuffetStentor-ing").innerText = textos.BuffetStentor;
   document.getElementById("lenguajesUtilizados-Transporte-ing").innerText = textos.lenguajesUtilizadosBuffet;
// TRANSPORTE-ESCOLAR
document.getElementById("transporte-raul-titulo-ing").innerText = textos.transporteRaulTitulo;
document.getElementById("ver2-ing").innerText = textos.ver2;
document.getElementById("repositorio2-ing").innerText = textos.repositorio2;
document.getElementById("lenguajesUtilizados-Buffet-ing").innerText = textos.lenguajesUtilizadosTransporte;
// VERDULERIA-NATURAL
document.getElementById("verduleria-titulo-ing").innerText = textos.verduleriatitulo;
document.getElementById("lenguajesUtilizados-verduleria-ing").innerText = textos.lenguajesUtilizadosVerduleria;
document.getElementById("ver3-ing").innerText = textos.verGnc;
document.getElementById("repositorio3-ing").innerText = textos.repositorio2;
// GNC-LURO
document.getElementById("lenguajesUtilizados-gncLuro-ing").innerText = textos.LengujesUtilizadosGncLuro;
document.getElementById("ver4-ing").innerText = textos.verGnc;
document.getElementById("repositorio4-ing").innerText = textos.repositorio4;
// FIGMA 1
document.getElementById("figma-ing").innerText = textos.figmaTitulo;
document.getElementById("herramienta-figma-ing").innerText = textos.herramientaFigma;
document.getElementById("ver5-ing").innerText = textos.ver5;
document.getElementById("repositorio5-ing").innerText = textos.repositorio5;
// FIGMA 2
// document.getElementById("PizerriaDonRemoleo").innerText = textos.PizerriaDonRemoleo;
document.getElementById("herramientaDeFigmaPizza-ing").innerText = textos.herramientaFigma2;
document.getElementById("ver6-ing").innerText = textos.ver6;
document.getElementById("repositorio6-ing").innerText = textos.repositorio6;
// INTERESES
// document.getElementById("PizerriaDonRemoleo").innerText = textos.PizerriaDonRemoleo;
document.getElementById("intereses-titulo-ing").innerText = textos.interesesTitulo;
document.getElementById("misDibujos-ing").innerText = textos.misDibujos;
document.getElementById("parrafoDibujos-ing").innerText = textos.parrafoDibujos;

// CONTACTO
document.getElementById("contacto-ing").innerText = textos.contacto;
document.getElementById("creatividad-ing").innerText = textos.creatividad;

// FOOTER
document.getElementById("footer-ing").innerText = textos.footer;
  // ... otros elementos
  consoleText((idiomaActual === "es") ? WORDS : WORDS_EN, 'text');
}

// Llamada inicial para asegurar que los textos estén correctamente establecidos
actualizarTextos();
