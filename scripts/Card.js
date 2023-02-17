import { openPopup } from "./index.js";

class Card {
  constructor(title, imageLink, cardSelector) {
    this._title = title;
    this._imageLink = imageLink;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element.addEventListener("click", (evt) => {
      this._eventLikeButton(evt);
    });

    this._element.addEventListener("click", (evt) => {
      this._eventRemoveCard(evt);
    });
    this._element
      .querySelector(".element__pic")
      .addEventListener("click", () => {
        this._eventFullsizeScreen();
      });
  }

  _eventFullsizeScreen() {
    const popupFullSize = document.querySelector('.popup_fullsize');

    openPopup(popupFullSize);
    const pictureFullscreen = popupFullSize.querySelector(
      ".fullsize-image__picture"
    );

    pictureFullscreen.src = this._imageLink;
    pictureFullscreen.alt = this._title;

    popupFullSize.querySelector(".fullsize-image__caption").textContent =
      this._title;
  }

  _eventLikeButton(evt) {
    if (evt.target.classList.contains("element__button-like")) {
      evt.target.classList.toggle("element__button-like_active");
    }
  }

  _eventRemoveCard(evt) {
    if (evt.target.classList.contains("element__button-trash")) {
      evt.target.closest(".element").remove();
    }
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector(".element__pic").src = this._imageLink;
    this._element.querySelector(".element__pic").alt = this._title;
    this._element.querySelector(".element__title").textContent = this._title;

    return this._element;
  }
}

export { Card };