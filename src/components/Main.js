import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем стейт
        setCards(newCards);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id === !card._id);
        setCards(newCards)
      })
  }

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <img alt="аватар пользователя" src={currentUser.avatar} className="profile__avatar" onClick={props.onEditAvatar} />
          <div className="profile__block">
            <div className="profile__name-area">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button type="button" aria-label="edit-profile" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" aria-label="add-card" className="profile__card-add-button" onClick={props.onAddPlace}></button>
      </section>

      <ul className="elements">
        {cards.map((item, i) => (
          <Card
            card={item}
            key={i}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </ul>
    </>
  );
}

export default Main;
