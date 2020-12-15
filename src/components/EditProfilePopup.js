import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditPofilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleInputNameOnChange(event) {
    setName(event.target.value);
  }

  function handleInputAboutOnChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Редактировать профиль"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        className="popup__input popup__input_field_name"
        id="name-input"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        onChange={handleInputNameOnChange}
        defaultValue={name}
        required
      />
      <span className="popup__input-error" id="name-input-error"></span>
      <input
        name="about"
        type="text"
        className="popup__input popup__input_field_job"
        id="job-input"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        onChange={handleInputAboutOnChange}
        defaultValue={description}
        required
      />
      <span className="popup__input-error" id="job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditPofilePopup;
