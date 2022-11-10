class FormView {
  static CLASSES = {
    INVALID_CLASS: 'invalid-input',
  };

  static todoFormTemplate = `
    <form id="task-form">
        <input type="hidden" id="taskId">
        <input type="text" class="" id="taskInput" placeholder="Enter your task">
        <button type="submit" class="btn" id="saveButton">Save</button>
    </form>`;

  #config = null;
  el = null;
  taskInput = document.querySelector('#taskInput');

  constructor(config) {
    this.#config = config;
    this.#initView();
  }
  #initView() {
    const todoForm = document.createElement('form');
    todoForm.id = 'task-form';

    const rowInputId = document.createElement('input');
    rowInputId.type = 'hidden';
    rowInputId.id = 'taskId';

    const rowInputTask = document.createElement('input');
    rowInputTask.type = 'text';
    rowInputTask.className = 'input-field';
    rowInputTask.id = 'taskInput';
    rowInputTask.placeholder = 'Enter your task';

    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.className = 'btn';
    saveBtn.id = 'saveButton';
    saveBtn.innerText = 'Save';

    todoForm.append(rowInputId);
    todoForm.append(rowInputTask);
    todoForm.append(saveBtn);

    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!this.dataValidation()) {
        return;
      }
      const newTask = this.getFormValues();
      this.addTask(newTask);
      this.clearinput();
    });

    this.el = todoForm;
  }
  getFormValues() {
    return { title: taskInput.value, isDone: false };
  }

  addTask(newTask) {
    this.#config.onSave(newTask);
  }

  clearinput() {
    taskInput.value = '';
  }

  dataValidation() {
    this.resetValidation();
    if (taskInput.value.trim() === '') {
      taskInput.classList.add(FormView.CLASSES.INVALID_CLASS);
      return false;
    }
    return true;
  }

  resetValidation() {
    taskInput.classList.remove(FormView.CLASSES.INVALID_CLASS);
  }
}
