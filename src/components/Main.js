import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCard] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCard(res);
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
          <Card card={item} key={i} />
        ))}
      </ul>
    </>
  );
}

export default Main;
