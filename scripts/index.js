const profileInfo = document.querySelector('.profile__info');
const editPopupButton = profileInfo.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopupButton = popup.querySelector('.popup__button-close');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileSubtitle = profileInfo.querySelector('.profile__subtitle');
const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__input_name');
const jobInput = popup.querySelector('.popup__input_about');

function userInfo() {
  nameInput.value = profileTitle.innerText;
  jobInput.value = profileSubtitle.innerText;
}

function popupOpen() {
  userInfo();
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupOverlayClickHandler(evt) {
  if (evt.target === evt.currentTarget) {
    popupClose();
  }
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);
editPopupButton.addEventListener('click', popupOpen);
closePopupButton.addEventListener('click', popupClose);
popup.addEventListener('click', popupOverlayClickHandler);