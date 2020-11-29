function Card(props) {
  return (
    <article className="element">
      <img className="element__photo" src={props.link} alt={props.name} />
      <button className="element__button-trash"></button>
      <div className="element__info">
        <h2 className="element__info-name">{props.name}</h2>
        <div className="element__like-container">
          <button className="element__button-like" type="button"></button>
          <p className="element__likes">{props.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
