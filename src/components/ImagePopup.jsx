export default function ImagePopup() {
  return (
    <div className="popup popup_images">
      <div className="popup__image-container">
        <img className="popup__image" src="." alt="." />
        <p className="popup__image-name"></p>
        <button id="imagePopCloseButton" className="popup__close-button" type="button"></button>
      </div>
    </div>
  );
}