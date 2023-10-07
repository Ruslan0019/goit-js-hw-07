import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const murkup = galleryItems.map(({ preview, original, description }) =>
    `
    <li class="gallery__item">
     <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
    </li>
     `
).join('');
gallery.insertAdjacentHTML('afterbegin', murkup)


  const gallerySimpleLightbox = new SimpleLightbox('.gallery a', {
      captions: true, 
      captionDelay: 250, 
      captionSelector: 'img', 
      captionsData: 'alt',
      captionPosition: 'outside',
      scrollZoom: false,
      captionClass: 'custom-caption'
      
  });
