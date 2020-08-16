import React from 'react';

function ImagePopup() {
  return (
    <figure className="popup popup_big-image">
      <div className="popup__image-box">
        <img alt="" className="popup__image" />
        <figcaption className="popup__image-caption"></figcaption>
        <button type="button" aria-label="close" className="popup__close-button"></button>
      </div>
    </figure>
  );
}

export default ImagePopup;
