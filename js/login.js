const menuIcon = document.getElementById('hamburguer-menu')
const nav = document.querySelector('.header-nav')

menuIcon.addEventListener('click', function (e) {
  e.preventDefault()
  const isOpen = nav.classList.contains('hamburguerMenu-opened')
  nav.classList.toggle('hamburguerMenu-opened', !isOpen)
  this.setAttribute('aria-expanded', String(!isOpen))
})
