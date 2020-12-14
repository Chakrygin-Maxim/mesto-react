import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  return (
    <article className="element">
      <img
        className="element__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <button
        className={`element__button-trash ${isOwn && "button-trash_visible"}`}
      ></button>
      <div className="element__info">
        <h2 className="element__info-name">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className={`element__button-like ${
              isLiked && "element__button-like_status_liked"
            }`}
            type="button"
          ></button>
          <p className="element__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
