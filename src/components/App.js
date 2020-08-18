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
  const [selectedCard, setSelectedCard] = React.useState('');

  return (
    <div className="root">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input type="text" name="name" required minLength="2" maxLength="40" className="popup__input" id="inputName" />
            <span className="popup__input_type_error" id="inputName-error"></span>
            <input type="text" name="about" required minLength="2" maxLength="200" className="popup__input" id="inputJob" />
            <span className="popup__input_type_error" id="inputJob-error"></span>
          </>
        } />

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input type="url" name="avatar" placeholder="Ссылка на картинку" value="" required className="popup__input"
              id="linkAvatar" />
            <span className="popup__input_type_error" id="linkAvatar-error"></span>
          </>
        } />

      <PopupWithForm
        name='add-card'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input type="text" name="name" placeholder="Название" value="" required minLength="1" maxLength="30"
              className="popup__input" id="cardName" />
            <span className="popup__input_type_error" id="cardName-error"></span>
            <input type="url" name="link" placeholder="Ссылка на картинку" value="" required className="popup__input"
              id="linkPhoto" />
            <span className="popup__input_type_error" id="linkPhoto-error"></span>
          </>
        } />

      <PopupWithForm
        name='delete-card'
        title='Вы уверены?'
        onClose={closeAllPopups}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );

  function handleCardClick(card) {
    setSelectedCard(card);
  }

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
    setSelectedCard('');
  }
}

export default App;
