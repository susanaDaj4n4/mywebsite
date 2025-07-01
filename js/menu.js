// menu.js
document.addEventListener("DOMContentLoaded", () => {
  const currentURL = window.location.href;

  const linkCursos = document.getElementById("linkCursos");

  if (currentURL.includes("cursos.html#Cursos")) {
    linkCursos.classList.add("active");
  }
});
