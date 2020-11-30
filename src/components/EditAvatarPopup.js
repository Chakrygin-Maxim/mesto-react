import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
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
            name="avatarLink"
            type="url"
            className="popup__input popup__input_field_avatarLink"
            id="avatarLink-input"
            placeholder="Ссылка на аватар"
            required
          />
          <span
            className="popup__input-error"
            id="avatarLink-input-error"
          ></span>
        </>
      }
    ></PopupWithForm>
  );
}
export default EditAvatarPopup;
