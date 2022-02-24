import React from 'react'
//? Импорты компонентов
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './popupEditInfo/EditProfilePopup'
import EditAvatarPopup from './popupEditInfo/EditAvatarPopup'
import AddCardPopup from './popupEditInfo/AddCardPopup'

//? Импорт контекста
import { currentUserContext } from '../contexts/currentUserContext'

//? Импорт компонента api
import api from '../utils/Api'

function App() {
  //? State переменные для активации модалок
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [imagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' })
  //? State переменная для получения информации о пользователе
  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '', avatar: '' })
  //? State переменная для получения массива карточек
  const [cardsList, setCardsList] = React.useState([]);

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

  function handleCardClick(name, link) {
    setSelectedCard({ name, link });
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({ name: '', link: '' });

  }


  //?Изменение state переменной для получения информации о пользователе и массива карточек
  React.useEffect(() => {
    Promise.all([api.getInfo(), api.getStartCards()])
      .then(([info, cardsList]) => {
        setCurrentUser(info);
        setCardsList(cardsList);
      }).catch(err => console.log(`Ошибка: ${err.status}`));
  }, []);


  //? Функция удаления карточки
  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
      .then(() => {
        setCardsList(cardsList.filter((item) => {
          return item._id !== cardId
        }))
      })
  }
  //? Функция лайка карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (!isLiked) {
      api.activeLike(card).then((newCard) => {
        setCardsList((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    } else {
      api.deactiveLike(card).then((newCard) => {
        setCardsList((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    }
  }

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
  //? Обработчик создания карточки
  function handleAddCard(data) {
    api.postCard(data)
      .then((newCard) => {
        setCardsList([newCard, ...cardsList]);
      })
    closeAllPopups()
  }
  //? Свойства card для передачи в Main
  const cardProps = {
    cardsList: cardsList,
    onCardDelete: handleCardDelete,
    onCardLike: handleCardLike
  }

  //? Разметка страницы
  return (
    <div className="page">
      <currentUserContext.Provider value={currentUser}>
        <Header />
        <Main cardProps={cardProps} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddCard} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <ImagePopup card={selectedCard} isOpen={imagePopupOpen} onClose={closeAllPopups} />
      </currentUserContext.Provider>
    </div >
  );
}

export default App;
