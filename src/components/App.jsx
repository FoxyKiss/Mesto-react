import React from 'react'
//? Импорты компонентов
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopUpWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './popupEditInfo/EditProfilePopup'
import EditAvatarPopup from './popupEditInfo/EditAvatarPopup'
import api from '../utils/Api'
import { CardPopup } from './popupsMarkup/popupsMarkup'
import { currentUserContext } from '../contexts/currentUserContext'

function App() {
  //? State переменные для активации модалок
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [imagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' })

  //? State переменная для получения информации о пользователе
  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '', avatar: '' })

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
  function handleCardClick(name, link) {
    setSelectedCard({ name, link });
    setImagePopupOpen(true);
  }

  //?Изменение state переменной для получения информации о пользователе
  React.useEffect(() => {
    Promise.all([api.getInfo()])
      .then(([info]) => {
        setCurrentUser(info);
      }).catch((err) => {
        console.log(`Ошибка: ${err.status}`)
      });
  }, []);

  //? Обработчик изменения данных профиля
  function handleUpdateUser(data) {
    api.setInfo(data)
      .then((info) => {
        setCurrentUser(info);
      }).catch((err) => {
        console.log(`Ошибка: ${err.status}`)
      });
    closeAllPopups()
  }
  //? Обработчик изменения аватара
  function handleUpdateAvatar(data) {
    api.setAvatar(data)
      .then((info) => {
        setCurrentUser({ name: currentUser.name, about: currentUser.about, avatar: info.avatar })
      })
    closeAllPopups()
  }

  //? Разметка страницы
  return (
    <div className="page">
      <currentUserContext.Provider value={currentUser}>
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <PopUpWithForm name='create-cards' title='Новое место' formId='cardForm' buttonText='Сохранить' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <CardPopup />
        </PopUpWithForm>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <ImagePopup card={selectedCard} isOpen={imagePopupOpen} onClose={closeAllPopups} />
      </currentUserContext.Provider>
    </div>
  );
}

export default App;
