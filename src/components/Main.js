import { useState, useEffect, useContext } from "react";
import api from "../utils/api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  function setInitialCards(inititialCards) {
    setCards(inititialCards);
  }

  useEffect(() => {
    api.getInitialCards().then((initialCards) => {
      setInitialCards(initialCards);
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
          ></Card>
        ))}
      </main>
    </>
  );
}

export default Main;
