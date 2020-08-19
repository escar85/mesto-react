import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCard] = React.useState([]);


  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([res, data]) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
        setCard(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <img alt="аватар пользователя" src={userAvatar} className="profile__avatar" onClick={props.onEditAvatar} />
          <div className="profile__block">
            <div className="profile__name-area">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" aria-label="edit-profile" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button type="button" aria-label="add-card" className="profile__card-add-button" onClick={props.onAddPlace}></button>
      </section>

      <ul className="elements">
        {cards.map((item, i) => (
          <Card card={item} key={i} onCardClick={props.onCardClick} />
        ))}
      </ul>
    </>
  );
}

export default Main;
