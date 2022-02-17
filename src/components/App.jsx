import React from 'react'
//? Импорты компонентов
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopUpWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { ProfilePopup, CardPopup, AvatarPopup } from './popupsMarkup/popupsMarkup'


function App() {
  //? State переменные для активации модалок
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [imagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' })

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
    setImagePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }
  //? Функция открытия Popup с изображением
  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopupOpen(true);
  }

  //? Разметка страницы
  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
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
      <ImagePopup card={selectedCard} isOpen={imagePopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
