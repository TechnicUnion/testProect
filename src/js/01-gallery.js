// Add imports above this line
import { watchedItems, galleryItems } from './gallery-items';
// Change code below this line
import imagesCard from './templates/markup.hbs';

const gallery = document.querySelector('.gallery');
const addToWachedBtn = document.querySelector('.watch-list');
const addToQueueBtn = document.querySelector('.queue-list');
const queueBtn = document.querySelector('[data-queue-list]');
const wachedBtn = document.querySelector('[data-watch-list]');
const STORAGE_WATCHED_KEY = 'watched-film';
const STORAGE_QUEUE_KEY = 'queue-film';

addToWachedBtn.addEventListener('click', onAddToWachedBtnClick);
addToQueueBtn.addEventListener('click', onAddToQueueBtnClick);
wachedBtn.addEventListener('click', onWachedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);

createGalleryList(watchedItems);

function createGalleryList(filmItems) {
  gallery.innerHTML = imagesCard(filmItems);
}

function onAddToWachedBtnClick() {
  localStorage.setItem(STORAGE_WATCHED_KEY, JSON.stringify(watchedItems));
}

function onAddToQueueBtnClick() {
  localStorage.setItem(STORAGE_QUEUE_KEY, JSON.stringify(galleryItems));
}

function onWachedBtnClick() {
  if (!localStorage.getItem(STORAGE_WATCHED_KEY)) {
    gallery.innerHTML = `<div><p class='info-item'>You have not watched any movie </p><img src='https://cdn.pixabay.com/photo/2017/07/31/01/11/cinema-2556157__340.jpg' alt='screen' loading='lazy' /></a></div> 
  </div>`;
  } else {
    createGalleryList(JSON.parse(localStorage.getItem(STORAGE_WATCHED_KEY)));
  }
  toggleClassIsActive();
}

function onQueueBtnClick() {
  if (!localStorage.getItem(STORAGE_QUEUE_KEY)) {
    gallery.innerHTML = `<div><p class='info-item'>View queue is empty</p><img src='https://cdn.pixabay.com/photo/2017/07/31/01/11/cinema-2556157__340.jpg' alt='screen' loading='lazy' /></a></div> 
  </div>`;
  } else {
    createGalleryList(JSON.parse(localStorage.getItem(STORAGE_QUEUE_KEY)));
  }

  toggleClassIsActive();
}

function toggleClassIsActive() {
  wachedBtn.classList.toggle('is-active');
  queueBtn.classList.toggle('is-active');
}
