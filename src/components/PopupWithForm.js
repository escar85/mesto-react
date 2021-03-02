import React from "react";

function PopupWithForm(props) {
  const { isOpen, onClose, onSubmit, name, title, children } = props;
  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""} popup-${name}`}>
      <form
        name={name}
        onSubmit={onSubmit}
        method="post"
        action="#"
        className="popup__container"
        id={name}
        noValidate
      >
        <h3 className="popup__title">{title}</h3>
        {children}
        <button type="submit" className="popup__submit-button">
          Сохранить
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

export default PopupWithForm;
