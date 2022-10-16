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

//   show(index) {
//     this.#hideActive();
//     this.#titlesEl.children[index].classList.add(Accordion.CLASSES.ACTIVE);
//     this.#bodiesEl.children[index].classList.add(Accordion.CLASSES.ACTIVE);
//   }

//   #hideActive() {
//     const titleEl = this.#titlesEl.querySelector(Accordion.SELECTORS.ACTIVE);
//     if (titleEl) {
//       titleEl.classList.remove(Accordion.CLASSES.ACTIVE);
//     }

// #bindEventListeners() {
//     this.#titlesEl.addEventListener('click', (e) => {
//       if (e.target.classList.contains(Accordion.CLASSES.TITLE)) {
//         const index = +e.target.dataset.index;
//         this.show(index);
//       }
//     });

// class Accordion {
//   static CLASSES = {
//     CONTAINER: 'accordion-container',
//     TITLES: 'accordion-titles',
//     BODIES: 'accordion-bodies',
//     TITLE: 'accordion-title-extra',
//     ACTIVE: 'accordion-active',
//   };
//   static SELECTORS = {
//     TITLE: '.accordion-title',
//     ITEMBODY: '.accordion-item',
//     ACTIVE: '.accordion-active',
//   };

//   #el = null;
//   #titlesEl = null;
//   #bodiesEl = null;

//   constructor(el) {
//     this.#el = el;
//     this.#buildLayout();
//     this.#bindEventListeners();
//   }
//   #buildLayout() {
//     this.#el.classList.add(Accordion.CLASSES.CONTAINER);
//     this.#buildTitles();
//     this.#buildBodies();
//   }
//   #buildTitles() {
//     this.#titlesEl = document.createElement('div');
//     this.#titlesEl.classList.add(Accordion.CLASSES.TITLES);

//     // this.#el.append(this.#titlesEl);

//     const titles = this.#el.querySelectorAll(Accordion.SELECTORS.TITLE);

//     titles.forEach((element, index) => {
//       element.dataset.index = index;
//       element.classList.add(Accordion.CLASSES.TITLE);
//       this.#titlesEl.append(element);
//     });
//   }
//   #buildBodies() {
//     this.#bodiesEl = document.createElement('div');
//     this.#bodiesEl.classList.add(Accordion.CLASSES.BODIES);
//     // this.#el.append(this.#bodiesEl);

//     const bodies = this.#el.querySelectorAll(Accordion.SELECTORS.ITEMBODY);

//     bodies.forEach((element) => {
//       this.#bodiesEl.append(element);
//     });
//   }

//   #bindEventListeners() {
//     this.#titlesEl.addEventListener('click', (e) => {
//       if (e.target.classList.contains(Accordion.CLASSES.TITLE)) {
//         const index = +e.target.dataset.index;
//         this.show(index);
//       }
//     });
//   }

//   show(index) {
//     this.#hideActive();
//     this.#titlesEl.children[index].classList.add(Accordion.CLASSES.ACTIVE);
//     this.#bodiesEl.children[index].classList.add(Accordion.CLASSES.ACTIVE);
//   }

//   #hideActive() {
//     const titleEl = this.#titlesEl.querySelector(Accordion.SELECTORS.ACTIVE);
//     if (titleEl) {
//       titleEl.classList.remove(Accordion.CLASSES.ACTIVE);
//     }

//     const bodyEl = this.#bodiesEl.querySelector(Accordion.SELECTORS.ACTIVE);
//     if (bodyEl) {
//       bodyEl.classList.remove(Accordion.CLASSES.ACTIVE);
//     }
//   }
// }
