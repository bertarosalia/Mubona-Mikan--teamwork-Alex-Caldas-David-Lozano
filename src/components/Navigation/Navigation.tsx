import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): JSX.Element => (
  <NavigationStyled>
    <nav className="navigation-anime">
      <ul className="list-animes">
        <li className="list-animes__links">
          <NavLink to="/home-page" className={"nav-links"}>
            Home
          </NavLink>
        </li>
        <li className="list-animes__links">
          <NavLink to="/animes" className={"nav-links"}>
            Animes
          </NavLink>
        </li>
        <li className="list-animes__links">
          <NavLink to="/my-list" className={"nav-links"}>
            My List
          </NavLink>
        </li>
        <li>
          <NavLink to="*"></NavLink>
        </li>
      </ul>
    </nav>
  </NavigationStyled>
);

export default Navigation;
