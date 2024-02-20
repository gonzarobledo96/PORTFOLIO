
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






document.addEventListener('DOMContentLoaded', function () {
  // ... (otros códigos y eventos aquí)

  // Al cargar la página, mostrar solo los proyectos de Front-end
  mostrarProyectos('proyectos-frontend');
  resaltarTitulo('frontEndTitulo', 'disenoUITitulo-ing');
});

function mostrarProyectos(idProyecto) {
  // Ocultar todos los contenedores de proyectos
  var contenedores = document.querySelectorAll('#proyectos-frontend, #proyectos-diseno-ui');
  contenedores.forEach(function (contenedor) {
      contenedor.style.display = 'none';
  });
  // Mostrar el contenedor correspondiente
  var contenedorMostrar = document.getElementById(idProyecto);
  if (contenedorMostrar) {
      contenedorMostrar.style.display = '';
  }
}



// *******************************************
// DISEÑO DE LOS TITULOS FRONT-END Y DESEÑO UI
// *******************************************
document.addEventListener("DOMContentLoaded", function() {
  // Recuperar el estado almacenado en el almacenamiento local
  var tituloResaltado = localStorage.getItem('tituloResaltado');

  // Si hay un título resaltado, aplicar el resaltado
  if (tituloResaltado) {
      var titulo = document.getElementById(tituloResaltado);
      titulo.classList.add('resaltado');
  }
});
function resaltarTitulo(tituloId, otroTituloId) {
  // Obtener el título actual y el otro título
  var tituloActual = document.getElementById(tituloId);
  var otroTitulo = document.getElementById(otroTituloId);

  // Remover la clase 'resaltado' de ambos títulos
  tituloActual.classList.add('resaltado');
  otroTitulo.classList.remove('resaltado');

  // Almacenar el estado en el almacenamiento local
  localStorage.setItem('tituloResaltado', tituloId);
}



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
  const portfolioImagenes = document.querySelectorAll('.proyecto');
  
 
// SOMBRA DE LAS IMAGENES DE PROYECTOS
// if (colorSeleccionado === '') {
//    Removemos la sombra en las imágenes
//   portfolioImagenes.forEach((portfolioImagen) => {
//     portfolioImagen.style.boxShadow = '';  poner none si quieres quitar la sombra 
//   });
// } else {
//   portfolioImagenes.forEach((portfolioImagen) => {
//     portfolioImagen.style.boxShadow = `6px 6px 6px 1px ${colorSeleccionado}`;
//   });
// }
};



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
  // const perfilTitulo = document.querySelector('.titulo-perfil');
  // const fondoContacto = document.querySelector('.fondo-contacto');
  // const tituloProyecto = document.querySelector('.titulo-proyectos');
  // const span = document.querySelector('span');
  // const perfil = document.querySelector('.acerca-de-fondo');
  // const fondoNav = document.querySelector('.sobre-mi');
  // const parrafos = document.querySelector('.parrafos');
  // const tituloSeccion = document.querySelector('.titulo-seccion');
  // const tecnologiasYHabilidades = document.querySelector('.tecnologias-y-habilidades');
  // const consoleContainer = document.querySelector('.console-container');
  // const consoleUnderscore = document.querySelector('.console-underscore');
  // const navbarBg = document.querySelector('navbar');
  // const parrafoLogo = document.querySelector('.parrafo-logo');
  // const logosColores = document.querySelector('.logo-navBar-colores');
  // const eligeUnColor = document.querySelector('.elige-un-color');
  // const btnSubirArriba = document.querySelector('#btnSubirArriba');
  

  
  // Agrega o remueve la clase 'modo-oscuro' a los elementos
  // perfilTitulo.classList.toggle('modo-oscuro');
  // tituloProyecto.classList.toggle('modo-oscuro');
  // span.classList.toggle('modo-oscuro');
  // perfil.classList.toggle('modo-oscuro');
  // fondoNav.classList.toggle('modo-oscuro');
  // parrafos.classList.toggle('modo-oscuro');
  // tituloSeccion.classList.toggle('modo-oscuro');
  // tecnologiasYHabilidades.classList.toggle('modo-oscuro');
  // consoleContainer.classList.toggle('modo-oscuro');
  // consoleUnderscore.classList.toggle('modo-oscuro');
  // navbarBg.classList.toggle('modo-oscuro');
  // parrafoLogo.classList.toggle('modo-oscuro');
  // logosColores.classList.toggle('modo-oscuro');
  // fondoContacto.classList.toggle('modo-oscuro');
  // eligeUnColor.classList.toggle('modo-oscuro');
  // btnSubirArriba.classList.toggle('modo-oscuro');
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
    inicioNav: "Start",
    perfilNav: "Profile",
    proyectosNav: "PROJECTS",
    misInteresesNav: "MY INTERESTS",
    contactar: "CONTACT",
    eligeColor: "Theme Colors",

    // INICIO
    // holaMiNombreEsGonzalo: "HELLO, MY NAME IS",
    DiseñadorFronTend: "Front-end Developer",
    parrafoInicio: "Passionate about design, always willing to face challenges, I like everything that indicates web design and Front-end design. My unique point? creativity. In each project, I find a way to express my creativity in a unique way.",
    descargarCV: "Download CV",
    AñosDeExperiencia: "Years of experience",
    proyectosCreados: "Created Projects",

    // ACERCA-DE
    perfilTitulo: "PROFILE",
    masSobreMi: "MORE ABOUT ME",
    sobreMiTitulo: "ABOUT ME",
    // holaSoy: "Hi, I am",
    parrafoPerfil: "I studied architecture, I had a subject called drawing, where I learned to draw sketches, sketches, perspective drawings and so on. There I discovered that I really liked to capture my ideas and give them life. By choosing web design as a career I can combine the 2 things I like most, drawing and designing.",
    interesesTitulo:"INTERESTS",
    dibujar:"Draw",
    musica:"Muic",
    meditar:"To meditate",
    videoJuegos:"Video Games",
    tecnologiasYhabilidades: "TECHNOLOGIES AND SKILLS",
    // herramientasDeDiseño: "Design Tools",
    habilidadesBlandas: "SOFT SKILLS",
    ResolucionDeProblemas: "Problem resolution",
    proactividad: "Proactivity",
    trabajoEnEquipo: "Teamwork",
    creatividad: "Creativity",

 // PROYECTOS
 proyectos: "PROJECTS",
 misProyectos: "MY PROJECTS",
 disenoUITitulo: "UI Design",
 // Buffet Stentor
 proyecto1Titulo:"PROJECT 1",
 subtituloProyecto1:"Neighborhood buffet website",
 parrafoProyecto1:"This project is about a neighborhood buffet located in Villa Luro, Capital. My focus was on creating an intuitive platform that would make it easy to view the most relevant information. Additionally, I optimized the design to improve the user experience, ensuring that key information, such as the menu, hours and promotions, was easily accessible.",
ver: "SEE",
repositorio: "REPOSITORY",
BuffetStentor: "BUFFET STENTOR",
lenguajesUtilizadosBuffet: "Languages used: Html, Css, Bootstrap, React, js and Figma",
// transporte-escolar
proyecto2Titulo: "PROJECT 2",
subtituloProyecto2: "School transportation website",
parrafoProyecto2: "This project is about my family's business. I developed a website in order to attract more clients and companies interested in school transportation, providing clear information about the transportation services we offer: vehicles, safety policies and our current clients.",
ver2: "SEE",
repositorio2: "REPOSITORY",
transporteRaulTitulo: "TRANSPORTATION RAUL-SCHOOL COMPANY",
lenguajesUtilizadosTransporte: "Languages used: Html, Css, Bootstrap, React, js and Figma.",
 // verduleria-natural
 proyecto3Titulo: "PROJECT 3",
 subtituloProyecto3: "Greengrocer's website",
 parrafoProyecto3: "Simple website of a greengrocer as part of my learning process. The idea was to practice what I learned in my web development course at coderhouse. Focusing on improving my skills in creating a website. Although the project is modest, it represents an important step in my learning as a web designer and front-end designer.",
 ver3: "SEE",
 repositorio3: "REPOSITORY",
 verduleriatitulo: "ORGANIC-GREENHOUSE",
 lenguajesUtilizadosVerduleria: "Languages used: Html, Css, Bootstrap and Js.",
 // GNC-LURO
 proyecto4Titulo: "PROJECT 4",
 subtituloProyecto4: "Gnc sales website",
 parrafoProyecto4: "Website is about a local business specialized in the sale of CNG. The objective was to create an informative and easy-to-use platform that would highlight the services and products offered. I implemented clear sections to describe the local services offered. This project contributed significantly to my experience in web design and development.",
 verGnc: "SEE",
 repositorio4: "REPOSITORY",
 LengujesUtilizadosGncLuro: "Languages used: Html, Css and Bootstrap.",
// PORTAFOLIO ANTIGUO
ver5: "SEE",
// repositorio5: "REPOSITORY",
figmaTitulo: "Design with Figma",
herramientaFigma: "Design Tool: Figma",
// KIWANO
KiwanoTitulo:"KIWANO WEBSITE",
herramientaFigma2: "Design Tool: Figma",
ver6: "SEE",

// PIZZERIA DON REMOLEO
herramientaFigma3: "Design Tool: Figma",
ver7: "SEE",


// PRACTICANDO FIGMA
practicandoFigmaTitulo:"PRACTICING FIGMA",
herramientaFigma4: "Design Tool: Figma",
ver8: "SEE",




// DIBUJOS
dibujosTitulo: "DRAWINGS",
misDibujos: "MY DRAWINGS",
parrafoDibujos: "I USUALLY DRAW TO PUT MY MIND BLANK, RELAX, REGULATE STRESS AND IMPROVE CONCENTRATION. IT IS THE WAY I HAVE TO IMPROVE CREATIVITY AND MENTAL HEALTH.",

// CONTACTO
contacto: "CONTACT",
fraseContacto: "CREATIVITY IS INTELLIGENCE HAVING FUN.",

// FOOTER
footer: "Copyright Portfolio 2024. Gonzalo Matias Robledo - Web designer. 🏆🏆🏆",


    // ... otros textos en inglés
  };
  var textosEs = {
    inicioNav:"INICIO",
    perfilNav: "PERFIL",
    proyectosNav: "PROYECTOS",
    misInteresesNav: "MIS INTERESES",
    contactar: "CONTACTAR",
    eligeColor: " Colores del Tema",
    // INICIO
    DiseñadorFronTend: "Diseñador Front-end",
    parrafoInicio: "Apasionado por el diseño, dispuesto siempre a enfrentar desafios, me gusta todo lo que indique diseño web y diseño Front-end ¿Mi punto unico? creatividad. En cada proyecto, encuentro la forma de plasmar mi creatividad de manera única.",
    descargarCV: "Descargar CV",
    AñosDeExperiencia: "Años de experiencia",
    proyectosCreados: "Proyectos creados",

    // ACERCA-DE
    perfilTitulo: "PERFIL",
    masSobreMi: "MAS SOBRE MI",
    sobreMiTitulo: "SOBRE MÍ",
    // holaSoy: "Hola, Soy",
    parrafoPerfil: "Estudie arquitectura, tuve una materia que se llamaba dibujo, donde aprendi a dibujar bocetos, croquis, dibujos en perspectiva y demas. Ahi descubri que me gustaba mucho plasmar mis ideas y darles vida. Al elegir el diseño web como carrera puedo juntar las 2 cosas que mas me gustan, dibujar y diseñar.",
    interesesTitulo:"INTERESES",
    dibujar:"Dibujar",
    musica:"Musica",
    meditar:"Meditar",
    videoJuegos:"Video juegos",
    tecnologiasYhabilidades: "TECNOLOGIAS Y HABILIDADES",
    habilidadesBlandas: "HABILIDADES BLANDAS",
    ResolucionDeProblemas: "Resolucion de problemas",
    proactividad: "Proactividad",
    trabajoEnEquipo: "Trabajo en equipo",
    creatividad: "Creatividad",
    
// PROYECTOS
proyectos: "PROYECTOS",
misProyectos: "MIS PROYECTOS",
disenoUITitulo: "Diseño UI",
// Buffet Stentor
proyecto1Titulo:"PROYECTO 1",
subtituloProyecto1:"Pagina web de buffet de barrio",
parrafoProyecto1:"Este proyecto es sobre un buffet de barrio ubicado en Villa Luro, Capital. Mi enfoque se centró en crear una plataforma intuitiva que facilitara la visualización de la informacion mas relevante. Además, optimicé el diseño para mejorar la experiencia del usuario, asegurándome de que la información clave, como el menu, horarios y las promociones, estuviera fácilmente accesible.",
ver: "VER",
repositorio: "REPOSITORIO",
BuffetStentor: "BUFFET STENTOR",
lenguajesUtilizadosBuffet: "Lenguajes utilizados: Html, Css, Bootstrap, React, js y Figma",
// transporte-escola
proyecto2Titulo: "PROYECTO 2",
subtituloProyecto2: "Pagina web de transporte escolar",
parrafoProyecto2: "Este proyecto es sobre la empresa de mi familia. Desarrollé un sitio web con el fin de atraer a mas clientes y empresas interesadas en el transporte escolar, proporcionando información clara sobre los servicios de transporte que ofrecemos: vehiculos, políticas de seguridad y nuestros clientes actuales.",
ver2: "VER",
repositorio2: "REPOSITORIO",
transporteRaulTitulo: "TRANSPORTE RAUL-EMPRESA ESCOLAR",
lenguajesUtilizadosTransporte: "lenguajes utilizados: Html, Css, Bootstrap y Js.",
// verduleria-natural
proyecto3Titulo: "PROYECTO 3",
subtituloProyecto3: "Pagina web de Verduleria",
parrafoProyecto3: "Sencilla web de una verdulería como parte de mi proceso de aprendizaje. La idea era practicar lo aprendido en mi curso de desarrollo web en coderhouse. Centrándome en mejorar mis habilidades en la creación de un sitio web. Aunque el proyecto es modesto, representa un paso importante en mi aprendizaje como diseñador web y diseñador front-end.",
ver3: "VER",
repositorio3: "REPOSITORIO",
verduleriatitulo: "VERDULERIA-ORGANICA",
lenguajesUtilizadosVerduleria: "Lenguajes utilizados: Html, Css, Bootstrap y Js.",
// GNC-LURO
proyecto4Titulo: "PROYECTO 4",
subtituloProyecto4: "Pagina web de venta de Gnc",
parrafoProyecto4: "Sitio web es sobre un comercio local especializado en la venta de GNC .El objetivo fue crear una plataforma informativa y fácil de usar que destacara los servicios y productos ofrecidos. Implementé secciones claras para describir los servicios ofrecidos del local. Este proyecto contribuyó significativamente a mi experiencia en diseño y desarrollo web.",
verGnc: "VER",
repositorio4: "REPOSITORIO",
LengujesUtilizadosGncLuro: "Lenguajes utilizados: Html, Css y Bootstrap",
// PORTFOLIO ANTIGUO
ver5: "VER",
// repositorio5: "REPOSITORIO",
figmaTitulo: "PORTAFOLIO ANTIGUO",
herramientaFigma: "Herramienta de diseño: Figma",

// KIWANO
KiwanoTitulo:"WEB KIWANO",
herramientaFigma2: "Herramienta de diseño: Figma",
ver6: "VER",

// PIZZERIA DON REMOLEO
herramientaFigma3: "Herramienta de diseño: Figma",
ver7: "VER",

// PRACTICANDO FIGMA
practicandoFigmaTitulo:"PRACTICANDO FIGMA",
herramientaFigma4: "Herramienta de diseño: Figma",
ver8: "VER",


// DIBUJOS
dibujosTitulo: "DIBUJOS",
misDibujos: "MIS DIBUJOS",
parrafoDibujos: "SUELO DIBUJAR PARA PONER MI MENTE EN BLANCO, RELAJARME, REGULAR EL ESTRÉS Y MEJORAR LA CONCENTRACIÓN. ES LA FORMA QUE TENGO DE MEJORAR LA CREATIVIDAD Y SALUD MENTAL.",
// CONTACTO
contacto: "CONTACTO",
fraseContacto: "LA CREATIVIDAD ES LA INTELIGENCIA DIVIRTIÉNDOSE.",
// FOOTER
footer: "© Copyright Portafolio 2024. Gonzalo Matias Robledo - Diseñador de páginas web. 🏆🏆🏆",
    // ... otros textos en español
  };


  var textos = (idiomaActual === "es") ? textosEs : textosEn;
  // Actualiza los textos en el DOM
  document.getElementById("inicio-ing").innerText = textos.inicioNav;
  document.getElementById("perfil-ing").innerText = textos.perfilNav;
  document.getElementById("proyectos-ing").innerText = textos.proyectosNav;
  document.getElementById("mis-intereses-ing").innerText = textos.misInteresesNav;
  document.getElementById("contactar-ing").innerText = textos.contactar;
  document.getElementById("elige-un-color-ing").innerText = textos.eligeColor;

  // INICIO
   document.getElementById("DiseñadorFronTend-ing").innerText = textos.DiseñadorFronTend;
   document.getElementById("parrafo-inicio-ing").innerText = textos.parrafoInicio;
  document.getElementById("descargarCV-ing").innerText = textos.descargarCV;
  document.getElementById("añosDeExperiencia-ing").innerText = textos.AñosDeExperiencia;
  document.getElementById("proyectos-creados-ing").innerText = textos.proyectosCreados;
  // PERFIL
  document.getElementById("perfil-titulo-ing").innerText = textos.perfilTitulo;
  document.getElementById("masSobreMi-ing").innerText = textos.masSobreMi;
  document.getElementById("sobre-mi-titulo-ing").innerText = textos.sobreMiTitulo;
  document.getElementById("parrafo-perfil-ing").innerText = textos.parrafoPerfil;

  document.getElementById("intereses-titulo-ing").innerText = textos.interesesTitulo;
document.getElementById("dibujar-ing").innerText = textos.dibujar;
document.getElementById("musica-ing").innerText = textos.musica;
document.getElementById("meditar-ing").innerText = textos.meditar;
document.getElementById("videoJuegos-ing").innerText = textos.videoJuegos;
  document.getElementById("tecnologíasYhabilidades-ing").innerText = textos.tecnologiasYhabilidades;
  document.getElementById("habilidades-blandas-ing").innerText = textos.habilidadesBlandas;
  document.getElementById("ResolucionDeProblemas-ing").innerText = textos.ResolucionDeProblemas;
  document.getElementById("proactividad-ing").innerText = textos.proactividad;
  document.getElementById("trabajoEnEquipo-ing").innerText = textos.trabajoEnEquipo;
  document.getElementById("creatividad-ing").innerText = textos.creatividad;
 
 

  // PROYECTOS
  document.getElementById("proyecto-titulo-ing").innerText = textos.proyectos;
  document.getElementById("misProyectos-ing").innerText = textos.misProyectos;
  document.getElementById("disenoUITitulo-ing").innerText = textos.disenoUITitulo;
  //BUFFET STENTOR
  document.getElementById("proyecto1-titulo-ing").innerText = textos.proyecto1Titulo;
  document.getElementById("subtituloProyecto1-ing").innerText = textos.subtituloProyecto1;
  document.getElementById("parrafoProyecto1-ing").innerText = textos.parrafoProyecto1;
  document.getElementById("ver-ing").innerText = textos.ver;
  document.getElementById("repositorio-ing").innerText = textos.repositorio;
   document.getElementById("lenguajesUtilizados-Transporte-ing").innerText = textos.lenguajesUtilizadosBuffet;
// TRANSPORTE-ESCOLAR
document.getElementById("proyecto2-titulo-ing").innerText = textos.proyecto2Titulo;
document.getElementById("subtituloProyecto2-ing").innerText = textos.subtituloProyecto2;
document.getElementById("parrafoProyecto2-ing").innerText = textos.parrafoProyecto2;
document.getElementById("transporte-raul-titulo-ing").innerText = textos.transporteRaulTitulo;
document.getElementById("ver2-ing").innerText = textos.ver2;
document.getElementById("repositorio2-ing").innerText = textos.repositorio2;
document.getElementById("lenguajesUtilizados-Buffet-ing").innerText = textos.lenguajesUtilizadosTransporte;
// VERDULERIA-NATURAL
document.getElementById("proyecto3-titulo-ing").innerText = textos.proyecto3Titulo;
document.getElementById("subtituloProyecto3-ing").innerText = textos.subtituloProyecto3;
document.getElementById("parrafoProyecto3-ing").innerText = textos.parrafoProyecto3;
document.getElementById("verduleria-titulo-ing").innerText = textos.verduleriatitulo;
document.getElementById("lenguajesUtilizados-verduleria-ing").innerText = textos.lenguajesUtilizadosVerduleria;
document.getElementById("ver3-ing").innerText = textos.verGnc;
document.getElementById("repositorio3-ing").innerText = textos.repositorio2;
// GNC-LURO
document.getElementById("proyecto4-titulo-ing").innerText = textos.proyecto4Titulo;
document.getElementById("subtituloProyecto4-ing").innerText = textos.subtituloProyecto4;
document.getElementById("parrafoProyecto4-ing").innerText = textos.parrafoProyecto4;
document.getElementById("lenguajesUtilizados-gncLuro-ing").innerText = textos.LengujesUtilizadosGncLuro;
document.getElementById("ver4-ing").innerText = textos.verGnc;
document.getElementById("repositorio4-ing").innerText = textos.repositorio4;
// FIGMA 1
// PORTFOLIO ANTIGUO
document.getElementById("portafolioAntiguo-titulo-ing").innerText = textos.figmaTitulo;
document.getElementById("herramienta-figma-ing").innerText = textos.herramientaFigma;
document.getElementById("ver5-ing").innerText = textos.ver5;
// document.getElementById("repositorio5-ing").innerText = textos.repositorio5;

// KIWANO
document.getElementById("web-kiwano-titulo-ing").innerText = textos.KiwanoTitulo;
document.getElementById("herramientafigmaKiwano-ing").innerText = textos.herramientaFigma2;
document.getElementById("ver6-ing").innerText = textos.ver6;

// PIZZERIA DON REMOLEO
document.getElementById("herramientaDeFigmaPizza-ing").innerText = textos.herramientaFigma3;
document.getElementById("ver7-ing").innerText = textos.ver7;

// PRACTICANDO FIGMA
document.getElementById("practicandoFifma-titulo-ing").innerText = textos.practicandoFigmaTitulo;
document.getElementById("herramientaDeFigmaPracticando-ing").innerText = textos.herramientaFigma4;
document.getElementById("ver8-ing").innerText = textos.ver7;




// DIBUJOS
document.getElementById("dibujos-titulo-ing").innerText = textos.dibujosTitulo;
document.getElementById("misDibujos-titulo-ing").innerText = textos.misDibujos;
document.getElementById("parrafoDibujos-ing").innerText = textos.parrafoDibujos;

// CONTACTO
document.getElementById("contacto-ing").innerText = textos.contacto;
document.getElementById("fraseContacto-ing").innerText = textos.fraseContacto;

// FOOTER
document.getElementById("footer-ing").innerText = textos.footer;
  // // ... otros elementos
  // consoleText((idiomaActual === "es") ? WORDS : WORDS_EN, 'text');
}

// Llamada inicial para asegurar que los textos estén correctamente establecidos
actualizarTextos();
