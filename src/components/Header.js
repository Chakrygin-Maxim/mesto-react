import logo from "../images/logo-header.svg";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const { pathname } = useLocation();

  const linkText = `${pathname === "/sign-in" ? "Регистрация" : "Войти"}`;
  const pathTo = `${pathname === "/sign-in" ? "/sign-up" : "/sign-in"}`;

  return (
    <header className="header">
      <a
        href="https://chakrygin-maxim.github.io/mesto-react/"
        className="header__link"
      >
        <img src={logo} alt="Основное лого Mesto" className="header__logo" />
      </a>
      {props.loggedIn ? (
        <div className="header__user-container">
          <p className="header__text">{props.userMail}</p>
          <button
            className="header__text header__button"
            onClick={props.onLogoutClick}
          >
            Выйти
          </button>
        </div>
      ) : (
        <Link className="header__link header__text" to={pathTo}>
          {linkText}
        </Link>
      )}
    </header>
  );
}

export default Header;
