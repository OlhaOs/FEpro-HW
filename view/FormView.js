class FormView {
  #config = null;
  el = null;
  #form = null;

  static CLASSES = {
    INVALID_CLASS: 'invalid-input',
  };

  static todoFormTemplate = `
  <div>
    <form id="task-form">
        <input type="hidden" name="taskId">
        <input type="text" name='title' class="input-field" placeholder="Enter your task">
        <button type="submit" class="btn saveBtn">Save</button>
    </form>
    </div>`;

  // taskInput = document.querySelector('#taskInput');
  // idInput = document.querySelector('#taskId');

  constructor(config) {
    this.#config = config;
    this.#initView();
  }
  #initView() {
    this.el = htmlToElement(FormView.todoFormTemplate);

    this.#form = this.el.querySelector('form');

    // const todoForm = document.createElement('form');
    // todoForm.id = 'task-form';

    // const rowInputId = document.createElement('input');
    // rowInputId.type = 'hidden';
    // rowInputId.id = 'taskId';

    // const rowInputTask = document.createElement('input');
    // rowInputTask.type = 'text';
    // rowInputTask.className = 'input-field';
    // rowInputTask.id = 'taskInput';
    // rowInputTask.placeholder = 'Enter your task';

    // const saveBtn = document.createElement('button');
    // saveBtn.type = 'submit';
    // saveBtn.className = 'btn';
    // saveBtn.id = 'saveButton';
    // saveBtn.innerText = 'Save';

    // todoForm.append(rowInputId);
    // todoForm.append(rowInputTask);
    // todoForm.append(saveBtn);

    this.el.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!this.dataValidation()) {
        return;
      }

      const newTask = this.getFormValues();
      this.addTask(newTask);
      this.clearinput();
    });
  }
  getFormValues() {
    return {
      id: this.#form.elements.taskId.value,
      title: this.#form.elements.title.value,
    };
  }
  fillInput({ id, title }) {
    this.#form.elements.taskId.value = id;
    this.#form.elements.title.value = title;
  }

  addTask(newTask) {
    this.#config.onSave(newTask);
  }

  clearinput() {
    this.#form.reset();
  }

  dataValidation() {
    this.resetValidation();
    if (this.#form.elements.title.value.trim() === '') {
      this.#form.elements.title.classList.add(FormView.CLASSES.INVALID_CLASS);
      return false;
    }
    return true;
  }

  resetValidation() {
    this.#form.elements.title.classList.remove(FormView.CLASSES.INVALID_CLASS);
  }
}
