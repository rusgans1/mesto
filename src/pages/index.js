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
  selectors,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { UserInfo } from "../components/UserInfo.js";
import { showError } from "../utils/function.js";

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
    authorization: "0250b2ff-4a35-418c-a094-de9de5877fe5",
    "Content-Type": "application/json",
  },
});

let userId;

const createPopupImage = new PopupWithImage(".popup_fullsize");
const createPopupRemove = new PopupWithConfirmation(".popup_confirm-remove");
const userInfo = new UserInfo({
  userName: selectors.inputUserNameSelector,
  userInfo: selectors.inputUserInfoSelector,
  userAvatar: selectors.inputUserAvatarSelector,
});

createPopupImage.setEventListeners();
createPopupRemove.setEventListeners();

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, data]) => {
    userInfo.setUserInfo(user);
    userId = user._id;
    return renderContainer.renderItems(data);
  })
  .catch(showError);

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
            .catch(showError);
        });
      },
      handleActivationLikeClick: () => {
        api
          .sendLike(data._id)
          .then((info) => {
            card.changeLikeStatus();
            card.setLikesCounter(info.likes.length);
          })
          .catch(showError);
      },
      handleDisactivationLikeClick: () => {
        api
          .removeLike(data._id)
          .then((info) => {
            card.changeLikeStatus();
            card.setLikesCounter(info.likes.length);
          })
          .catch(showError);
      },
      userInfo: userId,
    }, 
    "#element" 
  );
  return card.generateCard();
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
      const card = createCard(items);
      renderContainer.addItem(card);
    },
  },
  ".elements"
);

const generateAddPopup = new PopupWithForm(".popup_card-add", {
  submitForm: (inputs) => {
    generateAddPopup.renderLoading(true, "Сохранить...");
    api
      .setNewCard(inputs)
      .then((card) => {
        const item = createCard(card);
        renderContainer.addItem(item);
      })
      .catch(showError)
      .finally(() => {
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
      .catch(showError)
      .finally(() => {
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
      .catch(showError)
      .finally(() => {
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