import { Route, Switch, Redirect, useHistory } from "react-router-dom";

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
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Register from "./Register";
import SuccessTooltip from "./SuccessTooltip";
import ErrorTooltip from "./ErrorTooltip";
import * as auth from "../utils/auth";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isSuccessTooltipOpen, setIsSuccessTooltipOpen] = useState(false);
  const [isErrorTooltipOpen, setIsErrorTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ link: "", name: "" });
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    name: "",
    about: "",
    avatar: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [userMail, setUserMail] = useState("");

  const history = useHistory();

  // установка данных пользователя и начальные карточки при монтировании
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserInfo(userData);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  useEffect(() => {
    handleCheckToken();
  }, [history]);

  function handleCheckToken() {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setUserMail(res.data.email);
            setLoggedIn(true);
            history.push("/");
          } else {
            localStorage.removeItem("jwt");
          }
        })

        .catch((error) => {
          setIsErrorTooltipOpen(true);
          console.log("Ошибка. Запрос не выполнен:", error);
        });
    }
  }

  // установка данных пользователя
  function setUserInfo(data) {
    const { _id, name, about, avatar } = data;
    setCurrentUser({ _id, name, about, avatar });
  }

  // открытие popup Аватара
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
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
    return api
      .updateUserInfo(data.name, data.about)
      .then((userData) => {
        setUserInfo(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }

  // обновление аватара пользователя
  function handleUpdateAvatar(avatar) {
    return api
      .updateAvatar(avatar)
      .then((userData) => {
        setUserInfo(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }

  // добавление новой карточки
  function handleAddPlaceSubmit(inputValues) {
    return api
      .addCard(inputValues.cardName, inputValues.link)
      .then((data) => {
        const newCards = cards.slice();
        newCards.unshift(data);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }

  // установка-снятие лайка картинки
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }

  // удаление карточки
  function handleCardDelete(cardId) {
    return api
      .deleteCard(cardId)
      .then((data) => {
        const currentCards = cards.filter((item) => {
          return item._id !== cardId;
        });
        setCards(currentCards);
        return data;
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }

  // логин сотрудника на сайте
  function handleLoginSubmit(mail, password) {
    auth.authorize(mail, password).then((data) => {
      if (data.token) {
        setUserMail(mail);
        setLoggedIn(true);
        history.push("/");
      } else {
        setIsErrorTooltipOpen(true);
      }
    });
  }

  // регистрация пользователя на сайте
  function handleRegisterSubmit(mail, password) {
    auth
      .register(mail, password)
      .then((res) => {
        if (res.data) {
          history.push("/sign-in");
          setIsSuccessTooltipOpen(true);
        } else {
          setIsErrorTooltipOpen(true);
        }
      })

      .catch((error) => {
        setIsErrorTooltipOpen(true);
        console.log("Ошибка. Запрос не выполнен:", error);
      });
  }

  // закрывает все popup
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsSuccessTooltipOpen(false);
    setIsErrorTooltipOpen(false);
    setSelectedCard({ link: "", name: "" });
  }

  // логаут с сайта
  function handleLogout() {
    setLoggedIn(false);
    setUserMail("");
    localStorage.removeItem("jwt");
    history.push("/sign-in");
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          loggedIn={loggedIn}
          userMail={userMail}
          onLogoutClick={handleLogout}
        />
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            component={Main}
            loggedIn={loggedIn}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onEditAvatarClick={handleEditAvatarClick}
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <ProtectedRoute exact path="/" component={Footer} />

          <Route path="/sign-up">
            <Register onSubmitButton={handleRegisterSubmit} />
          </Route>

          <Route path="/sign-in">
            <Login onSubmitButton={handleLoginSubmit} />
          </Route>
          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
          </Route>
        </Switch>
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
        <SuccessTooltip
          isOpen={isSuccessTooltipOpen}
          onClose={closeAllPopups}
        />
        <ErrorTooltip isOpen={isErrorTooltipOpen} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
