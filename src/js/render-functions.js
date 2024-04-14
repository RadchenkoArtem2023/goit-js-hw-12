import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const imgGallery = document.querySelector('.gallery');
export const imageTemplate = images => {
  const markup = images
    .map(
      image =>
        `<li class="gallery-item">
           <a class="gallery-link" href="${image.largeImageURL}">
             <img
               class="gallery-image"
               width="1280"
               height="152"
               src="${image.webformatURL}"
               data-source="${image.largeImageURL}"
               alt="${image.tags}"
             />
             </a>
             <ul class="gallery-description">
             <li><h3>Likes</h3><p>${image.likes}</p>
             </li>
             <li><h3>Views</h3><p>${image.views}</p>
               </li>
               <li><h3>Comments</h3><p>${image.comments}</p>
                 </li>
                 <li><h3>Downloads</h3><p>${image.downloads}</p>
                   </li>
             </ul>
           </li>`
    )
    .join('');

  imgGallery.insertAdjacentHTML('beforeend', markup);
  myGallery.refresh();
};
const myGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
  enableKeyboard: true,
  docClose: true,
});
