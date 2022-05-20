const profile = document.querySelector('.profile');
const profileInfo = document.querySelector('.profile__info');

const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_profile-edit');
const popupAddCard = document.querySelector('.popup_card-add');
const popupFullSize = document.querySelector('.popup_fullsize');

const popupButtonEdit = profile.querySelector('.profile__button-edit');
const popupButtonAdd = profile.querySelector('.profile__button-add');
const popupEditProfileButtonSubmit = popupEditProfile.querySelector('.popup__button-submit');
const popupAddCardButtonSubmit = popupAddCard.querySelector('.popup__button-submit');
const popupFormEditProfile = popupEditProfile.querySelector('.popup__form');
const popupFormAddCard = popupAddCard.querySelector('.popup__form');

const userName = profileInfo.querySelector('.profile__title');
const userJob = profileInfo.querySelector('.profile__subtitle');
const inputName = popupEditProfile.querySelector('.popup__input_name');
const inputJob = popupEditProfile.querySelector('.popup__input_about');
const inputTitle = popupAddCard.querySelector('.popup__input_title');
const inputLink = popupAddCard.querySelector('.popup__input_link');

const elementContainer = document.querySelector('.elements');
const elementModel = document.querySelector('#element').content;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', pressEscClosePopup);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', pressEscClosePopup);
};

const clickOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
};

const pressEscClosePopup = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

popups.forEach((item) => {
  item.querySelector('.popup__button-close').addEventListener('click', () => {
    closePopup(item);
  });
  item.addEventListener('mousedown', clickOverlay);
});

const handleTrashElement = (evt) => {
  evt.target.closest('.element').remove();
};

const handleLikeElement = (evt) => {
  evt.target.classList.toggle('element__button-like_active');
};

const addButtonsOnCard = (el) => {
  const elementTrashButton = el.querySelector('.element__button-trash');
  elementTrashButton.addEventListener('click', handleTrashElement);

  const elementLikeButton = el.querySelector('.element__button-like');
  elementLikeButton.addEventListener('click', handleLikeElement);
};

const getCardElement = (text, src) => {
  const cardElement = elementModel.querySelector('.element').cloneNode(true);
  const elementPicture = cardElement.querySelector('.element__pic');
  const pictureFullsize = popupFullSize.querySelector('.fullsize-image__picture');
  const captionFullsize = popupFullSize.querySelector('.fullsize-image__caption');

  cardElement.querySelector('.element__title').textContent = text;

  elementPicture.src = src;
  elementPicture.alt = text;
  
  addButtonsOnCard(cardElement);

  elementPicture.addEventListener('click', () => {
    pictureFullsize.src = src;
    pictureFullsize.alt = text;
    
    captionFullsize.textContent = text;
    openPopup(popupFullSize);
  });
  return cardElement;
};

initialCards.forEach((item) => {
  elementContainer.append(getCardElement(item.name, item.link));
});

const openPopupEditProf = () => {
  const userNameText = userName.textContent;
  const userJobText = userJob.textContent;

  inputName.value = userNameText;
  inputJob.value = userJobText;

  openPopup(popupEditProfile);

  disablePopupButton(popupEditProfileButtonSubmit, 'popup__button-submit_invalid');
};

const handleSubmitEditProfile = (evt) => {
  evt.preventDefault();

  userName.textContent = inputName.value;
  userJob.textContent = inputJob.value;

  closePopup(popupEditProfile);
};

const openPopupAddCards = () => {
  popupAddCard.querySelector('.popup__form').reset();

  openPopup(popupAddCard);

  disablePopupButton(popupAddCardButtonSubmit, 'popup__button-submit_invalid');
};

const handleSubmitAddCard = (evt) => {
  evt.preventDefault();

  elementContainer.prepend(getCardElement(inputTitle.value, inputLink.value));

  closePopup(popupAddCard);
};

popupButtonEdit.addEventListener('click', openPopupEditProf);
popupFormEditProfile.addEventListener('submit', handleSubmitEditProfile);
popupButtonAdd.addEventListener('click', openPopupAddCards);
popupFormAddCard.addEventListener('submit', handleSubmitAddCard);