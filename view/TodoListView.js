class TodoListView {
  static CLASSES = {
    DONE_ITEM_CLASS: 'done',
    DELETE_BUTTON: 'delete-btn',
    EDIT_BUTTON: 'edit-btn',
    CURRENT_TASK_CLASS: 'current-task',
  };

  static SELECTORS = {
    TASK_ITEM_CLASS: '.tasks-item',
  };

  static todoListContainerTemplate = `
    <table>
        <tbody id="tasks-List"></tbody>
    </table>`;

  static todoItemTemplate = `    
    <tr class="tasks-item" data-task-id="{{id}}">
        <td class="current-task {{doneClass}}" >{{title}}</td> 
 
        <td> <button type="button" class="delete-btn btn">Delete</button></td>
    </tr>`;

  static getTasksId(elem) {
    return elem.closest(TodoListView.SELECTORS.TASK_ITEM_CLASS).dataset.taskId;
  }

  static generateListHtml(todo) {
    return interpolate(TodoListView.todoItemTemplate, todo).replaceAll(
      `{{doneClass}}`,
      todo.isDone ? TodoListView.CLASSES.DONE_ITEM_CLASS : ''
    );
  }

  el = null;
  #config = null;

  constructor(config) {
    this.#config = config;
    this.#initView();
  }

  #initView() {
    const table = document.createElement('table');

    const tbody = document.createElement('tbody');
    tbody.id = 'tasks-List';

    table.append(tbody);

    table.addEventListener('click', (e) => {
      const taskId = TodoListView.getTasksId(e.target);

      if (e.target.classList.contains(TodoListView.CLASSES.DELETE_BUTTON)) {
        this.deleteTask(taskId);
      }
      if (
        e.target.classList.contains(TodoListView.CLASSES.CURRENT_TASK_CLASS)
      ) {
        this.changeStateTask(taskId);
      }
    });

    this.el = table;
  }
  renderList(list) {
    this.el.children[0].innerHTML = list
      .map(TodoListView.generateListHtml)
      .join('');
  }
  changeStateTask(id) {
    this.#config.onToggle(id);
  }
  deleteTask(id) {
    this.#config.onDelete(id);
  }
}
