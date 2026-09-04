## 🎃 Javadaba Miedo - Blog de Terror

¡Bienvenidos a **Javadaba Miedo**! Un sitio web interactivo y responsivo dedicado a recopilar historias de terror, leyendas urbanas y relatos perturbadores enviados por nuestra comunidad. 

Este proyecto fue desarrollado como parte de las prácticas del bootcamp de desarrollo web, implementando diseño moderno, componentes de Bootstrap y una estructura organizada en equipo.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

* **HTML5**: Estructura semántica del sitio web.
* **CSS3 & Estilos Personalizados**: Variables CSS, tipografías e identidad visual.
* **Bootstrap (v5.3)**: Framework CSS para diseño responsivo, sistemas de rejilla (Grid), alertas dinámicas y formularios.
* **JavaScript (ES6+)**: Manipulación del DOM, cargas asíncronas (`fetch` API para Navbar y Footer) y validación de formularios con alertas interactivas.
* **Control de Versiones**: Git y GitHub para la gestión de ramas y colaboración en equipo.
* **IDE**: Replit.

---

## ⚙️ Funcionalidades Principales
1. **Navegación Modular Dinámica**: El Navbar y el Footer se cargan de forma asíncrona mediante JavaScript, facilitando el mantenimiento del código sin repetir líneas en cada archivo HTML.
2. **Formulario de Contacto Interactivo**: Permite a los usuarios enviar sus propios relatos de terror, incorporando un sistema de validación y alertas dinámicas en tiempo real con opción de cierre (`dismissible alerts`).
3. **Diseño Responsivo de 3 Columnas**: Adaptado perfectamente para ofrecer espacios laterales simulados para noticias y publicidad sin perder el foco en la lectura central.
4. **Lectura Inmersiva**: Textos justificados y optimizados visualmente para una cómoda experiencia de usuario (UX).
---

## 📌 El Problema que Resuelve
En la web actual abundan los sitios de contenido de terror saturados de publicidad intrusiva y diseños poco amigables que arruinan la experiencia de lectura inmersiva. **Javadaba Miedo** resuelve este problema ofreciendo una plataforma minimalista, limpia y estructurada en tres columnas (noticias, contenido principal y espacios publicitarios), permitiendo a los amantes del género disfrutar de una lectura fluida, sin distracciones visuales y con un rendimiento optimizado en dispositivos móviles y de escritorio. Asimismo, provee un canal directo y validado para que los usuarios compartan sus propias experiencias paranormales.

---

## 👥 Contribuciones del Equipo 
Este proyecto fue desarrollado bajo una metodología ágil y colaborativa por el equipo de **Generation México**:

* **Ari**: Coordinación general del proyecto, desarrollo y estructuración de la lógica frontend, control de versiones mediante Git/GitHub y mejoras posteriores de optimización y diseño.
* **Cristian**: Desarrollo y estructuración de diseño del frontend, diseño de interfaces responsivas con Bootstrap e implementación de componentes dinámicos en la barra de navegación (Navbar).
* **Santiago**: Desarrollo y maquetación de la página principal de historias (1_Index.html), asegurando la correcta alineación y distribución de las secciones de contenido.
* **Joyce**: Participación en la definición de wireframes, diseño de la paleta de colores corporativa e integración de estilos globales (style.css).
* **Brandon**: Maquetación, estructura y diseño responsivo de la página de "Acerca de nosotros" (2_About.html).
* **Israel**: Desarrollo y diseño de la página de contacto (3_Contact.html), estructurando el formulario principal.
* **Ernesto**: Implementación de la lógica interactiva en JavaScript (6_Javascript.js) para el manejo de alertas dinámicas en el formulario de contacto.
* **Yazmin**: Diseño, desarrollo y estructuración del pie de página reutilizable (5_Footer.html).
* **Iran**: Pruebas de integración de componentes, validación de enlaces entre páginas y control de calidad (testing de responsividad en dispositivos móviles).

---

## 👥 Estructura del Sitio Web

El sitio consta de 3 páginas principales conectadas mediante una barra de navegación reutilizable:
1. **Página de Inicio (`index.html`)**: Contiene la presentación principal, historias de terror destacadas, y secciones laterales reservadas para futura publicidad y noticias.
2. **Quiénes Somos / About Us (`about.html`)**: Información sobre el equipo detrás del proyecto y el propósito del blog.
3. **Contacto / Contact Us (`contact.html`)**: Formulario interactivo de contacto con notificaciones de alerta en tiempo real.

---

## 🚀 ¿Cómo Ejecutar el Proyecto Localmente?

Sigue estos sencillos pasos para clonar y correr el proyecto en tu máquina:

1. **Clona el repositorio**
2. Abre la carpeta del proyecto en tu editor de código favorito (por ejemplo, Visual Studio Code o tu entorno en Replit).
3. Importante (Carga Asíncrona): Debido al uso de peticiones fetch() para cargar el Navbar y el Footer, te recomendamos abrir el proyecto utilizando un servidor local (como la extensión Live Server en VS Code) para evitar restricciones de seguridad CORS del navegador.
4. Abre el archivo 1_Index.html en tu navegador web.

---

## 💡 Aprendizajes Clave

**Modularización Frontend**: Comprendimos la gran ventaja de fragmentar componentes repetitivos (como el menú y el pie de página) para consumirlos mediante JavaScript, reduciendo la duplicidad de código.
**Manejo del DOM y Bootstrap**: Consolidamos el uso avanzado del sistema de rejillas de Bootstrap y la creación de elementos dinámicos interactivos mediante JavaScript nativo.
**Trabajo Colaborativo**: Experimentamos de primera mano la importancia de mantener una correcta comunicación y organización de ramas al fusionar código en equipo mediante Git.

---

## 🔮 Mejoras Futuras
Integración con Backend (Java Spring Boot): Conectar el formulario de contacto y el blog a una API RESTful desarrollada con Spring Boot y una base de datos MySQL para almacenar permanentemente las historias enviadas por los usuarios.
Sistema de Autenticación: Agregar un módulo de inicio de sesión para que los usuarios puedan registrarse, guardar sus historias favoritas y comentar en los relatos.
Modo Oscuro Nativo: Implementar un interruptor (toggle) para alternar entre el diseño actual y un modo nocturno extremo ideal para la temática del sitio.

