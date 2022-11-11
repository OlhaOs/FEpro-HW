new TodoController(document.querySelector('#todoList'));

function interpolate(template, obj) {
  for (key in obj) {
    template = template.replaceAll(`{{${key}}}`, obj[key]);
  }

  return template;
}

function htmlToElement(html) {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container.children[0];
}
