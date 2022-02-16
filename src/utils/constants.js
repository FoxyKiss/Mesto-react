//TOKEN
const token = '40f69e37-e35f-44b4-a4bd-e53ae77f767e'
//PROFILE
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const profileAvatar = document.querySelector('.profile__avatar')
const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_edit-profile');
const profileForm = profilePopup.querySelector('#profileForm');
const profileInputName = profileForm.querySelector('#profileName');
const profileInputAbout = profileForm.querySelector('#profileAbout');

//CARD
const cardsList = document.querySelector('.cards__list');
const cardCreateButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_create-cards');
const cardForm = cardPopup.querySelector('#cardForm');
const cardInputName = cardForm.querySelector('#cardName');
const cardInputLink = cardForm.querySelector('#cardLink');
const cardTemplate = document.querySelector('#cardTemplate')


//IMAGE POPUP
const imagesPopup = document.querySelector('.popup_images');
const cardPopImage = imagesPopup.querySelector('.popup__image');
const cardPopImageName = imagesPopup.querySelector('.popup__image-name');

//DELETE POPUP
const deletePopup = document.querySelector('.popup_delete_card')
const deleteSubmitButton = document.querySelector('#deleteSubmitButton')

//AVATAR POPUP
const avatarPopup = document.querySelector('.popup_change-avatar')
const avatarEditButton = document.querySelector('.profile__avatar-edit')
const avatarForm = document.querySelector('#avatarForm')


export {
  profileName, profileAbout, profileAvatar, avatarPopup, profileEditButton, profilePopup, profileForm, profileInputName, profileInputAbout,
  cardsList, cardCreateButton, cardPopup, deletePopup, cardForm, cardInputName, cardInputLink, imagesPopup, cardTemplate, cardPopImage, cardPopImageName,
  token,deleteSubmitButton, avatarEditButton,avatarForm
}