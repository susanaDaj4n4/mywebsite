(() => {
  const header = document.querySelector('.header-container');
  const nav = document.getElementById('header-nav');
  const toggle = document.getElementById('hamburguer-menu');
  const THRESHOLD = 10; // px de scroll para passar a hamburguer

  const setOpen = (open) => {
    nav.classList.toggle('hamburguerMenu-opened', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Fecha ao clicar numa ligação, fora do cabeçalho, ou com Esc
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('click', (e) => { if (!header.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { setOpen(false); toggle.focus(); }
  });

  // Compacta ao fazer scroll
  let ticking = false;
  const update = () => {
    const scrolled = window.scrollY > THRESHOLD;
    if (scrolled !== header.classList.contains('is-scrolled')) {
      header.classList.toggle('is-scrolled', scrolled);
      setOpen(false);
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  update();
})();