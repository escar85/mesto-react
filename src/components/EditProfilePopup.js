import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props;

  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        required
        minLength="2"
        maxLength="40"
        className="popup__input"
        id="inputName"
        defaultValue={name}
        onChange={handleNameChange}
      />
      <span className="popup__input_type_error" id="inputName-error"></span>
      <input
        type="text"
        name="about"
        required
        minLength="2"
        maxLength="200"
        className="popup__input"
        id="inputJob"
        defaultValue={description}
        onChange={handleDescriptionChange}
      />
      <span className="popup__input_type_error" id="inputJob-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
