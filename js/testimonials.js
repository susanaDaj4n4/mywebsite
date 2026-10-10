document.body.classList.replace('no-js', 'js')

function setupTestimonials(config) {
  const wrapper = document.querySelector(config.wrapper)
  if (!wrapper) return

  const originals = Array.from(wrapper.querySelectorAll(config.items))
  if (originals.length === 0) return

  const large = window.matchMedia('(min-width: 90em)')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  const SPEED = 60 // px por segundo (ecrã grande)
  const DELAY = 4000 // ms entre testemunhos (ecrã pequeno)

  let clones = []
  let looping = false
  let paused = false

  // ----- Ecrã grande: carrossel contínuo -----
  function enableLoop() {
    if (looping) return
    looping = true
    wrapper.classList.add('js-enable')

    clones = originals.map((item) => {
      const clone = item.cloneNode(true)
      clone.setAttribute('aria-hidden', 'true')
      wrapper.appendChild(clone)
      return clone
    })

    // Distância real = onde começa o primeiro clone
    const distance = clones[0].offsetLeft - originals[0].offsetLeft
    wrapper.style.setProperty('--qtd', originals.length)
    wrapper.style.setProperty('--slide-distance', `${distance}px`)
    wrapper.style.animationDuration = `${distance / SPEED}s`
  }

  function disableLoop() {
    if (!looping) return
    looping = false
    clones.forEach((clone) => clone.remove())
    clones = []
    wrapper.classList.remove('js-enable')
    wrapper.style.removeProperty('--qtd')
    wrapper.style.removeProperty('--slide-distance')
    wrapper.style.removeProperty('animation-duration')
  }

  function update() {
    if (large.matches) enableLoop()
    else disableLoop()
  }

  large.addEventListener('change', update)
  update()

  // ----- Ecrã pequeno: avança sozinho -----
  function next() {
    if (paused || large.matches || reduceMotion.matches) return
    const figure = wrapper.querySelector('figure')
    if (!figure) return
    const step = figure.getBoundingClientRect().width
    const max = wrapper.scrollWidth - wrapper.clientWidth
    if (wrapper.scrollLeft >= max - 5) {
      wrapper.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      wrapper.scrollBy({ left: step, behavior: 'smooth' })
    }
  }

  ;['pointerdown', 'touchstart', 'mouseenter', 'focusin'].forEach((e) =>
    wrapper.addEventListener(e, () => (paused = true), { passive: true }),
  )
  ;['pointerup', 'touchend', 'mouseleave', 'focusout'].forEach((e) =>
    wrapper.addEventListener(e, () => (paused = false), { passive: true }),
  )

  setInterval(next, DELAY)
}

setupTestimonials({
  wrapper: '.testimonials__carroussel__wrapper',
  items: 'figure',
})
