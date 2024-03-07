const pictures = [
  {
    "name": "Abstract",
    "image": "/build/assets/images/paint1.webp",
    "original": "/source/assets/images/paint1.jpg"
  },
  {
    "name": "Texture",
    "image": "/build/assets/images/paint2.webp",
    "original": "/source/assets/images/paint2.jpg"
  },
  {
    "name": "Eyes",
    "image": "/build/assets/images/paint3.webp",
    "original": "/source/assets/images/paint3.jpg"
  },
  {
    "name": "Archeology",
    "image": "/build/assets/images/paint4.webp",
    "original": "/source/assets/images/paint4.jpg"
  },
  {
    "name": "Angel",
    "image": "/build/assets/images/paint5.webp",
    "original": "/source/assets/images/paint5.jpg"
  },
  {
    "name": "Field",
    "image": "/build/assets/images/paint6.webp",
    "original": "/source/assets/images/paint6.jpg"
  },
  {
    "name": "Religion",
    "image": "/build/assets/images/paint7.webp",
    "original": "/source/assets/images/paint7.jpg"
  },
  {
    "name": "Peace",
    "image": "/build/assets/images/paint8.webp",
    "original": "/source/assets/images/paint8.jpg"
  },
  {
    "name": "War",
    "image": "/build/assets/images/paint9.webp",
    "original": "/source/assets/images/paint9.jpg"
  }
]

function createGallery() {
  const gallery = document.querySelector('.gallery-grid')
  pictures.forEach(picture => {
    const image = document.createElement('img')
    image.src = picture.image
    image.alt = `${picture.name} Painting`
    image.loading = "lazy"
    gallery.appendChild(image)

    image.addEventListener('click', function showImage() {
      const body = document.querySelector('body')
      const overlay = document.createElement('div')
      overlay.classList.add('overlay')
      const image = document.createElement('img')
      image.src = picture.original
      image.alt = picture.name
      image.loading = "lazy"
      body.appendChild(overlay)
      overlay.appendChild(image)

      image.addEventListener('click', function closeImage() {
        overlay.remove()
      })
    })
  })
}
createGallery()