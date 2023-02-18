import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./data.js";
import { Card } from "./Card.js";

const profile = document.querySelector('.profile');
const profileInfo = document.querySelector('.profile__info');

const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_profile-edit');
const popupAddCard = document.querySelector('.popup_card-add');

const popupButtonEdit = profile.querySelector('.profile__button-edit');
const popupButtonAdd = profile.querySelector('.profile__button-add');
const popupEditProfileButtonSubmit = popupEditProfile.querySelector('.popup__button-submit');
const popupAddCardButtonSubmit = popupAddCard.querySelector('.popup__button-submit');
const popupFormEditProfile = popupEditProfile.querySelector('.popup__form');
const popupFormAddCard = popupAddCard.querySelector('.popup__form');

const userName = profileInfo.querySelector('.profile__title');
const userJob = profileInfo.querySelector('.profile__subtitle');
const inputName = popupEditProfile.querySelector('.popup__input_name');
const inputJob = popupEditProfile.querySelector('.popup__input_about');
const inputTitle = popupAddCard.querySelector('.popup__input_title');
const inputLink = popupAddCard.querySelector('.popup__input_link');

const elementContainer = document.querySelector('.elements');

const validatorOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_invalid',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__error_active'
};

const addFormValidator = createFormValidator(popupFormAddCard);

function createCard(title, imageLink) {
  return new Card(title, imageLink, "#element", openPopup).generateCard();
}

function createFormValidator(form) {
  return new FormValidator(validatorOptions, form);
}

addFormValidator.enableValidation();
createFormValidator(popupFormEditProfile).enableValidation();

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', pressEscClosePopup);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', pressEscClosePopup);
};

const clickOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
};

const pressEscClosePopup = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

popups.forEach((item) => {
  item.querySelector('.popup__button-close').addEventListener('click', () => {
    closePopup(item);
  });
  item.addEventListener('mousedown', clickOverlay);
});

initialCards.forEach((item) => {
  elementContainer.append(createCard(item.name, item.link));
});

const openPopupEditProf = () => {
  const userNameText = userName.textContent;
  const userJobText = userJob.textContent;

  inputName.value = userNameText;
  inputJob.value = userJobText;

  openPopup(popupEditProfile);
};

const handleSubmitEditProfile = (evt) => {
  evt.preventDefault();

  userName.textContent = inputName.value;
  userJob.textContent = inputJob.value;

  closePopup(popupEditProfile);
};

const openPopupAddCards = () => {
  popupFormAddCard.reset();
  openPopup(popupAddCard);
  addFormValidator.toggleButtonState();
};

const handleSubmitAddCard = (evt) => {
  evt.preventDefault();

  elementContainer.prepend(createCard(inputTitle.value, inputLink.value));

  closePopup(popupAddCard);
};

popupButtonEdit.addEventListener('click', openPopupEditProf);
popupFormEditProfile.addEventListener('submit', handleSubmitEditProfile);
popupButtonAdd.addEventListener('click', openPopupAddCards);
popupFormAddCard.addEventListener('submit', handleSubmitAddCard);