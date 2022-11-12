class StickerBoardView {
  static CLASSES = {
    DELETE_BUTTON: 'pin-picture-delete',
    FIELD_ITEM: 'enter-note',
    ADD_ITEM: 'pin-picture-add',
  };
  static SELECTORS = {
    STICKER_ITEM: '.note',
  };

  static stickerBoardContainerTemplate = `
    <section class="container">
        <div class="addBtn">
            <button class="add-note">
                <img class="pin-picture-add" src="./image/Pin-PNG-Photo.png" alt="add note">
                <img class="pin-picture-add" src="./image/Pin-PNG-Photo.png" alt="add note">
                <img class="pin-picture-add" src="./image/Pin-PNG-Photo.png" alt="add note">
            </button>
        </div>
        
        <div class="board"></div>
    </section>`;

  static stickersItemTemplate = `
    <form class="note" data-sticker-id="{{id}}">
        <button type="button" class="delete-note">
            <img class="pin-picture-delete" src="./image/clipart1927234.png"
            alt="delete note">
        </button>
        <textarea name="noteName" class="enter-note" rows="5">{{description}}</textarea>
    </form>`;

  static generateStickerItemHtml(sticker) {
    return interpolate(StickerBoardView.stickersItemTemplate, sticker);
  }
  static getStickerId(elem) {
    return elem.closest(StickerBoardView.SELECTORS.STICKER_ITEM).dataset
      .stickerId;
  }

  el = null;
  #config = null;
  #form = null;
  constructor(config) {
    this.#config = config;
    this.initView();
  }

  initView() {
    const board = htmlToElement(StickerBoardView.stickerBoardContainerTemplate);
    this.el = board;

    board.addEventListener('click', (e) => {
      if (e.target.classList.contains(StickerBoardView.CLASSES.DELETE_BUTTON)) {
        const stickerId = StickerBoardView.getStickerId(e.target);
        this.deleteSticker(stickerId);
      }
      if (e.target.classList.contains(StickerBoardView.CLASSES.ADD_ITEM)) {
        const newSticker = {
          description: '',
        };
        this.addSticker(newSticker);
      }
    });
    board.addEventListener('change', (e) => {
      const stickerId = StickerBoardView.getStickerId(e.target);
      const updateSticker = {
        id: stickerId,
        description: e.target.value,
      };
      this.updateStickerItem(updateSticker);
    });
  }

  renderList(list) {
    this.el.children[1].innerHTML = list
      .map(StickerBoardView.generateStickerItemHtml)
      .join('');
  }

  deleteSticker(id) {
    this.#config.onDelete(id);
  }

  addSticker(newSticker) {
    this.#config.onAdd(newSticker);
  }
  updateStickerItem(id) {
    this.#config.onEdit(id);
  }
}
