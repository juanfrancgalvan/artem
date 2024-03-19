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
createGallery()