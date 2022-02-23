import React from 'react'
import PopUpWithForm from '../PopupWithForm'
import { AvatarPopup } from '../popupsMarkup/popupsMarkup'

export default function EditAvatarPopup({ isOpen, onClose }) {

  const [avatar, setAvatar] = React.useState('')

  //? Разметка AvatarPopup
  return (
    <PopUpWithForm name='change-avatar' title='Обновить Аватар' formId='avatarForm' buttonText='Сохранить' isOpen={isOpen} onClose={onClose}>
      <AvatarPopup avatar={avatar} setAvatar={setAvatar} />
    </PopUpWithForm>
  );
}