class Accordion {
  static CLASSES = {
    ITEM: 'accordion-item',
    TITLE: 'accordion-title',
    ACTIVE: 'accordion-active',
  };
  static SELECTORS = {
    ACTIVE: '.accordion-active',
    TITLE: '.accordion-title',
  };

  #el = null;
  constructor(el) {
    this.#el = el;

    this.#bindEventListeners();
  }

  #bindEventListeners() {
    console.log(this.#el);
    this.#el.addEventListener('click', (e) => {
      if (e.target.classList.contains(Accordion.CLASSES.TITLE)) {
        e.target.parentElement.classList.toggle(Accordion.CLASSES.ACTIVE);
      }
    });
  }
}
