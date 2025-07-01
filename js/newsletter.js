(function () {
  "use strict";

  function handleNewsletterForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById("txtName");
    const emailInput = document.getElementById("newsletter-email");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Validação simples
    if (name === "") {
      alert("Por favor, coloque o seu nome.");
      nameInput.focus();
      return;
    }

    if (email === "" || !validateEmail(email)) {
      alert("Por favor, coloque um email válido.");
      emailInput.focus();
      return;
    }

    // Simula envio e mostra feedback de sucesso
    mostrarFeedback(true);

    // Limpa os campos
    nameInput.value = "";
    emailInput.value = "";
  }

  // Validação simples de email
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Mostra feedback conforme sucesso ou erro
  function mostrarFeedback(sucesso) {
    const feedback = document.getElementById("newsletterFeedback");
    const erro = document.getElementById("newsletterError");

    if (sucesso) {
      feedback.classList.add("active");
      erro.classList.remove("active");
    } else {
      feedback.classList.remove("active");
      erro.classList.add("active");
    }
  }

  // Liga o submit ao formulário
  document
    .getElementById("newsletter")
    .addEventListener("submit", handleNewsletterForm);
})();
