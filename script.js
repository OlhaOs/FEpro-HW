// const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

const INVALID_INPUT = 'invalid-data';
const DELETE_BUTTON = 'deleteBtn';
const EDIT_BUTTON = 'editBtn';
const CONTACT_ITEM_CLASS = '.contact-item';

const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const contactList = document.querySelector('#contact-List');
const contactSurname = document.querySelector('#surname');
const contactName = document.querySelector('#name');
const contactEmail = document.querySelector('#email');
const addContactButtton = document.querySelector('#addContactButton');
const contactForm = document.querySelector('#contactForm');
const idInput = document.querySelector('#idContact');

const contactApi = new RestApi(
  'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/'
);

contactForm.addEventListener('submit', onFormSubmit);
contactList.addEventListener('click', onContactElementClick);

let contactsList = [];

// let contactsList = [
//   {
//     id: 1,
//     name: 'Taras',
//     surname: 'Shevchenko',
//     email: 'deadrussians@good.com',
//   },
//   { id: 2, name: 'Lesya', surname: 'Ukrainka', email: 'deadrussians@good.com' },
//   { id: 3, name: 'Lina', surname: 'Kostenko', email: 'deadrussians@good.com' },
// ];

init();

function init() {
  fetchContacts();
  renderList(contactsList);
}
function fetchContacts() {
  contactApi.getList().then((data) => {
    contactsList = data;
    renderList(contactsList);
  });
}

function renderList(contacts) {
  contactList.innerHTML = contacts.map(generateListHtml).join('');
}
function generateListHtml({ id, name, surname, email }) {
  return contactTemplate
    .replaceAll('{{id}}', id)
    .replaceAll('{{name}}', name)
    .replaceAll('{{surname}}', surname)
    .replaceAll('{{email}}', email);
}
function onFormSubmit(e) {
  e.preventDefault();
  if (!dataValidation()) {
    return;
  }
  const newContact = getFormValues();
  saveContact(newContact);
  clearInput();
}

function onContactElementClick(e) {
  const contactId = getContactId(e.target);
  if (e.target.classList.contains(DELETE_BUTTON)) {
    deleteContact(contactId);
  }
  if (e.target.classList.contains(EDIT_BUTTON)) {
    editContact(contactId);
  }
}

function getContactId(elem) {
  return elem.closest(CONTACT_ITEM_CLASS).dataset.contactId;
}

function getFormValues() {
  return {
    id: idInput.value,
    name: contactName.value,
    surname: contactSurname.value,
    email: contactEmail.value,
  };
}
function fillInputValue({ id, name, surname, email }) {
  idInput.value = id;
  contactName.value = name;
  contactSurname.value = surname;
  contactEmail.value = email;
}

function saveContact(contact) {
  if (contact.id === '') {
    addContact(contact);
  } else {
    updateContact(contact);
  }
}

function addContact(newcontact) {
  contactApi.create(newcontact).then((data) => {
    contactsList = [...contactsList, data];
    renderList(contactsList);
  });
}

function updateContact(contact) {
  let id = contact.id;

  contactApi.update(contact).then(() => {
    contactsList = contactsList.map((item) =>
      item.id !== id ? item : contact
    );

    renderList(contactsList);
  });
}

function deleteContact(id) {
  contactApi.delete(id).then(() => {
    contactsList = contactsList.filter((item) => item.id !== id);
    renderList(contactsList);
  });
}

function editContact(id) {
  const contact = contactsList.find((item) => item.id === id);
  fillInputValue(contact);
}

function clearInput() {
  idInput.value = '';
  contactName.value = '';
  contactSurname.value = '';
  contactEmail.value = '';
}

function dataValidation() {
  checkInputValidation();
  if (contactName.value.trim() === '') {
    contactName.classList.add(INVALID_INPUT);
    return false;
  }
  if (contactSurname.value.trim() === '') {
    contactSurname.classList.add(INVALID_INPUT);
    return false;
  }

  if (contactEmail.value.trim() === '') {
    contactEmail.classList.add(INVALID_INPUT);
    return false;
  }
  return true;
}

function checkInputValidation() {
  contactName.addEventListener('input', resetInputValidation);
  contactSurname.addEventListener('input', resetInputValidation);
  contactEmail.addEventListener('input', resetInputValidation);
}

function resetInputValidation() {
  contactName.classList.remove(INVALID_INPUT);
  contactSurname.classList.remove(INVALID_INPUT);
  contactEmail.classList.remove(INVALID_INPUT);
}
