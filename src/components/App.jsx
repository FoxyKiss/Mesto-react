import React from 'react'
//? Импорты компонентов
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopUpWithForm from './PopupWithForm'
import { ProfilePopup, CardPopup, AvatarPopup } from './popupsMarkup/popupsMarkup'


function App() {
  //? State переменные для активации модалок
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  //? Функции изменения стейтов для модалок
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  //? Разметка страницы
  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopUpWithForm name='edit-profile' title='Редактировать профиль' formId='profileForm' buttonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <ProfilePopup />
      </PopUpWithForm>
      <PopUpWithForm name='create-cards' title='Новое место' formId='cardForm' buttonText='Сохранить' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <CardPopup />
      </PopUpWithForm>
      <PopUpWithForm name='change-avatar' title='Обновить Аватар' formId='avatarForm' buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <AvatarPopup />
      </PopUpWithForm>
      <div className="popup popup_images">
        <div className="popup__image-container">
          <img className="popup__image" src="." alt="." />
          <p className="popup__image-name"></p>
          <button id="imagePopCloseButton" className="popup__close-button" type="button"></button>
        </div>
      </div>
      <div className="popup popup_delete_card">
        <div className="popup__container">
          <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
          <form id="deletePopForm" className="popup__form">
            <button id="deleteSubmitButton" className="popup__save-button" type="submit">Да</button>
          </form>
          <button id="popupDeleteCloseButton" className="popup__close-button" type="button"></button>
        </div>
      </div>

    </div>
  );
}

export default App;
