'use strickt';
class StickerBoardController {
  #StickerBoardView = null;
  #StickerBoardCollection = null;
  constructor(container) {
    this.#StickerBoardView = new StickerBoardView({
      onDelete: (id) => this.deleteSticker(id),
      onAdd: (newSticker) => this.addSticker(newSticker),
      onEdit: (id) => this.editSticker(id),
    });
    container.append(this.#StickerBoardView.el);

    this.#StickerBoardCollection = new StickerBoardCollection();
    this.#StickerBoardCollection
      .fetchList()
      .then(() =>
        this.#StickerBoardView.renderList(this.#StickerBoardCollection.list)
      );
    console.log('Controller works');
  }

  deleteSticker(id) {
    this.#StickerBoardCollection.deleteSticker(id).then(() => {
      this.#StickerBoardView.renderList(this.#StickerBoardCollection.list);
    });
  }
  addSticker(newSticker) {
    this.#StickerBoardCollection.createSticker(newSticker).then(() => {
      this.#StickerBoardView.renderList(this.#StickerBoardCollection.list);
    });
  }
  editSticker(updateItem) {
    this.#StickerBoardCollection.updateSticker(updateItem).then(() => {
      this.#StickerBoardView.renderList(this.#StickerBoardCollection.list);
    });
  }
}
