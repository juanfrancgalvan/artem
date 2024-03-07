const pictures = [
  {
    "name": "gallery1",
    "image": "/build/assets/images/gallery1.webp"
  },
  {
    "name": "gallery2",
    "image": "/build/assets/images/gallery2.webp"
  },
  {
    "name": "gallery3",
    "image": "/build/assets/images/gallery3.webp"
  },
  {
    "name": "gallery4",
    "image": "/build/assets/images/gallery4.webp"
  },
  {
    "name": "gallery5",
    "image": "/build/assets/images/gallery5.webp"
  },
  {
    "name": "gallery6",
    "image": "/build/assets/images/gallery6.webp"
  },
]

function createGallery() {
  const gallery = document.querySelector('.gallery-grid')
  pictures.forEach(picture => {
    const image = document.createElement('img')
    image.src = picture.image
    image.alt = picture.name
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

      image.addEventListener('click', function closeImage() {
        overlay.remove()
      })
    })
  })
}
createGallery()