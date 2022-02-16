import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
function App() {
  return (
    <div>
      <div className="page">
        <Header />
        <Main />
        <Footer />

      </div>
      <div className="popup popup_edit-profile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form id="profileForm" className="popup__form" novalidate>
            <label className="popup__input-label">
              <input id="profileName" name="name" className="popup__input" type="text" placeholder="Введите своё Имя" required
                minlength="2" maxlength="40" />
              <span className="popup__input-error profileName-error"></span>
            </label>
            <label className="popup__input-label">
              <input id="profileAbout" name="about" className="popup__input" type="text" placeholder="Коротко о себе" required
                minlength="2" maxlength="200" />
              <span className="popup__input-error profileAbout-error"></span>
            </label>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
          <button id="profileCloseButton" className="popup__close-button" type="button"></button>
        </div>
      </div>
      <div className="popup popup_create-cards">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form id="cardForm" className="popup__form" novalidate>
            <label className="popup__input-label">
              <input name="name" id="cardName" className="popup__input" type="text" placeholder="Название" required
                minlength="2" maxlength="30" />
              <span className="popup__input-error cardName-error"></span>
            </label>
            <label className="popup__input-label">
              <input name="link" id="cardLink" className="popup__input" type="url" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error cardLink-error"></span>
            </label>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
          <button id="cardPopCloseButton" className="popup__close-button" type="button"></button>
        </div>
      </div>
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
      <div className="popup popup_change-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить Аватар</h2>
          <form id="avatarForm" className="popup__form" novalidate>
            <label className="popup__input-label">
              <input id="avatarLink" name="avatar" className="popup__input" type="url" placeholder="Введите ссылку" required />
              <span className="popup__input-error avatarLink-error"></span>
            </label>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
          <button id="popupAvatarCloseButton" className="popup__close-button" type="button"></button>
        </div>
      </div>
      <template id="cardTemplate">
        <li className="cards__list_element">
          <button type="button" className="cards__delete-button hide_delete-button"></button>
          <img className="cards__image" alt="." />
          <div className="cards__info">
            <h2 className="cards__name"></h2>
            <div className="cards__like-container">
              <button type="button" className="cards__like-button"></button>
              <p className="cards__like-number"></p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
