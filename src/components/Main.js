import { useState, useEffect } from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  let userId = "";

  function setUserData(userData) {
    setUserName(userData.name);
    setUserDescription(userData.about);
    setUserAvatar(userData.avatar);
    userId = userData._id;
  }

  function setInitialCards(inititialCards) {
    setCards(inititialCards);
  }

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
      ([userData, initialCards]) => {
        setUserData(userData);
        setInitialCards(initialCards);
      }
    );
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
            <img src={userAvatar} alt="Аватар" className="profile__image" />
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__button-edit"
                type="button"
                onClick={props.onEditProfileClick}
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
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
        {cards.map((item, key) => (
          <Card key={key} card={item} onCardClick={props.onCardClick}></Card>
        ))}
      </main>
    </>
  );
}

export default Main;
