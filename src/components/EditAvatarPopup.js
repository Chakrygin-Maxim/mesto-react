import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      name="avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Обновить аватар"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        name="avatarLink"
        type="url"
        className="popup__input popup__input_field_avatarLink"
        id="avatarLink-input"
        placeholder="Ссылка на аватар"
        ref={avatarRef}
        required
      />
      <span className="popup__input-error" id="avatarLink-input-error"></span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
