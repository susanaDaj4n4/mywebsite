document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", destacaMenu);

  const menu = document.querySelector(".header-nav");
  const links = [...menu.querySelectorAll("li a")];

  function destacaMenu() {
    let positions = links.map((link) => {
      let href = link.getAttribute("href");

      if (href.startsWith("#")) {
        let target = document.querySelector(href);
        if (target) {
          return target.getBoundingClientRect().top;
        } else {
          console.warn(`Elemento com href "${href}" não encontrado.`);
        }
      }
      return null;
    });

    let linkAtivo = pegaUltimoElementoAtivo(positions, links);

    let menuActived = menu.querySelector(".actived");
    if (menuActived) {
      menuActived.classList.remove("actived");
    }

    if (linkAtivo) {
      linkAtivo.classList.add("actived");
    }
  }

  function pegaUltimoElementoAtivo(positions, links) {
    let positionsAtivos = positions
      .map((pos, i) => ({ pos, i }))
      .filter(({ pos }) => pos !== null && pos < window.innerHeight / 2);

    if (positionsAtivos.length === 0) {
      return null;
    }

    let ultimoAtivo = positionsAtivos[positionsAtivos.length - 1];
    return links[ultimoAtivo.i];
  }

  destacaMenu();
});
