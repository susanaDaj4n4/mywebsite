const hamburguerMenu = document.getElementById("hamburguer-menu");
const menuNav = document.querySelector(".header-nav");

hamburguerMenu.classList.add("hamburguer-menu-js-enabled");

function closeMenu() {
  hamburguerMenu.setAttribute("aria-expanded", "false");
  menuNav.setAttribute("aria-hidden", "true");
  menuNav.classList.add("hamburguerMenu-closed");
  menuNav.classList.remove("hamburguerMenu-opened");
  hamburguerMenu.classList.remove("hamburguer-menu-opened");
}

closeMenu();

hamburguerMenu.addEventListener("click", function (event) {
  event.stopPropagation(); // impede que o clique se propague para o document

  const expanded = this.getAttribute("aria-expanded") === "true";

  if (expanded) {
    closeMenu();
  } else {
    this.setAttribute("aria-expanded", "true");
    menuNav.setAttribute("aria-hidden", "false");
    menuNav.classList.remove("hamburguerMenu-closed");
    menuNav.classList.add("hamburguerMenu-opened");
    hamburguerMenu.classList.add("hamburguer-menu-opened");
  }
});

// Fechar ao clicar fora do menu
document.addEventListener("click", function (event) {
  if (
    !hamburguerMenu.contains(event.target) &&
    !menuNav.contains(event.target)
  ) {
    closeMenu();
  }
});
