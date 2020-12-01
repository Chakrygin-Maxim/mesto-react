import PopupWithForm from "./PopupWithForm";

function EditPofilePopup(props) {
  return (
    <PopupWithForm
      name={props.name}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={props.title}
      buttonText={props.buttonText}
    >
      <input
        name="name"
        type="text"
        className="popup__input popup__input_field_name"
        id="name-input"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error" id="name-input-error"></span>
      <input
        name="job"
        type="text"
        className="popup__input popup__input_field_job"
        id="job-input"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error" id="job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditPofilePopup;
