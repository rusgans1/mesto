export class Card {
  constructor({ item, handleCardClick }, cardSelector) {
    this._title = item.name;
    this._cardSelector = cardSelector;
    this._imageLink = item.link;
    this._handleCardClick = handleCardClick;
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
    this._handleCardClick();
  }

  _eventLikeButton(evt) {
    if (evt.target.classList.contains("element__button-like")) {
      evt.target.classList.toggle("element__button-like_active");
    }
  }

  _eventRemoveCard(evt) {
    if (evt.target.classList.contains("element__button-trash")) {
      this._element.remove();
      this._element = null;
    }
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    const elementPic = this._element.querySelector(".element__pic");
    elementPic.src = this._imageLink;
    elementPic.alt = this._title;
    this._element.querySelector(".element__title").textContent = this._title;

    return this._element;
  }
}