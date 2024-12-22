fetch('source/scripts/pictures.json')
.then(response => response.json())
.then(data => {
  createGallery(data)
})

function createGallery(pictures) {
  const gallery = document.querySelector('.gallery-grid')
  pictures.forEach(picture => {
    const image = document.createElement('img')
    image.src = picture.image
    image.alt = `${picture.name} Painting`
    image.width = '300'
    image.height = '200'
    image.loading = "lazy"
    gallery.appendChild(image)

    image.addEventListener('click', function showImage() {
      const body = document.querySelector('body')
      const overlay = document.createElement('div')
      overlay.classList.add('overlay')
      const image = document.createElement('img')
      image.src = picture.image
      image.alt = picture.name
      image.loading = "lazy"
      body.appendChild(overlay)
      overlay.appendChild(image)

      overlay.addEventListener('click', function closeImage() {
        overlay.remove()
      })
    })
  })
}

window.sr = ScrollReveal()
sr.reveal('header', { origin: 'top', distance: '80px', duration: 2000 })
sr.reveal('.hero-shadow', { duration: 800 });
sr.reveal('.contact', { origin: 'bottom', distance: '100px', duration: 2000 });
sr.reveal('.footer', { delay: 1000 });