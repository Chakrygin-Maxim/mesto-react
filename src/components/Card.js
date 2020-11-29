function Card(props) {
  return (
    <article class="element">
      <img class="element__photo" src={props.link} alt={props.name} />
      <button class="element__button-trash"></button>
      <div class="element__info">
        <h2 class="element__info-name">{props.name}</h2>
        <div class="element__like-container">
          <button class="element__button-like" type="button"></button>
          <p class="element__likes">{props.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
