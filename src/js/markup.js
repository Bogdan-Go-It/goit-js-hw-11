export function createMarkup(arrayOfImgs = []) {
  return arrayOfImgs
    .map(
      ({
        webformatURL,
        largeImageURL,
        tag,
        likes,
        views,
        comments,
        downloads,
      }) => `
     <div class="photo-card">
     <a class = "gallery__link" href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tag}" loading="lazy" class="gallery__image" height="300" width="300"/>
    </a>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>`
    )
    .join('');
}
