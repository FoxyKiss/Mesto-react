import avatar from '../images/Avatar.jpg'

export default function Main() {

  return (
    <div className="content">
      <section className="profile">
        <div name="profile" className="profile__avatar-container">
          <img className="profile__avatar" src={avatar} alt="Аватар" />
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-edit" type="button"></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Поляков Арсений</h1>
          <p className="profile__subtitle">Вдохновлённый руинами</p>
          <button className="profile__edit-button" type="button" ></button>
        </div>
        <button className="profile__add-button"></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
        </ul>
      </section>
    </div>
  );
}
