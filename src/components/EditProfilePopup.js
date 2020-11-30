import PopupWithForm from "./PopupWithForm";

function EditPofilePopup(props) {
  return (
    <PopupWithForm
      name={props.name}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={props.title}
      buttonText={props.buttonText}
      children={
        <>
          <input
            name="name"
            type="text"
            class="popup__input popup__input_field_name"
            id="name-input"
            placeholder="Имя"
            minlength="2"
            maxlength="40"
            required
          />
          <span class="popup__input-error" id="name-input-error"></span>
          <input
            name="job"
            type="text"
            class="popup__input popup__input_field_job"
            id="job-input"
            placeholder="О себе"
            minlength="2"
            maxlength="200"
            required
          />
          <span class="popup__input-error" id="job-input-error"></span>
        </>
      }
    ></PopupWithForm>
  );
}

export default EditPofilePopup;
