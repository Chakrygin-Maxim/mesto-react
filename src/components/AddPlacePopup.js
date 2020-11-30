import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name="mesto"
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={props.title}
      buttonText={props.buttonText}
      children={
        <>
          <input
            name="cardName"
            type="text"
            className="popup__input popup__input_field_cardName"
            id="cardName-input"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error" id="cardName-input-error"></span>
          <input
            name="link"
            type="url"
            className="popup__input popup__input_field_link"
            id="link-input"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error" id="link-input-error"></span>
        </>
      }
    ></PopupWithForm>
  );
}

export default AddPlacePopup;
