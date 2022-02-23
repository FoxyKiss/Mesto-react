import React from 'react'
import PopUpWithForm from '../PopupWithForm'
import { ProfilePopup } from '../popupsMarkup/popupsMarkup'
import { currentUserContext } from '../../contexts/currentUserContext'

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  //? Подписываемся на контекст для получения данных пользователя
  const currentUser = React.useContext(currentUserContext)

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  //?State переменные для полей ввода
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const profileInfo = { name, setName, description, setDescription }

  //? Функция отправки формы
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }


  //? Разметка ProfilePopup
  return (
    <PopUpWithForm name='edit-profile' title='Редактировать профиль' formId='profileForm' buttonText='Сохранить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <ProfilePopup profileInfo={profileInfo} />
    </PopUpWithForm>
  );
}