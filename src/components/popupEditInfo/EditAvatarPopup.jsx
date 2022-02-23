import React from 'react'
import PopUpWithForm from '../PopupWithForm'
import { AvatarPopup } from '../popupsMarkup/popupsMarkup'
export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  //? Создание рефа
  const avatarRef = React.useRef({})

  //? Функция отправки формы
  function handleSubmit(evt) {
    evt.preventDefault()

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    })
  }

  //? Разметка AvatarPopup
  return (
    <PopUpWithForm name='change-avatar' title='Обновить Аватар' formId='avatarForm' buttonText='Сохранить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} >
      <AvatarPopup avatarRef={avatarRef} />
    </PopUpWithForm>
  );
}