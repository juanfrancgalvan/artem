fetch('source/scripts/pictures.json')
.then(response => response.json())
.then(data => {
  createGallery(data)
})

const body = document.querySelector('body')
const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const gallery = document.querySelector('.gallery-grid')
const links = document.querySelectorAll('.nav a')

function showMenu() { nav.classList.toggle('show') }
menu.addEventListener('click', showMenu)
for (let link of links) { link.addEventListener('click', showMenu) }

function createGallery(pictures) {
  for (let picture of pictures) {
    const image = document.createElement('img')
    image.src = picture.image
    image.alt = `${picture.name} Painting`
    image.width = '300'
    image.height = '200'
    image.loading = "lazy"
    gallery.appendChild(image)
    image.addEventListener('click', function showImage() {
      const overlay = document.createElement('div')
      const image = document.createElement('img')
      overlay.classList.add('overlay')
      image.src = picture.image
      image.alt = `${picture.name} Painting`
      image.width = '300'
      image.height = '200'
      image.loading = "lazy"
      body.appendChild(overlay)
      overlay.appendChild(image)
      overlay.addEventListener('click', function closeImage() { overlay.remove() })
    })
  }
}

window.sr = ScrollReveal()
sr.reveal('header', { origin: 'top', distance: '80px', duration: 2000 })
sr.reveal('.hero-shadow', { duration: 800 });
sr.reveal('.contact', { origin: 'bottom', distance: '100px', duration: 2000 });
sr.reveal('.footer', { delay: 1000 });