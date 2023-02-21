export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const profile = document.querySelector(".profile");
const popupEditProfile = document.querySelector('.popup_profile-edit');
const popupAddCard = document.querySelector('.popup_card-add');

export const popupButtonEdit = profile.querySelector('.profile__button-edit');
export const popupButtonAdd = profile.querySelector('.profile__button-add');
export const popupFormEditProfile = popupEditProfile.querySelector('.popup__form');
export const popupFormAddCard = popupAddCard.querySelector('.popup__form');
export const inputName = popupEditProfile.querySelector('.popup__input_name');
export const inputJob = popupEditProfile.querySelector('.popup__input_about');
export const validatorOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_invalid',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__error_active'
};