export default function instagram(selector, gramImgs) {
  // ADD INSTAGRAM PHOTOS

  const gramsPhotos = document.querySelectorAll(selector);
  if (gramsPhotos.length === 0) {
    return;
  }

  // for every '.grams__photo' give it a background image from the gramImgs array
  gramsPhotos.forEach((item, index) => {
    item.style.backgroundImage = `url(${gramImgs[index].url})`;
    item.href = gramImgs[index].link;
  });
}
