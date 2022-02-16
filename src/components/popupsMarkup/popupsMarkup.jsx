function ProfilePopup() {

  return (
    <>
      <label className="popup__input-label">
        <input id="profileName" name="name" className="popup__input" type="text" placeholder="Введите своё Имя" required
          minLength="2" maxLength="40" />
        <span className="popup__input-error profileName-error"></span>
      </label>
      <label className="popup__input-label">
        <input id="profileAbout" name="about" className="popup__input" type="text" placeholder="Коротко о себе" required
          minLength="2" maxLength="200" />
        <span className="popup__input-error profileAbout-error"></span>
      </label>
    </>
  );
}

function CardPopup() {

  return (
    <>
      <label className="popup__input-label">
        <input name="name" id="cardName" className="popup__input" type="text" placeholder="Название" required
          minLength="2" maxLength="30" />
        <span className="popup__input-error cardName-error"></span>
      </label>
      <label className="popup__input-label">
        <input name="link" id="cardLink" className="popup__input" type="url" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error cardLink-error"></span>
      </label>
    </>
  );
}

function AvatarPopup() {
  return (
    <>
      <label className="popup__input-label">
        <input id="avatarLink" name="avatar" className="popup__input" type="url" placeholder="Введите ссылку" required />
        <span className="popup__input-error avatarLink-error"></span>
      </label>
    </>
  );
}

export { ProfilePopup, CardPopup, AvatarPopup }