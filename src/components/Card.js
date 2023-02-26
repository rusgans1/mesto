export class Card {
  constructor({ item, userInfo, handleCardClick, handleDeleteButtonClick,
    handleActivationLikeClick, handleDisactivationLikeClick }, cardSelector) {
    this._title = item.name;
    this._cardId = item._id;
    this._owner = item.owner;
    this._likes = item.likes;
    this._imageLink = item.link;
    this._userInfo = userInfo;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._handleActivationLikeClick = handleActivationLikeClick;
    this._handleDisactivationLikeClick = handleDisactivationLikeClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__button-like")
      .addEventListener("click", (evt) => {
        this._eventLikeButton();
      });
    this._element
      .querySelector(".element__pic")
      .addEventListener("click", () => {
        this._handleCardClick();
      });
    this._element
      .querySelector(".element__button-trash")
      .addEventListener("click", () => {
        this._handleDeleteButtonClick();
      });
  }

  _disactivationRemoveButton() {
    if (!(this._owner._id === this._userInfo)) {
      this._element
        .querySelector(".element__button-trash")
        .classList.add("element__button-trash_inactive");
    }
  }

  changeLikeStatus() {
    this._element
      .querySelector(".element__button-like")
      .classList.toggle("element__button-like_active");
  }

  _eventLikeButton() {
    if (
      !this._element
        .querySelector(".element__button-like")
        .classList.contains("element__button-like_active")
    ) {
      this._handleActivationLikeClick();
    } else {
      this._handleDisactivationLikeClick();
    }
  }

  eventCounterLikes(data) {
    this._element.querySelector(".element__counter-likes").textContent = data;
  }

  removeCard() {
    this._element.closest(".element").remove();
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    const elementPic = this._element.querySelector(".element__pic");
    elementPic.src = this._imageLink;
    elementPic.alt = this._title;
    this._element.querySelector(".element__title").textContent = this._title;

    if (
      this._likes.find((item) => {
        return this._userInfo === item._id;
      })
    ) {
      this.changeLikeStatus();
    }
    this.eventCounterLikes(this._likes.length);
    this._disactivationRemoveButton();

    return this._element;
  }
}