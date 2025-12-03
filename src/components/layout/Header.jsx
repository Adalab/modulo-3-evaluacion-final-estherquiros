import { Link } from "react-router";

function Header() {
  return (
    <Link to={"/"}>
      <header className="header">
        <img
          src="images/logo-harry-potter.png"
          alt="Logo Harry Potter"
          className="header__logo"
        />
      </header>
    </Link>
  );
}
export default Header;
