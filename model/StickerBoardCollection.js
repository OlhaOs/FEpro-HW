class StickerBoardCollection {
  #api = null;
  list = [];

  constructor() {
    console.log('Model works');
    this.#api = new RestApi(
      'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/'
    );
  }
  fetchList() {
    return this.#api.getList().then((data) => (this.list = data));
  }
  deleteSticker(id) {
    return this.#api.delete(id).then(() => {
      this.list = this.list.filter((item) => item.id !== id);
    });
  }
  createSticker(data) {
    return this.#api.create(data).then((createSticker) => {
      this.list = [...this.list, createSticker];
    });
  }
  updateSticker(updateSticker) {
    return this.#api.update(updateSticker).then(() => {
      this.list = this.list.map((item) =>
        item.id === updateSticker.id ? updateSticker : item
      );
    });
  }
}
