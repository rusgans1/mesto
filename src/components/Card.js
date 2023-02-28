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
    this._buttonLike
      .addEventListener("click", () => {
        this._handleLikeButton();
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
    this._buttonLike
      .classList.toggle("element__button-like_active");
  }

  _handleLikeButton() {
    if (
      !this._buttonLike
        .classList.contains("element__button-like_active")
    ) {
      this._handleActivationLikeClick();
    } else {
      this._handleDisactivationLikeClick();
    }
  }

  setLikesCounter(data) {
    this._counterLikes.textContent = data;
  }

  removeCard() {
    this._element.closest(".element").remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._buttonLike = this._element.querySelector(".element__button-like");
    this._counterLikes = this._element.querySelector(".element__counter-likes");

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
    this.setLikesCounter(this._likes.length);
    this._disactivationRemoveButton();

    return this._element;
  }
}