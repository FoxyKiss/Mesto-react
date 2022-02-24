import React from 'react'

export default function PopUpWithForm({ formProps, isOpen, onClose, children, onSubmit }) {
  //? Функция открытия Popup
  function openPopup() {
    if (isOpen) {
      const open = 'popup_open'
      return open
    }
  }
  const openPopClass = openPopup()

  //? Основная разметка Popup
  return (
    <div className={`popup popup_${formProps.name} ${openPopClass} `}>
      <div className="popup__container">
        <h2 className="popup__title">{formProps.title}</h2>
        <form id={formProps.formId} className="popup__form" onSubmit={onSubmit} noValidate>
          {children}
          <button className="popup__save-button" type="submit">{formProps.buttonText}</button>
        </form>
        <button className="popup__close-button" type="button" onClick={onClose}></button>
      </div>
    </div>
  );
}