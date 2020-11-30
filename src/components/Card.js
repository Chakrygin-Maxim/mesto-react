function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <img
        className="element__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <button className="element__button-trash"></button>
      <div className="element__info">
        <h2 className="element__info-name">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__button-like" type="button"></button>
          <p className="element__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
