import React from "react";

function ImagePopup(props) {
  const { card, onClose } = props;

  return (
    <figure className={`popup popup_big-image ${card && "popup_opened"}`}>
      <div className="popup__image-box">
        <img
          alt={card ? card.name : ""}
          className="popup__image"
          src={card ? card.link : ""}
        />
        <figcaption className="popup__image-caption">
          {card ? card.name : ""}
        </figcaption>
        <button
          type="button"
          aria-label="close"
          className="popup__close-button"
          onClick={onClose}
        ></button>
      </div>
    </figure>
  );
}

export default ImagePopup;
