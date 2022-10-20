const tasksList = document.querySelector('#tasks-List');
const taskTemplate = document.querySelector('#taskTemplate').innerHTML;

let list = [];

init();

function init() {
  fetchData();
  renderList(list);
}
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/todos').then((resp) => {
    resp.json().then((data) => {
      list = data;
      renderList(list);
    });
  });
}
function renderList(list) {
  tasksList.innerHTML = list.map(generateListHtml).join('');
}

function generateListHtml({ id, title, completed }) {
  return taskTemplate
    .replaceAll('{{id}}', id)
    .replaceAll('{{task}}', title)
    .replaceAll('{{state}}', completed);
}
