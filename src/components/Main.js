import { useContext } from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

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
        {props.cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          ></Card>
        ))}
      </main>
    </>
  );
}

export default Main;
