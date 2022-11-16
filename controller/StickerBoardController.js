'use strickt';
class StickerBoardController {
  #stickerBoardView = null;
  #stickerBoardCollection = null;
  constructor(container) {
    this.#stickerBoardView = new StickerBoardView({
      onDelete: (id) => this.deleteSticker(id),
      onAdd: () => this.addSticker(),
      onEdit: (id) => this.editSticker(id),
    });
    container.append(this.#stickerBoardView.el);

    this.#stickerBoardCollection = new StickerBoardCollection();
    this.#stickerBoardCollection
      .fetchList()
      .then(() =>
        this.#stickerBoardView.renderList(this.#stickerBoardCollection.list)
      );
  }

  deleteSticker(id) {
    this.#stickerBoardCollection.deleteSticker(id).then(() => {
      this.#stickerBoardView.renderList(this.#stickerBoardCollection.list);
    });
  }
  addSticker() {
    this.#stickerBoardCollection.createSticker().then(() => {
      this.#stickerBoardView.renderList(this.#stickerBoardCollection.list);
    });
  }
  editSticker(updateItem) {
    this.#stickerBoardCollection.updateSticker(updateItem).then(() => {
      this.#stickerBoardView.renderList(this.#stickerBoardCollection.list);
    });
  }
}
