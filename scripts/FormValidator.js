class FormValidator {
  constructor(obj, formElement) {
    this._formSelector = obj.formSelector;
    this._inputSelector = obj.inputSelector;
    this._submitButtonSelector = obj.submitButtonSelector;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorClass = obj.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidaty = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners() {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidaty(inputElement);
        this.toggleButtonState();
      });
    });
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disablePopupButton(buttonElement) {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  };

  _enablePopupButton(buttonElement) {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  };

  toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disablePopupButton(this._buttonElement, this._inactiveButtonClass);
    } else {
      this._enablePopupButton(this._buttonElement, this._inactiveButtonClass);
    }
  };

  enableValidation() {
    this._setEventListeners();
  }
}
  export { FormValidator };