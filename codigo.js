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

