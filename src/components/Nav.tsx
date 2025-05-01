import Link from "next/link";
import pageLinks from "@/data/pageLinks";

export default function Nav() {
  return (
    <nav>
      <ul className="nav__ul">
        {pageLinks.map(({ id, href, text }) => (
          <li key={id}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}