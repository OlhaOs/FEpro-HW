class TodosCollection {
  #api = null;
  list = [];

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

  getItem(id) {
    return this.list.find((item) => item.id === id);
  }

  save(task) {
    if (task.id) {
      return this.update(task);
    } else {
      return this.addTask(task);
    }
  }
  addTask(newTask) {
    return this.#api.create(newTask).then((data) => {
      this.list = [...this.list, data];
    });
  }
  update(updatedItem) {
    return this.#api.update(updatedItem).then((data) => {
      this.list = this.list.map((item) =>
        item.id === updatedItem.id ? data : item
      );
    });
  }
}
