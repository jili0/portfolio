import "../stylesheets/header.css";
import Nav from "./Nav";


const Header = () => {
  return (
    <header className="header">
      <p className="header__title nowrap">Jing Li</p>
      <Nav />
    </header>
  );
};

export default Header;
