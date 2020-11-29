import { useState, useEffect } from "react";
import api from "../utils/api.js";

function Profile(props) {
  const [userName, setUserName] = useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    });
  }, []);

  return (
    <section className="profile">
      <div className="profile__main-container">
        <div
          className="profile__image-container"
          onClick={props.onEditAvatarClick}
        >
          <img src={userAvatar} alt="Аватар" className="profile__image" />
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
      </div>
      <button
        className="profile__button-add"
        type="button"
        onClick={props.onAddPlaceClick}
      ></button>
    </section>
  );
}

export default Profile;
