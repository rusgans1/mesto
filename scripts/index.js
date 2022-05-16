const profile = document.querySelector('.profile');
const profileInfo = document.querySelector('.profile__info');
const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_profile-edit');
const popupAddCard = document.querySelector('.popup_card-add');
const popupFullSize = document.querySelector('.popup_fullsize');
const popupButtonEdit = profile.querySelector('.profile__button-edit');
const popupButtonAdd = profile.querySelector('.profile__button-add');
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

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

popups.forEach(function(item) {
  item
  .querySelector('.popup__button-close')
  .addEventListener('click', function() {
    closePopup(item);
  });
});

function getCardElement(text, src) {
  const cardElement = elementModel
    .querySelector('.element')
    .cloneNode(true);
  const elementPicture = cardElement.querySelector('.element__pic');
  cardElement.querySelector('.element__title').textContent = text;

  elementPicture.src = src;
  elementPicture.alt = text;
  
  cardElement.querySelector('.element__button-like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__button-like_active');
  });
    
  elementPicture.addEventListener('click', function() {
    const pictureFullsize = popupFullSize.querySelector('.fullsize-image__picture');

    pictureFullsize.src = src;
    pictureFullsize.alt = text;
    
    popupFullSize.querySelector('.fullsize-image__caption').textContent = text;
    openPopup(popupFullSize);
  });
  
  const buttonTrash = cardElement.querySelector('.element__button-trash');
    
  buttonTrash.addEventListener('click', function () {
    const elementItem = buttonTrash.closest('.element');
    elementItem.remove();
  });
    return cardElement;
}

initialCards.forEach(function(item) {
  elementContainer
    .append(getCardElement (item.name, item.link));
});

function openPopupEditProf() {
  const userNameText = userName.textContent;
  const userJobText = userJob.textContent;

  inputName.value = userNameText;
  inputJob.value = userJobText;

  openPopup(popupEditProfile);
}

function handleSubmitEditProfile(evt) {
  evt.preventDefault();

  userName.textContent = inputName.value;
  userJob.textContent = inputJob.value;

  closePopup(popupEditProfile);
}

function openPopupAddCards() {
  inputTitle.value = '';
  inputLink.value = '';

  openPopup(popupAddCard);
}

function handleSubmitAddCard(evt) {
  evt.preventDefault();  

  elementContainer
    .prepend(getCardElement (inputTitle.value, inputLink.value));

    closePopup(popupAddCard);
  
}

popupButtonEdit.addEventListener('click', openPopupEditProf);
popupFormEditProfile.addEventListener('submit', handleSubmitEditProfile);
popupButtonAdd.addEventListener('click', openPopupAddCards);
popupFormAddCard.addEventListener('submit', handleSubmitAddCard);