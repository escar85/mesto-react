import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import ConfirmDeleteCardPopup from "./ConfirmDeleteCardPopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [
    isConfirmDeleteCardPopupOpen,
    setConfirmDeleteCardPopupOpen,
  ] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [currentUser, setCurrentUser] = useState([]);
  const [cards, setCards] = useState([]);

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

  function handleConfirmDeleteCardClick(card) {
    setConfirmDeleteCardPopupOpen(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(undefined);
    setConfirmDeleteCardPopupOpen("");
  }

  // обработчик обновления данных пользователя
  function handleUpdateUser(newInfo) {
    api
      .setUserInfo(newInfo)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
    closeAllPopups();
  }

  // обработчик обновления аватара
  function handleUpdateAvatar(newAvatar) {
    api
      .setUserAvatar(newAvatar)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
    closeAllPopups();
  }

  // обработчик постановки/снятия лайка карточек
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // обработчик удаления карточки
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
    closeAllPopups();
  }

  // обработчик добавления новой карточки
  function handleAddPlaceSubmit(newCard) {
    api
      .addCard(newCard)
      .then((newCard) => {
        setCards([...cards, newCard]);
      })
      .catch((err) => {
        console.log(err);
      });
    closeAllPopups();
  }

  // эффект для получения массива карточек и данных пользователя с сервера
  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([data, user]) => {
        setCards(data);
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // эффект для закрытия попапов кликом на оверлей или по нажатию клавиши "ESC"
  useEffect(() => {
    function handleCloseByOverlayClickAndPressEscape(e) {
      if (e.key === "Escape" || e.target.classList.contains("popup_opened")) {
        closeAllPopups();
      }
    }

    document.addEventListener("click", handleCloseByOverlayClickAndPressEscape);
    document.addEventListener(
      "keydown",
      handleCloseByOverlayClickAndPressEscape
    );

    return () => {
      document.removeEventListener(
        "click",
        handleCloseByOverlayClickAndPressEscape
      );
      document.removeEventListener(
        "keydown",
        handleCloseByOverlayClickAndPressEscape
      );
    };
  });

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleConfirmDeleteCardClick}
          cards={cards}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <ConfirmDeleteCardPopup
          isOpen={isConfirmDeleteCardPopupOpen}
          onClose={closeAllPopups}
          onCardDelete={handleCardDelete}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
