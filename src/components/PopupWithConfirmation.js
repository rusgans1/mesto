import Popup from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setAction(action) {
    this._handleClickAction = action;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup
      .querySelector(".popup__button-confirm")
      .addEventListener("click", (evt) => {
        this._handleClickAction();
      });
  }
}