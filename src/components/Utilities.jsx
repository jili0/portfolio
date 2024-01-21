import utilities from "../data/utilities";
import "../stylesheets/utilities.css";

const Utilities = () => {
  return utilities.map(({ id, title, href }) => (
    <li key={id} className="utilityListItem">
      <p className="utilityTitle">{title}</p>
      <a className="utilityLink" href={href} target='_blank' rel='noreferrer'>{href}</a>
    </li>
  ));
};

export default Utilities;
