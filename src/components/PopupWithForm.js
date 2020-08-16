import React from 'react';

function PopupWithForm(props) {
  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''} popup-${props.name}`}>
      <form name={props.name} method="post" action="#" className="popup__container" id="profileForm" noValidate>
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
        <button type="submit" className="popup__submit-button">Сохранить</button>
        <button type="button" aria-label="close" className="popup__close-button profile-close-button" onClick={props.onClose}></button>
      </form>
    </section>
  );
}

export default PopupWithForm;