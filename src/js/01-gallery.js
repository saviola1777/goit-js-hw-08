// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery')
const imgMarkup = galleryItems.map(imageGallery => 
`<a class="gallery__link" href=${imageGallery.original}>
<img class="gallery__image" src=${imageGallery.preview} alt=${imageGallery.description} /> </a>`).join("");
galleryEl.insertAdjacentHTML('beforeend', imgMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDeley: 250
   })
// console.log(galleryEl);
