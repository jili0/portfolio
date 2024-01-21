import "../stylesheets/nav.css";
import pageLinks from "../data/pageLinks";

const Nav = () => {
  return (
    <nav>
      <ul className="nav__ul">
        {pageLinks.map(({ id, href, text }) => (
          <li key={id}>
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
