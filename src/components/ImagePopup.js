function ImagePopup() {
  return (
    <section className="popup popup_form_photo">
      <figure className="popup__image-container">
        <img src="#" alt="" className="popup__image" />
        <figcaption className="popup__caption"></figcaption>
        <button className="popup__button-close" type="button"></button>
      </figure>
    </section>
  );
}

export default ImagePopup;
