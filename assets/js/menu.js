const menuButtonImage = document.getElementById("menu-button-image");
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("u-hidden");

    if (menuButtonImage.getAttribute("src").includes("./assets/images/icon-close.svg")) {
        menuButtonImage.src = "./assets/images/icon-menu.svg";
    } else {
        menuButtonImage.src = "./assets/images/icon-close.svg";
    }

    if (menuButton.getAttribute("aria-expanded") == "true") {
        menuButton.setAttribute("aria-expanded", "false");
    } else {
        menuButton.setAttribute("aria-expanded", "true");
    }

    overlay.classList.toggle("u-hidden");
});
