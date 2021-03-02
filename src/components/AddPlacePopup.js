import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace } = props;

  const placeName = useRef();
  const placeLink = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: placeName.current.value,
      link: placeLink.current.value,
    });
    placeName.current.value = "";
    placeLink.current.value = "";
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Название"
        ref={placeName}
        defaultValue=""
        required
        minLength="1"
        maxLength="30"
        className="popup__input"
        id="cardName"
      />
      <span className="popup__input_type_error" id="cardName-error"></span>
      <input
        type="url"
        name="link"
        ref={placeLink}
        placeholder="Ссылка на картинку"
        defaultValue=""
        required
        className="popup__input"
        id="linkPhoto"
      />
      <span className="popup__input_type_error" id="linkPhoto-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
