class TodosCollection {
  static CLASSES = {
    INVALID_CLASS: 'invalid-input',
  };

  #api = null;
  list = [];
  taskInput = document.querySelector('#taskInput');
  saveButton = document.getElementById('#saveButton');

  constructor() {
    this.#api = new RestApi(
      'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/'
    );
  }
  fetchList() {
    return this.#api.getList().then((data) => (this.list = data));
  }

  changeStateTask(id) {
    const item = this.list.find((item) => item.id === id);
    const updatedItem = {
      ...item,
      isDone: !item.isDone,
    };
    return this.#api.update(updatedItem).then(() => {
      this.list = this.list.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
    });
  }

  delete(id) {
    return this.#api.delete(id).then(() => {
      this.list = this.list.filter((item) => item.id !== id);
    });
  }

  getFormValues() {
    return { title: taskInput.value, isDone: false };
  }

  addTask(newTask) {
    if (!this.dataValidation()) {
      return this.fetchList();
    } else {
      newTask = this.getFormValues();
      return this.#api.create(newTask).then((data) => {
        this.list = [...this.list, data];
      });
    }
  }

  clearInput() {
    taskInput.value = '';
  }
  dataValidation() {
    this.resetValidation();
    if (taskInput.value.trim() === '') {
      taskInput.classList.add(TodosCollection.CLASSES.INVALID_CLASS);
      return false;
    }
    return true;
  }

  resetValidation() {
    taskInput.classList.remove(TodosCollection.CLASSES.INVALID_CLASS);
  }
}
