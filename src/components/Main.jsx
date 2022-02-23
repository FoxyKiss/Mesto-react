import React from 'react';
import Card from './Card'
import api from '../utils/Api'
import { currentUserContext } from '../contexts/currentUserContext'

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  //? Подписываемся на контекст для получения данных пользователя
  const currentUser = React.useContext(currentUserContext)

  //? State переменная для получения массива карточек
  const [cardsList, setCardsList] = React.useState([]);

  //?Изменение state переменной для получения массива карточек
  React.useEffect(() => {
    Promise.all([api.getStartCards()])
      .then(([cardsList]) => {
        setCardsList(cardsList);
      }).catch((err) => {
        console.log(`Ошибка: ${err.status}`)
      });
  }, []);

  //? Реализация удаления карточки
  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
      .then(() => {
        setCardsList(cardsList.filter((item) => {
          return item._id !== cardId
        }))
      })
  }

  //? Реализация лайка карточки


  //? Разметка основного контента
  return (
    <main className="content">
      <section className="profile">
        <div name="profile" className="profile__avatar-container">
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-edit" type="button" onClick={onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <p className="profile__subtitle">{currentUser.about}</p>
          <button className="profile__edit-button" type="button" onClick={onEditProfile} ></button>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cardsList.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick} onCardDelete={handleCardDelete} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}