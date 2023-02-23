import "./index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  initialCards,
  popupButtonEdit,
  popupButtonAdd,
  popupFormEditProfile,
  popupFormAddCard,
  inputName,
  inputJob,
  validatorOptions,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const createPopupImage = new PopupWithImage(".popup_fullsize");
createPopupImage.setEventListeners(); 

function createCard(data) { 
  return new Card( 
    { 
      item: data, 
      handleCardClick: (cardData) => { 
        createPopupImage.open(cardData); 
      }, 
    }, 
    "#element" 
  ).generateCard(); 
}

function createFormValidator(form) {
  return new FormValidator(validatorOptions, form);
}

const addFormValitation = createFormValidator(popupFormAddCard);
const editFormValitation = createFormValidator(popupFormEditProfile);

addFormValitation.enableValidation();
editFormValitation.enableValidation();

const renderContainer = new Section(
  {
    items: initialCards,
    renderer: (items) => {
      const card = createCard(items);
      renderContainer.addItem(card);
    },
  },
  ".elements"
);

renderContainer.renderItems();

const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userInfoSelector: ".profile__subtitle",
});

const generateAddPopup = new PopupWithForm(".popup_card-add", {
  submitForm: (inputs) => {
    renderContainer.addItem(createCard(inputs));
  },
});

generateAddPopup.setEventListeners();

const generateEditPopup = new PopupWithForm(".popup_profile-edit", {
  submitForm: (items) => {
    userInfo.setUserInfo(items);
  },
});

generateEditPopup.setEventListeners();

popupButtonAdd.addEventListener("click", () => {
  addFormValitation.resetValidation();
  generateAddPopup.open();
});

popupButtonEdit.addEventListener("click", () => {
  editFormValitation.resetValidation();
  const userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputJob.value = userData.info;
  generateEditPopup.open();
});