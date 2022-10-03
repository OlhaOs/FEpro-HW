const DELETE_BUTTON = "delete-btn";
const EDIT_BUTTON = "edit-btn";
const TASK_ITEM_CLASS = ".tasks-item";
const INVALID_CLASS = "invalid-input";
const CURRENT_TASK_CLASS = "current-task";

const tasksList = document.querySelector("#tasks-List");
const taskTemplate = document.querySelector("#taskTemplate").innerHTML;
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#taskInput");
const idInput = document.querySelector("#taskId");

// let list = [];

let list = [
  { id: 1, task: "do current home work", state: false },
  { id: 2, task: "do relax relax relax relax", state: false },
  { id: 3, task: "do current home work", state: false },
  { id: 4, task: "do relax relax relax relax", state: false },
];

taskForm.addEventListener("submit", onFormSubmmit);
tasksList.addEventListener("click", onTaskElementClick);
taskInput.addEventListener("input", onFormInput);

init();

function init() {
  renderList(list);
}

function onFormSubmmit(e) {
  e.preventDefault();

  if (!dataValidation()) {
    return;
  }
  const newTask = getFormValues();
  saveTask(newTask);
  clearInput();
}

function onTaskElementClick(e) {
  const taskId = getTasksId(e.target);

  if (e.target.classList.contains(DELETE_BUTTON)) {
    deleteTask(taskId);
  }
  if (e.target.classList.contains(EDIT_BUTTON)) {
    editTask(taskId);
  }
  if (e.target.classList.contains(CURRENT_TASK_CLASS)) {
    changeStateTask(taskId);
  }
}

function onFormInput(e) {
  dataValidation(e.target);
}

function renderList(list) {
  tasksList.innerHTML = list.map(generateListHtml).join("");
}

function generateListHtml({ id, task, state }) {
  return taskTemplate
    .replaceAll("{{id}}", id)
    .replaceAll("{{task}}", task)
    .replaceAll("{{state}}", state);
}

function getFormValues() {
  return {
    id: +idInput.value,
    task: taskInput.value,
    state: false,
  };
}
function fillInputValue({ id, task, state }) {
  idInput.value = id;
  taskInput.value = task;
  state.value = state;
}

function clearInput() {
  idInput.value = "";
  taskInput.value = "";
}
function getTasksId(elem) {
  return +elem.closest(TASK_ITEM_CLASS).dataset.taskId;
}

function saveTask(task) {
  if (task.id === 0) {
    addTask(task);
  } else {
    updateTask(task);
  }
}
function addTask(newtask) {
  newtask.id = Date.now();
  list.push(newtask);
  renderList(list);
}
function updateTask(task) {
  list = list.map((item) => (item.id === task.id ? task : item));
  renderList(list);
}

function deleteTask(id) {
  list = list.filter((item) => item.id !== id);
  renderList(list);
}

function editTask(id) {
  const task = list.find((item) => item.id === id);
  fillInputValue(task);
}
function changeStateTask(id) {
  const task = list.find((item) => item.id === id);
  checkStateTask(task);
  renderList(list);
}

function checkStateTask(task) {
  if (task.state === true) {
    task.state = false;
  } else {
    task.state = true;
  }
}
function dataValidation() {
  resetValidation();
  if (taskInput.value.trim() === "") {
    taskInput.classList.add(INVALID_CLASS);
    return false;
  }
  return true;
}
function resetValidation() {
  taskInput.classList.remove(INVALID_CLASS);
}
