const profile = document.querySelector('.profile');
const profileInfo = document.querySelector('.profile__info');
const popupAll = document.querySelectorAll('.popup');
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

function popupOpen (popup) {
  popup.classList.add('popup_opened');
}

function popupClose (popup) {
  popup.classList.remove('popup_opened');
}

popupAll.forEach(function(item) {
  item
  .querySelector('.popup__button-close')
  .addEventListener('click', function() {
    popupClose(item);
  });
});

const elementContainer = document.querySelector('.elements');
const elementModel = document.querySelector('#element').content;

function elementAdd (text, src) {
  const elementElement = elementModel
    .querySelector('.element')
    .cloneNode(true);
  const elementPicture = elementElement.querySelector('.element__pic');
  elementElement.querySelector('.element__title').textContent = text;

  elementPicture.src = src;
  elementPicture.alt = text;
  
  elementElement.querySelector('.element__button-like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__button-like_active');
  });
    
  elementPicture.addEventListener('click', function() {
    popupOpen(popupFullSize);
    const pictureFullsize = popupFullSize.querySelector('.popup__fullsize-image_picture');

    pictureFullsize.src = src;
    pictureFullsize.alt = text;
    
    popupFullSize.querySelector('.popup__fullsize-image_caption').textContent = text;
  });
  
  const buttonTrash = elementElement.querySelector('.element__button-trash');
    
  buttonTrash.addEventListener('click', function () {
    const elementItem = buttonTrash.closest('.element');
    elementItem.remove();
  });
    return elementElement;
}

initialCards.forEach(function(item) {
  elementContainer
    .append(elementAdd (item.name, item.link));
});

function openPopupEditProf() {
  const userNameText = userName.textContent;
  const userJobText = userJob.textContent;

  inputName.value = userNameText;
  inputJob.value = userJobText;

  popupOpen(popupEditProfile);
}

function popupSubmitEditProfile(evt) {
  evt.preventDefault();

  userName.textContent = inputName.value;
  userJob.textContent = inputJob.value;

  popupClose(popupEditProfile);
}

function openPopupAddCards() {
  inputTitle.value = '';
  inputLink.value = '';

  popupOpen(popupAddCard);
}

function popupSubmitAddCard(evt) {
  evt.preventDefault();  

  elementContainer
    .prepend(elementAdd (inputTitle.value, inputLink.value));

  popupClose(popupAddCard);
  
}

popupButtonEdit.addEventListener('click', openPopupEditProf);
popupFormEditProfile.addEventListener('submit', popupSubmitEditProfile);
popupButtonAdd.addEventListener('click', openPopupAddCards);
popupFormAddCard.addEventListener('submit', popupSubmitAddCard);