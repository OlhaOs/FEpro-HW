class TodoController {
  #todoListView = null;
  #todosCollection = null;
  #formView = null;
  newTask = {};

  constructor(table) {
    this.#todoListView = new TodoListView({
      onToggle: (id) => this.changeStateTask(id),
      onDelete: (id) => this.delete(id),
      onEdit: (id) => this.edit(id),
    });
    table.append(this.#todoListView.el);

    this.#todosCollection = new TodosCollection();

    this.#todosCollection
      .fetchList()
      .then(() => this.#todoListView.renderList(this.#todosCollection.list));

    this.#formView = new FormView({
      onSave: (newTask) => this.addTask(newTask),
      onGetFormValues: () => this.getFormValues(),
      onClearInput: () => this.clearInput(),
    });

    table.append(this.#formView.el);
  }

  changeStateTask(id) {
    this.#todosCollection.changeStateTask(id).then(() => {
      this.#todoListView.renderList(this.#todosCollection.list);
    });
  }
  delete(id) {
    this.#todosCollection.delete(id).then(() => {
      this.#todoListView.renderList(this.#todosCollection.list);
    });
  }
  addTask(newTask) {
    this.#todosCollection.addTask(newTask).then(() => {
      this.#todoListView.renderList(this.#todosCollection.list);
    });
  }
  getFormValues() {
    this.newTask = this.#todosCollection.getFormValues();
    return this.newTask;
  }
  clearInput() {
    this.#todosCollection.clearInput();
  }
}
