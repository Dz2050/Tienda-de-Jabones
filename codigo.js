function flipImage(element) {
    element.classList.toggle('flipped');
}

document.querySelectorAll(".producto2-container").forEach((container) => {
    const extraInfo = container.querySelector(".extra");
    const showButton = container.querySelector(".show-info");
    const hideButton = container.querySelector(".hide-info");

    showButton.addEventListener("click", () => {
        extraInfo.classList.add("show");  // Muestra la tercera cara
    });

    hideButton.addEventListener("click", () => {
        extraInfo.classList.remove("show"); // Oculta la tercera cara
    });

    container.addEventListener("click", function () {
        // Si está en el frente, rota al reverso
        if (!container.style.transform || container.style.transform === "rotateY(0deg)") {
            container.style.transform = "rotateY(180deg)";
        } else {
            container.style.transform = "rotateY(0deg)"; // Vuelve al frente
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


//////  Este parrafo de codigo funciona para cualquier contenido
document.addEventListener("DOMContentLoaded", function () {
    const currentVersion = "1.0.1"; // Cambiar este número en cada actualización para que el navegador detecte los cambios
    const storedVersion = localStorage.getItem("siteVersion");

    if (storedVersion !== currentVersion) {
        localStorage.setItem("siteVersion", currentVersion);
        location.reload(true); // Recarga la página con la nueva versión para el usuario
    }
});
