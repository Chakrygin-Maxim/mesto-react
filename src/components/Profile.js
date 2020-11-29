import Avatar from "../images/__image.jpg";

function Profile(props) {

  return (
    <section className="profile">
      <div className="profile__main-container">
        <div className="profile__image-container" onClick={props.onEditAvatarClick}>
          <img src={Avatar} alt="Аватар" className="profile__image" />
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__button-edit" type="button" onClick={props.onEditProfileClick}></button>
          </div>
          <p className="profile__job">Исследователь океана</p>
        </div>
      </div>
      <button className="profile__button-add" type="button" onClick={props.onAddPlaceClick}></button>
    </section>
  );
}

export default Profile;
