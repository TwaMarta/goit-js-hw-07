import { galleryItems } from './gallery-items.js';

// Change code below this line

const qs = (selector) => document.querySelector(selector);
const galleryGrid = qs(".gallery")
const prev = galleryItems.map(prev=>prev.preview);
const oryg = galleryItems.map(org=>org.original);
const desc = galleryItems.map(des=>des.description);
let galleryMarkup = "";
for (let i = 0; i<prev.length; i++){
galleryMarkup+=`<div class="gallery__item">
<a class="gallery__link" href="${oryg[i]}">
  <img
    class="gallery__image"
    src="${prev[i]}"
    data-source="${oryg[i]}"
    alt="${desc[i]}"
  />
</a>
</div>`}
galleryGrid.insertAdjacentHTML("beforeend", galleryMarkup);
function instance(event){
event.preventDefault();
const imageSource = event.target.dataset.source
let moddal = basicLightbox.create(`
<img src="${imageSource}"/>
`);
moddal.show();
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        moddal.close()
    }
  })
}
galleryGrid.addEventListener("click", instance);

