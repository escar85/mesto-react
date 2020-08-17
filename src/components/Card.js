import React from 'react';

function Card(props) {
  return (
    <li className="element">
      <img alt="" className="element__image" src={props.card.link} />
      <button type="button" aria-label="delete" className="element__delete-button element__delete-button_hidden"></button>
      <div className="element__info">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-area">
          <button type="button" aria-label="like" className="element__like-button"></button>
          <span className="element__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
