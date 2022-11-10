class TodoController {
  #todoListView = null;
  #todosCollection = null;
  #formView = null;

  constructor(table) {
    this.#todoListView = new TodoListView({
      onToggle: (id) => this.changeStateTask(id),
      onDelete: (id) => this.delete(id),
    });
    table.append(this.#todoListView.el);

    this.#todosCollection = new TodosCollection();

    this.#todosCollection
      .fetchList()
      .then(() => this.#todoListView.renderList(this.#todosCollection.list));

    this.#formView = new FormView({
      onSave: (newTask) => this.addTask(newTask),
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
}
