const profile = document.querySelector(".profile");
const popupEditProfile = document.querySelector('.popup_profile-edit');
const popupAddCard = document.querySelector('.popup_card-add');
const popupChangeAvatar = document.querySelector(".popup_avatar-change");

export const avatar = profile.querySelector(".profile__avatar-overlay");
export const popupButtonEdit = profile.querySelector('.profile__button-edit');
export const popupButtonAdd = profile.querySelector('.profile__button-add');
export const popupFormEditProfile = popupEditProfile.querySelector('.popup__form');
export const popupFormAddCard = popupAddCard.querySelector('.popup__form');
export const popupFormChangeAvatar = popupChangeAvatar.querySelector(".popup__form");
export const inputName = popupEditProfile.querySelector('.popup__input_name');
export const inputJob = popupEditProfile.querySelector('.popup__input_about');
export const validatorOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_invalid',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__error_active',
};
export const selectors = {
  inputUserNameSelector: ".profile__title",
  inputUserInfoSelector: ".profile__subtitle",
  inputUserAvatarSelector: ".profile__avatar",
};