function interpolate(template, obj) {
  for (key in obj) {
    template = template.replaceAll(`{{${key}}}`, obj[key]);
  }
  return template;
}
function htmlToElement(htlml) {
  const container = document.createElement('div');
  container.innerHTML = htlml;
  return container.children[0];
}
