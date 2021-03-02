import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;

  const userAvatar = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: userAvatar.current.value,
    });
    userAvatar.current.value = "";
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        name="avatar"
        ref={userAvatar}
        placeholder="Ссылка на картинку"
        required
        className="popup__input"
        id="linkAvatar"
      />
      <span className="popup__input_type_error" id="linkAvatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
