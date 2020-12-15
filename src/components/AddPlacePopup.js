import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const cardNameRef = useRef();
  const linkRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const inputValues = {
      [cardNameRef.current.name]: cardNameRef.current.value,
      [linkRef.current.name]: linkRef.current.value,
    };

    props.onAddPlace(inputValues);
  }

  return (
    <PopupWithForm
      name="mesto"
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Новое место"
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <input
        name="cardName"
        type="text"
        className="popup__input popup__input_field_cardName"
        id="cardName-input"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        ref={cardNameRef}
        required
      />
      <span className="popup__input-error" id="cardName-input-error"></span>
      <input
        name="link"
        type="url"
        className="popup__input popup__input_field_link"
        id="link-input"
        placeholder="Ссылка на картинку"
        ref={linkRef}
        required
      />
      <span className="popup__input-error" id="link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
