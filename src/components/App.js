import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  return (
    <body className="root">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} />
      <Footer />
      <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children={
        <>
          <input type="text" name="name" required minLength="2" maxLength="40" className="popup__input" id="inputName" />
          <span className="popup__input_type_error" id="inputName-error"></span>
          <input type="text" name="about" required minLength="2" maxLength="200" className="popup__input" id="inputJob" />
          <span className="popup__input_type_error" id="inputJob-error"></span>
        </>
      } />

      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={
        <>
          <input type="url" name="avatar" placeholder="Ссылка на картинку" value="" required className="popup__input"
            id="linkAvatar" />
          <span className="popup__input_type_error" id="linkAvatar-error"></span>
        </>
      } />

      <PopupWithForm name='add-card' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={
        <>
          <input type="text" name="name" placeholder="Название" value="" required minLength="1" maxLength="30"
            className="popup__input" id="cardName" />
          <span className="popup__input_type_error" id="cardName-error"></span>
          <input type="url" name="link" placeholder="Ссылка на картинку" value="" required className="popup__input"
            id="linkPhoto" />
          <span className="popup__input_type_error" id="linkPhoto-error"></span>
        </>
      } />

      <PopupWithForm name='delete-card' title='Вы уверены?' onClose={closeAllPopups}/>
      <ImagePopup />




      <template className="template" id="template">
        <li className="element">
          <img alt="" className="element__image" />
          <button type="button" aria-label="delete" className="element__delete-button element__delete-button_hidden"></button>
          <div className="element__info">
            <h2 className="element__title"></h2>
            <div className="element__like-area">
              <button type="button" aria-label="like" className="element__like-button"></button>
              <span className="element__like-count"></span>
            </div>
          </div>
        </li>
      </template>
    </body>
  );

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
}

export default App;
