import React from 'react';
import api from '../utils/Api'

export default function Main(props) {
  //? State переменные данных страницы
  const [userName, setUserName] = React.useState('');
  const [userAbout, setUserAbout] = React.useState('');
  const [userAvatar, setuserAvatar] = React.useState('');
  //? Запуск генерации информации при монтировании проекта.
  React.useEffect(() => {
    Promise.all([api.getInfo()])
      .then(([info]) => {
        setUserName(info.name)
        setUserAbout(info.about)
        setuserAvatar(info.avatar)
      }).catch((err) => {
        console.log(`Ошибка: ${err.status}`)
      });

  }, [])

  return (
    <div className="content">
      <section className="profile">
        <div name="profile" className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userAbout}</p>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile} ></button>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
        </ul>
      </section>
    </div>
  );
}
