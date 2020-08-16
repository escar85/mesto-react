import React from 'react';

function Main(props) {
  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <img alt="аватар пользователя" className="profile__avatar" onClick={props.onEditAvatar} />
          <div className="profile__block">
            <div className="profile__name-area">
              <h1 className="profile__name"></h1>
              <button type="button" aria-label="edit-profile" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job"></p>
          </div>
        </div>
        <button type="button" aria-label="add-card" className="profile__card-add-button" onClick={props.onAddPlace}></button>
      </section>

      <ul className="elements">
      </ul>
    </>
  );
}

export default Main;
