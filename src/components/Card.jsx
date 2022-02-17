//? Разметка краточек
export default function Card({ name, link, likes }) {
  return (<li className="cards__list_element">
    <button type="button" className="cards__delete-button hide_delete-button"></button>
    <img className="cards__image" src={link} alt={name} />
    <div className="cards__info">
      <h2 className="cards__name">{name}</h2>
      <div className="cards__like-container">
        <button type="button" className="cards__like-button"></button>
        <p className="cards__like-number">{likes.length}</p>
      </div>
    </div>
  </li>);
}