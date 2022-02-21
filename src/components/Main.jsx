import React from 'react';
import api from '../utils/Api'
import Card from './Card'

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  //? State переменные данных профиля
  const [userName, setUserName] = React.useState('');
  const [userAbout, setUserAbout] = React.useState('');
  const [userAvatar, setuserAvatar] = React.useState('');
  //? State переменная для карточек
  const [cards, setCards] = React.useState([]);

  //? Запуск генерации информации и получение массива Карточек при монтировании проекта.
  React.useEffect(() => {
    Promise.all([api.getInfo(), api.getStartCards()])
      .then(([info, cards]) => {
        setUserName(info.name)
        setUserAbout(info.about)
        setuserAvatar(info.avatar)
        setCards(cards)
      }).catch((err) => {
        console.log(`Ошибка: ${err.status}`)
      });

  }, [])

  //? Разметка основного контента
  return (
    <main className="content">
      <section className="profile">
        <div name="profile" className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-edit" type="button" onClick={onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userAbout}</p>
          <button className="profile__edit-button" type="button" onClick={onEditProfile} ></button>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (
              <Card key={card._id} name={card.name} link={card.link} likes={card.likes} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}