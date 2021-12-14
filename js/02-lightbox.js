import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = (selector) => document.querySelector(selector);
const galleryAll = (selector) => document.querySelectorAll(selector);


const galleryEle = gallery(".gallery");
console.log(galleryEle);

const images = galleryItems
    .map(item =>
        `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>`
    
    )
    .join("");

galleryEle.insertAdjacentHTML("afterbegin", images);
console.log(images);

let lightbox = new SimpleLightbox(`.gallery a`, {
    captionsData: "alt",
    captionsDelay: 250
});
