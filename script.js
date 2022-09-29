const INVALID_INPUT = "invalid-data";
const DELETE_BUTTON = "deleteBtn";

const contactTemplate = document.querySelector("#contactTemplate").innerHTML;
const contactList = document.querySelector("#contact-List");
const contactSurname = document.querySelector("#surname");
const contactName = document.querySelector("#name");
const contactPhone = document.querySelector("#phone");
const addContactButtton = document.querySelector("#addContactButton");
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", onFormSubmit);
contactList.addEventListener("click", deleteContact);

function onFormSubmit(event) {
  event.preventDefault();

  if (!dataValidation()) {
    return;
  }
  const newContact = getContactValue();
  dataValidation(newContact);
  addNewContact(newContact);
  clearInput();
}
function getContactValue() {
  return {
    surname: contactSurname.value,
    name: contactName.value,
    phone: contactPhone.value,
  };
}
function addNewContact(contact) {
  const contactHtml = generateNewLineHtml(contact);
  contactList.insertAdjacentHTML("beforeend", contactHtml);
}

function generateNewLineHtml({ surname, name, phone }) {
  return contactTemplate
    .replaceAll("{surname}", surname)
    .replaceAll("{name}", name)
    .replaceAll("{phone}", phone);
}

function generateTdElement(value) {
  const tdELement = document.createElement("td");
  tdELement.textContent = value;
  return tdELement;
}

function dataValidation() {
  checkInputValidation();
  if (contactSurname.value.trim() === "") {
    contactSurname.classList.add(INVALID_INPUT);
    return false;
  }

  if (contactName.value.trim() === "") {
    contactName.classList.add(INVALID_INPUT);
    return false;
  }
  if (contactPhone.value.trim() === "") {
    contactPhone.classList.add(INVALID_INPUT);
    return false;
  }
  return true;
}

function checkInputValidation() {
  contactSurname.addEventListener("input", resetInputValidation);
  contactName.addEventListener("input", resetInputValidation);
  contactPhone.addEventListener("input", resetInputValidation);
}

function resetInputValidation() {
  contactSurname.classList.remove(INVALID_INPUT);
  contactName.classList.remove(INVALID_INPUT);
  contactPhone.classList.remove(INVALID_INPUT);
}

function deleteContact(event) {
  if (event.target.classList.contains(DELETE_BUTTON)) {
    event.target.parentElement.parentElement.remove();
  }
}
function clearInput() {
  contactSurname.value = "";
  contactName.value = "";
  contactPhone.value = "";
}
