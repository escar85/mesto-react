import React from "react";

function ConfirmDeleteCardPopup(props) {
  const { isOpen, onClose, onCardDelete } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(isOpen);
  }

  return (
    <section
      className={`popup popup-delete-card ${isOpen ? "popup_opened" : ""}`}
      onSubmit={handleSubmit}
    >
      <form
        name="delete-card"
        method="post"
        action="#"
        className="popup__container"
        id="deleteCardForm"
        noValidate
      >
        <h3 className="popup__title">Вы уверены?</h3>
        <button type="submit" className="popup__submit-button">
          Да
        </button>
        <button
          type="button"
          aria-label="close"
          className="popup__close-button"
          onClick={onClose}
        ></button>
      </form>
    </section>
  );
}

export default ConfirmDeleteCardPopup;
