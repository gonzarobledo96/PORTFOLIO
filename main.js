
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

};



// **************************
// CAMBIAR EL FONDO DEL BODY
// **************************
// function cambiarFondo() {
//   const body = document.body;
//   const icono = document.getElementById('modo-icono');
  // const contenedorImagen1 = document.querySelector('.contenedor-imagen');
  // const contenedorImagen2 = document.querySelector('.contenedor-imagen2');
  // const imagen1 = contenedorImagen1.querySelector('img');
  // const imagen2 = contenedorImagen2.querySelector('img');

  //  Cambia la imagen de fondo del contenedor-imagen1
  // if (body.classList.contains('modo-oscuro')) {
  //   imagen1.src = './imagenes/imagen-personal/responsive-1.png';
  //   imagen1.alt = 'Descripción de la imagen en modo oscuro';
  // } else {
  //   imagen1.src = './imagenes/imagen-personal/responsive-2.png';
  //   imagen1.alt = 'Descripción de la imagen en modo claro';
  // }

  //  Cambia la imagen de fondo del contenedor-imagen2
  // if (body.classList.contains('modo-oscuro')) {
  //   imagen2.src = './imagenes/imagen-personal/responsive-1.png';
  //   imagen2.alt = 'Descripción de la imagen en modo oscuro';
  // } else {
  //   imagen2.src = './imagenes/imagen-personal/responsive-2.png';
  //   imagen2.alt = 'Descripción de la imagen en modo claro';
  // }


//    CAMBIA EL LOGO DEL SOL A LA LUNA
//    Verifica si el cuerpo tiene la clase 'modo-oscuro'
//   if (body.classList.contains('modo-oscuro')) {
//      Cambia el ícono al sol y remueve la clase 'modo-oscuro' del cuerpo
//     icono.className = 'fa-regular fa-sun';
//     body.classList.remove('modo-oscuro');
//   } else {
//      Cambia el ícono a la luna y agrega la clase 'modo-oscuro' al cuerpo
//     icono.className = 'fa-regular fa-moon';
//     body.classList.add('modo-oscuro');
//   }
// }



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
    serviciosNav:"SERVICES",
    perfilNav: "Profile",
    proyectosNav: "PROJECTS",
    misInteresesNav: "MY INTERESTS",
    contactar: "CONTACT",
    eligeColor: "Theme Colors",
    // INICIO
    Introduccion:"INTRODUCTION",
    DiseñadorFronTend: "Web and Front-end designer",
    MejorDiseñoParaSuWeb: "Best design for your website",
    descargarCV: "Download CV",
    LinkWs:"Whatsapp link",
    AñosDeExperiencia: "Years of experience",
    proyectosCreados: "Created Projects",
//SERVICIOS
ServicioTitulo: "SERVICES",
LoQueHago: "WHAT I DO",
webProfesional: "Custom Web",
webProfesionalParrafo: "Creation of unique websites tailored to the client's needs",
DiseñoResponsive:"Responsive Design",
DiseñoResponsiveParrafo:"Ensuring that websites look and function well on mobile and desktop devices.",
OptimizacionSeo:"SEO Optimization",
OptimizacionSeoParrafo:"Improving the structure and content of your site to maximize its visibility in search engines and increase traffic.",
DiseñoUi:"UI Design/Prototypes",
DiseñoUiPrrafo:"Development of wireframes and prototypes to ensure optimal design before starting the project.",
MantenimientoSoporte:"Maintenance and Support",
 MantenimientoSoporteParrafo:"Ongoing service to keep the site up-to-date, secure and running smoothly, including content updates.",
// PROYECTOS
proyectoTitulo:"PROJECTS",
proyectoSubtitulo:"MY PROJECTS",
disenoUITitulo:"UI Design",

buffetStentorTituloImg:"Stentor buffet website",
buffetStentorParrafoImg:"Intuitive platform to view relevant information about a local buffet.",
buffetStentorTitulo:"STENTOR BUFFET",
buffetStentorParrafo:"Website for a neighborhood buffet located in Villa Luro, Capital. It is an intuitive website to capture the attention of potential customers in the area and its surroundings, prioritizing the display of the most relevant information and optimizing the design to improve the user experience.",
verProyecto:"See project",
verCodigo:"See code",

// TRANSPORTE ESCOLAR
TransporteEscolarTituloImg:"School transport website",
TransporteEscolarParrafoImg:"Website for a family school transportation company.",
TransporteEscolarParrafo:"This project is about my family's business. I developed a website in order to showcase and attract more clients and companies interested in school transportation, providing clear information about the transportation services my family offers: vehicles, services, safety policies and our current clients.",
// HOCHBAUM ESTUDIO
HochbaumEstudioTituloImg:"Architecture studio website",
HochbaumEstudioParrafoImg:"Website for an architecture studio.",
HochbaumEstudioParrafo:"Website concept for an architectural firm. The main objective was to develop a site with a clean and modern design that highlights their services and potential projects. The focus was on creating an intuitive user experience, ensuring that navigation is smooth and essential information is easily accessible to visitors.",
// GNC
GncParrafoImg:"CNG Sales Website",
GncParrafoImg:"Website for a CNG sales outlet.",
GncParrafo:"Website about a local business specializing in CNG sales. The goal was to create an informative and user-friendly platform that would highlight the services and products offered. I implemented clear sections to describe the services of the outlet. This project significantly contributed to my experience in web design and development.",

// PERFIL
PerfilTitulo:"PROFILE",
MasSobreMi:"MORE ABOUT ME",
perfilUno:"My name is Gonzalo, but my friends call me Pichu. I started programming when I was studying architecture. I had two subjects: drawing and design; there I learned to draw sketches, sketches, perspective drawings and 3D design programs. There I understood that my path was design.",
perfilDos:"I decided to improve those drawing and design skills by choosing a career as a web and frontend designer. My first project was my family's company, where I helped create a website where people could see all the company's information and learn more about who we are and what we offer. That helped me get other jobs and continue improving my skills.",
perfilTres:"I love always learning something new. I define myself as an empathetic, proactive and detail-oriented person, who likes to work in a team and help others, offering creative solutions to each project. My goal is to continue improving and learning more every day.",
tecnologiasTitulo:"Technologies",
habilidadesTitulo:"Soft Skills",
// habilidades blandas
habilidadBlandaUno: "Teamwork",
habilidadBlandaDos: "Effective Communication",
habilidadBlandaTres: "Patience",
habilidadBlandaCuatro: "Emotional Intelligence",
habilidadBlandaCinco: "Proactivity",
habilidadBlandaSeis: "Creativity",




// DIBUJOS
dibujosTitulo: "DRAWINGS",
misDibujos: "MY DRAWINGS",
parrafoDibujos: "I LOVE DRAWING, IT IMPROVES MY CREATIVITY AND ENRICHES MY APPROACH TO WEB DESIGN, BRINGING FRESHNESS AND INNOVATION TO EVERY PROJECT.",

// CONTACTO
contacto: "CONTACT",
// fraseContacto: "CREATIVITY IS INTELLIGENCE HAVING FUN.",
fraseContactoDos: "Let's talk about your project! I'm here to help you create something amazing",

// FOOTER
 footer: "Copyright Portfolio 2024. Gonzalo Matías Robledo - Web designer. 🏆🏆🏆",



    // ********
    // ESPAÑOL
    // ********
  };
  var textosEs = {
    inicioNav:"INICIO",
    serviciosNav:"SERVICIOS",
    perfilNav: "PERFIL",
    proyectosNav: "PROYECTOS",
    misInteresesNav: "MIS INTERESES",
    contactar: "CONTACTAR",
    eligeColor: " Colores del Tema",
    // INICIO
    Introduccion:"INTRODUCCIÓN",
    DiseñadorFronTend: "Diseñador web y Front-end",
    MejorDiseñoParaSuWeb: "Mejor diseño para su Web",
    descargarCV: "Descargar CV",
    LinkWs:"link Whatsapp",
    AñosDeExperiencia: "Años de experiencia",
    proyectosCreados: "Proyectos creados",
//SERVICIOS
ServicioTitulo: "SERVICIOS",
LoQueHago: "LO QUE HAGO",
webProfesional: "Web Personalizado",
webProfesionalParrafo: "creación de sitios web únicos y adaptados a las necesidades del cliente",
DiseñoResponsive:"Diseño Responsivo",
DiseñoResponsiveParrafo:"Asegurar que los sitios web se vean y funcionen bien en dispositivos móviles y de escritorio.",
OptimizacionSeo:"Optimización para SEO",
OptimizacionSeoParrafo:"Mejora de la estructura y contenido del sitio para maximizar su visibilidad en motores de búsqueda y aumentar el tráfico.",
DiseñoUi:"Diseño UI/Prototipos",
DiseñoUiPrrafo:"Desarrollo de wireframes y prototipos para asegurar un diseño óptimo antes de iniciar el proyecto.",
MantenimientoSoporte:"Mantenimiento y soporte",
 MantenimientoSoporteParrafo:"Servicio continuo para mantener el sitio actualizado, seguro y funcionando sin problemas, incluyendo actualizaciones de contenido.",
// PROYECTOS
proyectoTitulo:"PROYECTOS",
proyectoSubtitulo:"MIS PROYECTOS",
disenoUITitulo:"Diseño UI",

// BUFFET STENTOR
buffetStentorTituloImg:"Web de buffet Stentor",
buffetStentorParrafoImg:"Plataforma intuitiva para visualizar información relevante de un buffet local.",
buffetStentorTitulo:"BUFFET STENTOR",
buffetStentorParrafo:"Web de buffet de barrio ubicado en Villa Luro, Capital. Es una web intuitiva para captar la atención de posibles clientes de la zona y sus alrededores, priorizando la visualización de la información más relevante y optimizando el diseño para mejorar la experiencia del usuario.",
verProyecto:"Ver proyecto",
verCodigo:"Ver código",

// TRANSPORTE ESCOLAR
TransporteEscolarTituloImg:"Web de transporte escolar",
TransporteEscolarParrafoImg:"Sitio web para una empresa familiar de transporte escolar.",
TransporteEscolarParrafo:"Este proyecto es sobre la empresa de mi familia. Desarrollé un sitio web con el fin de mostrar y atraer a más clientes y empresas interesadas en el transporte escolar, proporcionando información clara sobre los servicios de transporte que mi familia ofrece: vehículos, servicios, políticas de seguridad y nuestros clientes actuales.",

// HOCHBAUM ESTUDIO
HochbaumEstudioTituloImg:"Web de estudio de arquitectura",
HochbaumEstudioParrafoImg:"Sitio web para un estudio de arquitectura.",
HochbaumEstudioParrafo:"Concepto de página web para un estudio de arquitectura. El objetivo principal fue desarrollar un sitio con un diseño limpio y moderno que destaque sus servicios y proyectos potenciales. El enfoque estuvo en crear una experiencia de usuario intuitiva, asegurando que la navegación sea fluida y que la información esencial esté fácilmente accesible para los visitantes.",
// GNC
GncParrafoImg:"Sitio web de venta de GNC",
GncParrafoImg:"Sitio web para un local de venta de GNC.",
GncParrafo:"Web sobre un comercio local especializado en la venta de GNC. El objetivo fue crear una plataforma informativa y fácil de usar que destacara los servicios y productos ofrecidos. Implementé secciones claras para describir los servicios del local. Este proyecto contribuyó significativamente a mi experiencia en diseño y desarrollo web.",

// PERFIL
PerfilTitulo:"PERFIL",
MasSobreMi:"MÁS SOBRE MÍ",
perfilUno:"Me llamo Gonzalo, pero mis amigos me dicen Pichu. Empecé en la programación cuando estudiaba arquitectura. Tuve dos materias que eran dibujo y proyectual; ahí aprendí a dibujar bocetos, croquis, dibujos en perspectiva y programas de diseño en 3D. Ahí entendí que mi camino era el diseño.",
perfilDos:"Decidí mejorar esas habilidades de dibujo y diseño al elegir la carrera de diseñador web y frontend. Mi primer proyecto fue la empresa de mi familia, donde ayudé a crear una web en la que las personas pudieran ver toda la información de la empresa y conocer con más detalles quiénes somos y qué ofrecemos. Eso me ayudó a conseguir otros trabajos y a seguir mejorando mis habilidades.",
perfilTres:"Me encanta aprender siempre algo nuevo. Me defino como una persona empática, proactiva y detallista, que le gusta trabajar en equipo y ayudar a los demás, ofreciendo soluciones creativas a cada proyecto. Mi objetivo es seguir mejorando y aprender más cada día.",
tecnologiasTitulo:"Tecnologías",
habilidadesTitulo:"Habilidades Blandas",
// habilidades blandas
habilidadBlandaUno: "Trabajo en equipo",
habilidadBlandaDos: "Comunicación efectiva",
habilidadBlandaTres: "Paciencia",
habilidadBlandaCuatro: "Inteligencia emocional",
habilidadBlandaCinco: "Proactividad",
habilidadBlandaSeis: "Creatividad",

// DIBUJOS
dibujosTitulo: "DIBUJOS",
misDibujos: "MIS DIBUJOS",
parrafoDibujos: "ME ENCANTA DIBUJAR, MEJORA MI CREATIVIDAD Y ENRIQUECE MI ENFOQUE EN EL DISEÑO WEB, APORTANDO FRESCURA E INNOVACIÓN A CADA PROYECTO.",
// CONTACTO
contacto: "CONTACTO",
// fraseContacto: "LA CREATIVIDAD ES LA INTELIGENCIA DIVIRTIÉNDOSE.",
fraseContactoDos: "¡Hablemos sobre tu proyecto! Estoy aquí para ayudarte a crear algo increíble",
// FOOTER
 footer: "© Copyright Portafolio 2024. Gonzalo Matías Robledo - Diseñador de páginas web. 🏆🏆🏆",
    // ... otros textos en español
  };


  var textos = (idiomaActual === "es") ? textosEs : textosEn;
  // Actualiza los textos en el DOM
  // NAVBAR
  document.getElementById("inicio-ing").innerText = textos.inicioNav;
  document.getElementById("perfil-ing").innerText = textos.perfilNav;
  document.getElementById("proyectos-ing").innerText = textos.proyectosNav;
  document.getElementById("mis-intereses-ing").innerText = textos.misInteresesNav;
  document.getElementById("contactar-ing").innerText = textos.contactar;
  document.getElementById("elige-un-color-ing").innerText = textos.eligeColor;
  document.getElementById("servicios-ing").innerText = textos.serviciosNav;

  // INICIO
  document.getElementById("introduccion-ing").innerText = textos.Introduccion;
   document.getElementById("DiseñadorFronTend-ing").innerText = textos.DiseñadorFronTend;
   document.getElementById("MejorDiseñoParaSuWeb-ing").innerText = textos.MejorDiseñoParaSuWeb;
  document.getElementById("descargarCV-ing").innerText = textos.descargarCV;
  document.getElementById("Link-Whatsapp-ing").innerText = textos.LinkWs;
  document.getElementById("añosDeExperiencia-ing").innerText = textos.AñosDeExperiencia;
  document.getElementById("proyectos-creados-ing").innerText = textos.proyectosCreados;
  //SERVICIOS
 document.getElementById("ServiciosTituloIng").innerText = textos.ServicioTitulo;
 document.getElementById("Lo-que-hago-ing").innerText = textos.LoQueHago;
 document.getElementById("Diseño-responsive-ing").innerText = textos.DiseñoResponsive;
 document.getElementById("Diseño-responsive-parrafo-ing").innerText = textos.DiseñoResponsiveParrafo;
 document.getElementById("web-profesional-ing").innerText = textos.webProfesional;
 document.getElementById("web-profesionalParrafo-ing").innerText = textos.webProfesionalParrafo;
 document.getElementById("Optimizacion-seo-ing").innerText = textos.OptimizacionSeo;
 document.getElementById("Optimizacion-seo-parrafo-ing").innerText = textos.OptimizacionSeoParrafo;
 document.getElementById("Diseño-ui-ing").innerText = textos.DiseñoUi;
 document.getElementById("Diseño-ui-parrafo-ing").innerText = textos.DiseñoUiPrrafo;
 document.getElementById("Mantenimiento-soporte-ing").innerText = textos.MantenimientoSoporte;
 document.getElementById("Mantenimiento-soporte-parrafo-ing").innerText = textos.MantenimientoSoporteParrafo;
// PROYECTOS
 document.getElementById("proyecto-titulo-ing").innerText = textos.proyectoTitulo;
 document.getElementById("misProyectos-ing").innerText = textos.proyectoSubtitulo;
 document.getElementById("disenoUITitulo-ing").innerText = textos.disenoUITitulo;


// BUFFET STENTOR
 document.getElementById("buffet-Stentor-titulo-img-ing").innerText = textos.buffetStentorTituloImg;
 document.getElementById("buffet-Stentor-parrafo-ing").innerText = textos.buffetStentorParrafoImg;
 document.getElementById("buffet-Stentor-titulo-ing").innerText = textos.buffetStentorTitulo;
 document.getElementById("buffet-Stentor-titulo-parrafo-ing").innerText = textos.buffetStentorParrafo;
// el .querySelector llama al elemento que quieres cambiar, en este caso el span donde dentro esta parrafo. Esto hace que solo cambie lo que seleccionaste y no todo. si pones h1, p, h6, etc. tambien funciona.
// document.getElementById("ver-proyecto-ing").querySelector('span').innerText = textos.verProyecto;
// document.getElementById("ver-codigo-ing").querySelector('span').innerText = textos.verCodigo;
document.querySelectorAll('.ver-proyecto-ing').forEach(function(button) {
  button.querySelector('span').innerText = textos.verProyecto;
});
document.querySelectorAll('.ver-codigo-ing').forEach(function(button) {
  button.querySelector('span').innerText = textos.verCodigo;
});
//  TRANSPORTE ESCOLAR
document.getElementById("Transporte-escolar-titulo-img-ing").innerText = textos.TransporteEscolarTituloImg;
document.getElementById("Transporte-escolar-parrafo-img-ing").innerText = textos.TransporteEscolarParrafoImg;
document.getElementById("Transporte-escolar-parrafo-ing").innerText = textos.TransporteEscolarParrafo;
// HOCHBAUM ESTUDIO 
 document.getElementById("Hochbaum-estudio-titulo-img-ing").innerText = textos.HochbaumEstudioTituloImg;
 document.getElementById("Hochbaum-estudio-parrafo-img-ing").innerText = textos.HochbaumEstudioParrafoImg;
 document.getElementById("Hochbaum-estudio-parrafo-ing").innerText = textos.HochbaumEstudioParrafo;
// GNC
document.getElementById("Gnc-titulo-img-ing").innerText = textos.GncParrafoImg;
 document.getElementById("Gnc-parrafo-img-ing").innerText = textos.GncParrafoImg;
 document.getElementById("Gnc-parrafo-ing").innerText = textos.GncParrafo;

// PERFIL
document.querySelector('.Perfil-titulo-ing').innerText = textos.PerfilTitulo;
document.querySelector('.Mas-sobre-mi-ing').innerText = textos.MasSobreMi;
document.querySelector('.parrafo-perfil-uno-ing').innerText = textos.perfilUno;
document.querySelector('.parrafo-perfil-dos-ing').innerText = textos.perfilDos;
document.querySelector('.parrafo-perfil-tres-ing').innerText = textos.perfilTres;
document.querySelector('.tecnologias-titulo-ing').innerText = textos.tecnologiasTitulo;
document.querySelector('.habilidades-titulo-ing').innerText = textos.habilidadesTitulo;

// habilidades blandas
document.querySelector('.habilidad-blanda-uno-ing').innerText = textos.habilidadBlandaUno;
 document.querySelector('.habilidad-blanda-dos-ing').innerText = textos.habilidadBlandaDos;
 document.querySelector('.habilidad-blanda-tres-ing').innerText = textos.habilidadBlandaTres;
 document.querySelector('.habilidad-blanda-cuatro-ing').innerText = textos.habilidadBlandaCuatro;
 document.querySelector('.habilidad-blanda-cinco-ing').innerText = textos.habilidadBlandaCinco;
 document.querySelector('.habilidad-blanda-seis-ing').innerText = textos.habilidadBlandaSeis;


// DIBUJOS
document.getElementById("dibujos-titulo-ing").innerText = textos.dibujosTitulo;
document.getElementById("misDibujos-titulo-ing").innerText = textos.misDibujos;
document.getElementById("parrafoDibujos-ing").innerText = textos.parrafoDibujos;

// CONTACTO
document.getElementById("contacto-ing").innerText = textos.contacto;
// document.getElementById("fraseContacto-ing").innerText = textos.fraseContacto;
document.getElementById("fraseContactoDos-ing").innerText = textos.fraseContactoDos;

// FOOTER
document.getElementById("footer-ing").innerText = textos.footer;
  // // ... otros elementos
  // consoleText((idiomaActual === "es") ? WORDS : WORDS_EN, 'text');
}

// Llamada inicial para asegurar que los textos estén correctamente establecidos
actualizarTextos();
