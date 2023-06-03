// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryItemsEl = document.querySelector('.gallery');
function initGallery(items) {
    return items.map((item) =>
        `<li class="gallery__item">
   <a class="gallery__link" 
   href ="${item.original}">
   <img
   class="gallery__image" 
   src="${item.preview}"
   alt="${item.description}"/></a></li>`).join(" ");
};
const addGalleryItems = initGallery(galleryItems);
galleryItemsEl.innerHTML = addGalleryItems;

let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    nav: true,
    captionsData: "alt",
    enableKeyboard: true,
    close: true,
});
console.log(lightbox);