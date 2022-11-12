const DELETE_BUTTON = 'pin-picture-delete';
const STICKER_ITEM = '.note';
const FIELD_ITEM = 'enter-note';

const stickersListTemplate =
  document.querySelector('#stickerTemplate').innerHTML;
const board = document.querySelector('.board');
const addSticker = document.querySelector('.add-note');

const stickersApi = new RestApi(
  'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/'
);
let stickersList = [];

addSticker.addEventListener('click', onAddButton);
board.addEventListener('change', onClickOnBoard);
board.addEventListener('click', onDeleteClickOnBoard);

init();

function init() {
  fetchData();
  renderList(stickersList);
}
function fetchData() {
  stickersApi.getList().then((data) => {
    stickersList = data;
    renderList(stickersList);
  });
}

function renderList(list) {
  board.innerHTML = list.map(generateListHtml).join('');
}
function generateListHtml(stickersList) {
  return interpolate(stickersListTemplate, stickersList);
}

function interpolate(template, obj) {
  for (key in obj) {
    template = template.replaceAll(`{{${key}}}`, obj[key]);
  }
  return template;
}

function onAddButton(sticker) {
  sticker.description = '';
  stickersApi.create(sticker).then((data) => {
    stickersList = [...stickersList, data];
    renderList(stickersList);
  });
}

function onDeleteClickOnBoard(e) {
  if (e.target.classList.contains(DELETE_BUTTON)) {
    const stickerId = getStickerId(e.target);
    deleteSticker(stickerId);
  }
}
function getStickerId(elem) {
  return elem.closest(STICKER_ITEM).dataset.stickerId;
}

function onClickOnBoard(e) {
  if (e.target.classList.contains(FIELD_ITEM)) {
    const stickerId = getStickerId(e.target);
    const sticker = editSticker(stickerId);

    const updateSticker = {
      ...sticker,
      description: e.target.value,
    };

    updateStickerItem(updateSticker);
  }
}
function editSticker(id) {
  return stickersList.find((item) => item.id === id);
}
function updateStickerItem(updateItem) {
  stickersApi.update(updateItem).then(() => {
    stickersList = stickersList.map((item) =>
      item.id === updateItem.id ? updateItem : item
    );
    renderList(stickersList);
  });
}

function deleteSticker(id) {
  stickersApi.delete(id).then(() => {
    stickersList = stickersList.filter((item) => item.id !== id);
    renderList(stickersList);
  });
}
