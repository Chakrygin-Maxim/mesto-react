function ImagePopup(props) {
  return (
    <section
      className={`popup popup_form_photo ${props.card.link && "popup_opened"}`}
    >
      <figure className="popup__image-container">
        <img
          src={props.card.link}
          alt={props.card.name}
          className="popup__image"
        />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        ></button>
      </figure>
    </section>
  );
}

export default ImagePopup;
