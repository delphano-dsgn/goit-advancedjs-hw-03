import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, createGallery, showLoader, hideLoader } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('#search-form');

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const formElement = event.currentTarget;
  const searchQuery = formElement.elements['search-text'].value.trim();

  if (searchQuery === '') {
    iziToast.warning({
      title: 'Увага',
      message: 'Будь ласка, введіть слово для пошуку!',
      position: 'topRight'
    });
    return;
  }

  clearGallery();
  
  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {
      hideLoader();

      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          messageColor: '#FAFAFB'
        });
        return; 
      }

      createGallery(data.hits);
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Помилка',
        message: 'Щось пішло не так. Спробуйте пізніше.',
        position: 'topRight'
      });
      console.error(error); 
    })
    .finally(() => {
      formElement.reset();
    });
}