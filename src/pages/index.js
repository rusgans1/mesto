import "./index.css";

import { Api } from "../components/Api";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  avatar,
  popupButtonEdit,
  popupButtonAdd,
  popupFormChangeAvatar,
  popupFormEditProfile,
  popupFormAddCard,
  inputName,
  inputJob,
  validatorOptions,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { UserInfo } from "../components/UserInfo.js";

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
    authorization: "0250b2ff-4a35-418c-a094-de9de5877fe5",
    "Content-Type": "application/json",
  },
});

let userId;

const createPopupImage = new PopupWithImage(".popup_fullsize");
createPopupImage.setEventListeners();
const createPopupRemove = new PopupWithConfirmation(".popup_confirm-remove");
createPopupRemove.setEventListeners();

function createCard(data) { 
  const card = new Card( 
    { 
      item: data, 
      handleCardClick: () => { 
        createPopupImage.open(data); 
      },
      handleDeleteButtonClick: () => {
        createPopupRemove.open();
        createPopupRemove.setAction(() => {
          api
            .removeCard(data._id)
            .then(() => {
              card.removeCard();
              createPopupRemove.close();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      },
      handleActivationLikeClick: () => {
        api
          .sendLike(data._id)
          .then((info) => {
            card.changeLikeStatus();
            card.eventCounterLikes(info.likes.length);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      handleDisactivationLikeClick: () => {
        api
          .removeLike(data._id)
          .then((info) => {
            card.changeLikeStatus();
            card.eventCounterLikes(info.likes.length);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      userInfo: userId,
    }, 
    "#element" 
  );
  return card;
}

function createFormValidator(form) {
  return new FormValidator(validatorOptions, form);
}

const changeAvatarFormValitation = createFormValidator(popupFormChangeAvatar);
const addFormValitation = createFormValidator(popupFormAddCard);
const editFormValitation = createFormValidator(popupFormEditProfile);

changeAvatarFormValitation.enableValidation();
addFormValitation.enableValidation();
editFormValitation.enableValidation();

const renderContainer = new Section(
  {
    renderer: (items) => {
      const card = createCard(items).generateCard();;
      renderContainer.addItem(card);
    },
  },
  ".elements"
);

api.getInitialCards().then((data) => {
  return renderContainer.renderItems(data);
});

const userInfo = new UserInfo({
  userName: ".profile__title",
  userInfo: ".profile__subtitle",
  userAvatar: ".profile__avatar",
});

api.getUserInfo().then((info) => {
  userInfo.setUserInfo(info);
  userId = info._id;
});

const generateAddPopup = new PopupWithForm(".popup_card-add", {
  submitForm: (inputs) => {
    generateAddPopup.renderLoading(true, "Сохранить...");
    api
      .setNewCard(inputs)
      .then((card) => {
        const item = createCard(card).generateCard();
        renderContainer.addItem(item);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        generateAddPopup.close();
        generateAddPopup.renderLoading(false, "");
      });
  },
});

generateAddPopup.setEventListeners();

const generateEditPopup = new PopupWithForm(".popup_profile-edit", {
  submitForm: (inputs) => {
    generateEditPopup.renderLoading(true, "Заменяем...");
    api
      .setUserInfo(inputs)
      .then((item) => {
        console.log(item);
        userInfo.setUserInfo(item);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        generateEditPopup.close();
        generateEditPopup.renderLoading(false, "");
      });
  },
});

generateEditPopup.setEventListeners();

const generateChangePopup = new PopupWithForm(".popup_avatar-change", {
  submitForm: (inputs) => {
    generateChangePopup.renderLoading(true, "Обновляем...");
    api
      .setUserAvatar(inputs)
      .then((item) => {
        userInfo.setUserAvatar(item);
        generateChangePopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        generateChangePopup.close();
        generateChangePopup.renderLoading(false, "");
      });
  },
});

generateChangePopup.setEventListeners();

avatar.addEventListener("click", () => {
  changeAvatarFormValitation.resetValidation();
  generateChangePopup.open();
});

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