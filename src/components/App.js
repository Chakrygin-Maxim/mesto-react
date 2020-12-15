import { useState, useEffect } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

import api from "../utils/api.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ link: "", name: "" });
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    name: "",
    about: "",
    avatar: "",
  });

  // установка данных пользователя и начальные карточки при монтировании
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
      ([userData, initialCards]) => {
        setUserInfo(userData);
        setCards(initialCards);
      }
    );
  }, []);

  // установка данных пользователя
  function setUserInfo(data) {
    const { _id, name, about, avatar } = data;
    setCurrentUser({ _id, name, about, avatar });
  }

  // открытие popup Аватара
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  // открытие popup Профиля пользователя
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  // открытие popup Нового места
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  // открытие popup с местом
  function handleCardClick(card) {
    const { link, name } = card;
    setSelectedCard({ link, name });
  }

  // обновление данных пользователя
  function handleUpdateUser(data) {
    return api.updateUserInfo(data.name, data.about).then((userData) => {
      setUserInfo(userData);
      closeAllPopups();
    });
  }

  // обновление аватара пользователя
  function handleUpdateAvatar(Avatar) {
    return api.updateAvatar(Avatar).then((userData) => {
      setUserInfo(userData);
      closeAllPopups();
    });
  }

  // добавление новой карточки
  function handleAddPlaceSubmit(inputValues) {
    return api.addCard(inputValues.cardName, inputValues.link).then((data) => {
      const newCards = cards.slice();
      newCards.unshift(data);
      setCards(newCards);
      closeAllPopups();
    });
  }

  // установка-снятие лайка картинки
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  // удаление карточки
  function handleCardDelete(cardId) {
    return api.deleteCard(cardId).then((data) => {
      const currentCards = cards.filter((item) => {
        return item._id !== cardId;
      });
      setCards(currentCards);
      return data;
    });
  }

  // закрывает все popup
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({ link: "", name: "" });
  }

  return (
    <body className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </body>
  );
}

export default App;
