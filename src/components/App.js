import { useState, useEffect } from "react";
import Header from "./Header";
import Profile from "./Profile";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./PopupWithForm";
import AddPlacePopup from "./PopupWithForm";
import EditAvatarPopup from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  // открытие popup Аватара
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  // открытие popup Профиля пользователя
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  // открытие popup Нового места
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups(){
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }


  return (
    <body className="page">
      <Header />
      <Profile onEditAvatarClick={handleEditAvatarClick} onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick}/>
      <Main />
      <Footer />

      <EditProfilePopup name="profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" buttonText="Сохранить" />
      <AddPlacePopup name="mesto" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" buttonText="Создать" />
      <EditAvatarPopup name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" buttonText="Сохранить" />

      <template id="element-template">
        <article className="element">
          <img className="element__photo" />
          <button className="element__button-trash"></button>
          <div className="element__info">
            <h2 className="element__info-name"></h2>
            <div className="element__like-container">
              <button className="element__button-like" type="button"></button>
              <p className="element__likes"></p>
            </div>
          </div>
        </article>
      </template>
    </body>
  );
}

export default App;
