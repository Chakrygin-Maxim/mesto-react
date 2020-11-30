import logo from "../images/__logo-header.svg";

function Header() {
  return (
    <header className="header">
      <a
        href="https://chakrygin-maxim.github.io/mesto/"
        className="header__link"
      >
        <img src={logo} alt="Основное лого Mesto" className="header__logo" />
      </a>
    </header>
  );
}

export default Header;
