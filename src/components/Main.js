import { useState, useEffect, useContext } from "react";
import api from "../utils/api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  function handleCardDelete(cardId) {
    return api.deleteCard(cardId).then((data) => {
      const currentCards = cards.filter((item) => {
        return item._id !== cardId;
      });
      setCards(currentCards);
      return data;
    });
  }

  useEffect(() => {
    api.getInitialCards().then((initialCards) => {
      setCards(initialCards);
    });
  }, []);

  return (
    <>
      {/* Рендер профиля пользователя */}
      <section className="profile">
        <div className="profile__main-container">
          <div
            className="profile__image-container"
            onClick={props.onEditAvatarClick}
          >
            <img
              src={currentUser.avatar}
              alt="Аватар"
              className="profile__image"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__button-edit"
                type="button"
                onClick={props.onEditProfileClick}
              ></button>
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>

      {/* Рендер карточек */}
      <main className="elements">
        {cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          ></Card>
        ))}
      </main>
    </>
  );
}

export default Main;
