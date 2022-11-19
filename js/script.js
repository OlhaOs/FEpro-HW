const API_ULR = 'https://jsonplaceholder.typicode.com/photos?_limit=25';
const galleryTemplate = $('#galleryTemplate').html();
const $gallery = $('#imgGallery');
let galleryList = [];

fetchData();

function fetchData() {
  fetch(API_ULR)
    .then((resp) => resp.json())
    .then(renderList)
    .then(() => {
      $gallery.find('a').galleryPopUp();
    });
}

function renderList(list) {
  const photos = list.map(generateListHtml).join('');
  return $gallery.append(photos);
}

function generateListHtml(galleryList) {
  return interpolate(galleryTemplate, galleryList);
}

function interpolate(template, obj) {
  for (key in obj) {
    template = template.replaceAll(`{{${key}}}`, obj[key]);
  }
  return template;
}
