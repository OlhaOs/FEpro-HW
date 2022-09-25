const task = document.querySelector("#inputTask");
const saveTaskButton = document.querySelector("#saveTask");
const allTasksList = document.querySelector("#listTask");

saveTaskButton.addEventListener("click", onCreateNewTask);

function onCreateNewTask() {
  if (!validateData()) {
    return;
  }
  const newTask = getData();
  addTask(newTask);
  clearForm();
}

function validateData() {
  resetValidation();
  if (task.value === "") {
    task.classList.add("invalid-input");
    return false;
  } else return true;
}
function resetValidation() {
  task.classList.remove("invalid-input");
}

function getData() {
  return task.value;
}

function addTask(newTask) {
  const taskElement = generateTaskElement(newTask);
  allTasksList.append(taskElement);
}

function generateTaskElement(currentTask) {
  const liElement = document.createElement("li");
  liElement.append(currentTask);

  liElement.addEventListener("click", () => {
    liElement.classList.toggle("done-task");
  });

  return liElement;
}

function clearForm() {
  task.value = "";
}
