import logo from "../images/logo-header.svg";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const { pathname } = useLocation();

  const linkText = `${pathname === "/sign-in" ? "Регистрация" : "Войти"}`;
  const pathTo = `${pathname === "/sign-in" ? "/sign-up" : "/sign-in"}`;

  function hendleSignup(evt) {
    evt.preventdefault();
  }

  function handleSignin(evt) {
    evt.preventdefault();
  }

  return (
    <header className="header">
      <a
        href="https://chakrygin-maxim.github.io/mesto-react/"
        className="header__link"
      >
        <img src={logo} alt="Основное лого Mesto" className="header__logo" />
      </a>
      <Link className="header__link header__text" to={pathTo}>
        {linkText}
      </Link>
      {/* <p onClick={props.onClick}>{linkText}</p> */}
    </header>
  );
}

export default Header;
