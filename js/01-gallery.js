import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const murkup = galleryItems.map(({ preview, original, description }) =>
    `   <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>   `
).join('');
gallery.insertAdjacentHTML('afterbegin', murkup)

gallery.addEventListener('click', onImageClick)
function onImageClick(ev) {
    ev.preventDefault();
     if (ev.target.nodeName !== 'IMG') {
        return    
    }
        const instance = basicLightbox.create(
            `<img src="${ev.target.dataset.source}" alt="${ev.target.alt}" width="800" height="600" />`
        );

    instance.show();
    
    gallery.addEventListener("keydown", (ev) => {
        if (ev.key === "Escape") {
            instance.close();
        }
    });
         
}
