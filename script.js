const openButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');

openButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});
closeButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

const formElement = document.querySelector('#popup');
const nameInput = document.querySelector('#popup-name');
const jobInput = document.querySelector('#popup-professional');
const profileName = document.querySelector('.profile__name');
const profileProfessional = document.querySelector('.profile__professional');
const popupButton = document.querySelector('.popup__button');

nameInput.value = profileName.textContent;
jobInput.value = profileProfessional.textContent;

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = `${nameInput.value}`;
  profileProfessional.textContent = `${jobInput.value}`;
  popupButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
  });
}
formElement.addEventListener('submit', formSubmitHandler);

//начало работы с формой добавление карточек
const addButton = document.querySelector('.profile__button');
const form = document.querySelector('.form');
const closeIcon = document.querySelector('.form__close');

addButton.addEventListener('click', function () {
  form.classList.add('form_opened');
});
closeIcon.addEventListener('click', function () {
  form.classList.remove('form_opened');
});
//сделано открытие\закрытие окна
const elContainer = document.querySelector('.elements');

function addImage (imageValue, titleValue) {
  const addTemplate = document.querySelector('#add-template').content;
  const element = addTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = imageValue;
  element.querySelector('.element__title').textContent = titleValue;
  elContainer.prepend(element);
}


