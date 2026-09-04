
const alertPlaceholder = document.getElementById("contactoAlertPlaceholder");
const contactForm = document.getElementById("formularioContacto");

const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show mt-3 shadow-sm" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  // Limpia alertas previas para que solo aparezca una activa
  alertPlaceholder.innerHTML = "";
  alertPlaceholder.append(wrapper);
};

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Lanza la alerta con el texto requerido por la tarea
    appendAlert("¡Mensaje enviado con éxito!", "success");

    // Limpia las casillas del formulario
    contactForm.reset();
  });
}

// Contacto
document.addEventListener("DOMContentLoaded", function() {
    fetch("4_Navbar.html")
        .then(response => response.text())
        .then(html => { document.getElementById("espacio-navbar").innerHTML = html; })
        .catch(error => console.error("Error al cargar el navbar:", error));

    fetch("5_Footer.html")
        .then(response => response.text())
        .then(html => { document.getElementById("contenedor-footer").innerHTML = html; })
        .catch(error => console.error("Error al cargar el footer:", error));
});
 
// About
document.addEventListener("DOMContentLoaded", function() {
    fetch("4_Navbar.html")
        .then(response => response.text())
        .then(html => { document.getElementById("espacio-navbar").innerHTML = html; })
        .catch(error => console.error("Error al cargar el navbar:", error));

    fetch("5_Footer.html")
        .then(response => response.text())
        .then(html => { document.getElementById("contenedor-footer").innerHTML = html; })
        .catch(error => console.error("Error al cargar el footer:", error));
});

document.addEventListener("DOMContentLoaded", function() {
    // Cargar Navbar
    fetch("4_Navbar.html")
        .then(response => response.text())
        .then(html => { document.getElementById("espacio-navbar").innerHTML = html; })
        .catch(error => console.error("Error al cargar el navbar:", error));

    // Cargar Footer
    fetch("5_Footer.html")
        .then(response => response.text())
        .then(html => { document.getElementById("contenedor-footer").innerHTML = html; })
        .catch(error => console.error("Error al cargar el footer:", error));
});